import classNames from 'classnames/bind';
import styles from './LinkForm.module.scss';
import { ChangeEvent, KeyboardEventHandler, useState } from 'react';
import { useGetFolders } from '@/src/folder/util/useGetFolders';
import { useIntersectionObserver } from '@/src/commons/util/useIntersectionObserver';
import { LinkForm as UiLinkForm } from '../ui-link-form/LinkForm';
import { AddLinkModal } from '../ui-add-link-modal/AddLinkModal';

const cx = classNames.bind(styles);

// 링크 입력 폼 숨김 타입 선언
type LinkFormProps = {
  hideFixedLinkForm?: boolean;
};

// 링크 입력하는 폼 컴포넌트
export const LinkForm = ({ hideFixedLinkForm = false }: LinkFormProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false); // 모달 열림 여부
  const { data: folders } = useGetFolders(); // 폴더 제목 데이터
  const [selectedFolderId, setSelectedFolderId] = useState<number | null>(null); // 선택된 폴더 아이디
  const [linkUrl, setLinkUrl] = useState<string>(''); // 링크 주소
  const { ref, isIntersecting } = useIntersectionObserver<HTMLFormElement>();
  const showFixedLinkForm = !hideFixedLinkForm && !isIntersecting;

  //   선택된 링크 변화 이벤트 콜백
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setLinkUrl(event.target.value);
  };

  //   모달 닫는 이벤트 콜백
  const closeModal = () => {
    setSelectedFolderId(null);
    setIsModalOpen(false);
  };
  //   esc 누를때도 모달 닫히는 이벤트 콜백
  const handleKeyDown: KeyboardEventHandler<HTMLDivElement> = (event) => {
    if (event.key === 'Escape') {
      closeModal();
    }
  };

  return (
    <div className={cx('container')}>
      <UiLinkForm
        ref={ref}
        onSubmit={() => setIsModalOpen(true)}
        value={linkUrl}
        onChange={handleChange}
      />
      <AddLinkModal
        isOpen={isModalOpen}
        folders={folders}
        description={linkUrl}
        selectedFolderId={selectedFolderId}
        setSelectedFolderId={setSelectedFolderId}
        onAddClick={() => {}}
        onCloseClick={closeModal}
        onKeyDown={handleKeyDown}
      />

      {/* 화면 내릴 때 아래에 고정되는 기능 */}
      {showFixedLinkForm && (
        <div className={cx('container', 'fixed')}>
          <UiLinkForm
            onSubmit={() => setIsModalOpen(true)}
            value={linkUrl}
            onChange={handleChange}
          />
        </div>
      )}
    </div>
  );
};
