import { KeyboardEventHandler, useCallback, useRef, useState } from 'react';
import { Link } from '../type';
import { useGetFolders } from '@/src/folder/util/useGetFolders';
import { NoLink } from '../ui-no-link/NoLink';
import { CardList as UiCardList } from '../ui-card-list/CardList';
import { EditableCard } from '../ui-editable-card/EditableCard';
import { MODALS_ID } from './constant';
import { AlertModal } from '@/src/commons/ui-alert-modal/AlertModal';
import { AddLinkModal } from '../ui-add-link-modal/AddLinkModal';

// 카드 리스트 프롭
type CardListProps = {
  links: Link[];
};

// 기능적인 부분을 담당하는 카드 리스트 컴포넌트
export const CardList = ({ links }: CardListProps) => {
  const { data: folders } = useGetFolders();
  const cardListRef = useRef(null);
  const [selectedFolderId, setSelectedFolderId] = useState<number | null>(null);
  const [currentModal, setCurrentModal] = useState<string | null>(null);
  const [selectedLinkUrl, setSelectedLinkUrl] = useState<string>('');

  //   모달 창 닫기
  const closeModal = () => setCurrentModal(null);

  //   esc로 모달창 닫기
  const handleKeyDown: KeyboardEventHandler<HTMLDivElement> = (e) => {
    if (e.key === 'Escape') {
      closeModal();
    }
  };

  //   팝오버가 어느 위치에 뜰 지 계산하는 함수
  const getPopoverPosition = useCallback(
    (cardIndex: number) => {
      // grid 상의 카드 열 개수 계산
      const count =
        cardListRef?.current !== null
          ? window
              .getComputedStyle(cardListRef?.current)
              .getPropertyValue('grid-template-columns')
              .split(' ').length
          : 1;
      // 열의 가장 오른쪽 카드일때 right:0으로 삐져나가지 않게
      if ((cardIndex + 1) % count === 0) {
        return { right: 0 };
      }
      // 그 외에는 left:0으로
      return { left: 0 };
    },
    [cardListRef]
  );

  //   폴더에 링크가 없는 경우
  if (links.length === 0) {
    return <NoLink />;
  }

  return (
    <UiCardList>
      {links.map((link, index) => (
        <EditableCard
          key={link?.id}
          popoverPosition={getPopoverPosition(index)}
          onDeleteClick={() => {
            setSelectedLinkUrl(link?.url ?? '');
            setCurrentModal(MODALS_ID.deleteLink);
          }}
          onAddToFolderClick={() => {
            setSelectedLinkUrl(link?.url ?? '');
            setCurrentModal(MODALS_ID.addToFolder);
          }}
          {...link}
        />
      ))}
      <AlertModal
        isOpen={currentModal === MODALS_ID.deleteLink}
        title="링크 삭제"
        description={selectedLinkUrl}
        buttonText="삭제하기"
        onClick={() => {}}
        onCloseClick={closeModal}
        onKeyDown={handleKeyDown}
      />
      <AddLinkModal
        isOpen={currentModal === MODALS_ID.addToFolder}
        folders={folders}
        description={selectedLinkUrl}
        selectedFolderId={selectedFolderId}
        setSelectedFolderId={setSelectedFolderId}
        onAddClick={() => {}}
        onCloseClick={() => {
          setSelectedFolderId(null);
          closeModal();
        }}
        onKeyDown={handleKeyDown}
      />
    </UiCardList>
  );
};
