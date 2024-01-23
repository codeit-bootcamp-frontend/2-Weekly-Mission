import { useKakaoSdk } from '@/src/commons/util/useKakaoSdk';
import { Folder, SelectedFolderId } from '../type';
import styles from './FolderToolBar.module.scss';
import classNames from 'classnames/bind';
import { KeyboardEvent, useState } from 'react';
import { ALL_LINKS_ID } from '../../link/util/constant';
import {
  ALL_LINKS_TEXT,
  BUTTONS,
  KAKAO_SHARE_DATA,
  MODALS_ID,
} from './constant';
import { copyToClipboard } from '@/src/commons/util/copyToClipboard';
import { FolderButton } from '../ui-folder-button/FolderButton';
import { AddFolderButton } from '../ui-add-folder-button/AddFolderButton';
import { InputModal } from '@/src/commons/ui-input-modal/InputModal';
import { AlertModal } from '@/src/commons/ui-alert-modal/AlertModal';
import { IconAndTextButton } from '@/src/commons/ui-icon-and-text-button/IconAndTextButton';
import { ShareModal } from '../ui-share-modal/ShareModal';
import { useRouter } from 'next/router';
const cx = classNames.bind(styles);

// 폴더 툴바 프롭 타입 선언
type FolderToolBarProps = {
  folders: Folder[];
  selectedFolderId: SelectedFolderId;
};

// 폴더 툴바 컴포넌트(기능 동작)
export const FolderToolBar = ({
  folders,
  selectedFolderId,
}: FolderToolBarProps) => {
  const { shareKakao } = useKakaoSdk(); // kakao 커스텀 훅
  const [currentModal, setCurrentModal] = useState<string | null>(null);
  const [inputValue, setInputValue] = useState<string>('');

  const router = useRouter();

  //   툴바에 표시될 폴더 명
  const folderName =
    ALL_LINKS_ID === selectedFolderId
      ? ALL_LINKS_TEXT
      : folders?.find(({ id }) => id === selectedFolderId)?.name ?? '';

  //   공유 링크 저장
  const shareLink = (() => {
    if (typeof window !== 'undefined') {
      return `${window.location.origin}/shared?user=1&folder=${selectedFolderId}`;
    } else {
      return '';
    }
  })();

  const closeModal = () => setCurrentModal(null);

  const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    // esc 누를때 모달 닫기
    if (e.key === 'Escape') {
      closeModal();
    }
  };

  //   카카오 공유
  const handleKakaoClick = () => {
    shareKakao({ url: shareLink, ...KAKAO_SHARE_DATA });
  };

  //   페이스북 공유
  const handleFacebookClick = () => {
    window.open(`http://www.facebook.com/sharer.php?u=${shareLink}`);
  };

  //   링크 복사
  const handleLinkCopyClick = () => copyToClipboard(shareLink);

  return (
    <div className={cx('container')}>
      <div className={cx('folders')}>
        {/* 전체 버튼은 에외로 처리 */}
        <FolderButton
          key={ALL_LINKS_ID}
          text={ALL_LINKS_TEXT}
          onClick={() => {
            router.push('/folder');
          }}
          isSelected={ALL_LINKS_ID === selectedFolderId}
        />
        {folders?.map(({ id, name }) => (
          <FolderButton
            key={id}
            text={name}
            onClick={() => router.push(`/folder/${id}`)}
            isSelected={id === selectedFolderId}
          />
        ))}
      </div>
      <div className={cx('add-button')}>
        <AddFolderButton onClick={() => setCurrentModal(MODALS_ID.addFolder)} />
        <InputModal
          isOpen={currentModal === MODALS_ID.addFolder}
          title="폴더 추가"
          placeholder="내용 입력"
          buttonText="추가하기"
          onCloseClick={closeModal}
          onKeyDown={handleKeyDown}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
      </div>
      <h2 className={cx('folder-name')}>{folderName}</h2>
      {selectedFolderId !== ALL_LINKS_ID && (
        <div className={cx('buttons')}>
          {BUTTONS.map(({ text, iconSource, modalId }) => (
            <IconAndTextButton
              key={text}
              text={text}
              iconSource={iconSource}
              onClick={() => setCurrentModal(modalId)}
            />
          ))}
          <ShareModal
            isOpen={currentModal === MODALS_ID.share}
            folderName={folderName}
            onKakaoClick={handleKakaoClick}
            onFacebookClick={handleFacebookClick}
            onLinkCopyClick={handleLinkCopyClick}
            onCloseClick={closeModal}
            onKeyDown={handleKeyDown}
          />
          <InputModal
            isOpen={currentModal === MODALS_ID.rename}
            title="폴더 이름 변경"
            placeholder="내용 입력"
            buttonText="변경하기"
            onCloseClick={closeModal}
            onKeyDown={handleKeyDown}
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <AlertModal
            isOpen={currentModal === MODALS_ID.delete}
            title="폴더 삭제"
            description={folderName}
            buttonText="삭제하기"
            onCloseClick={closeModal}
            onKeyDown={handleKeyDown}
            onClick={() => {}}
          />
        </div>
      )}
    </div>
  );
};
