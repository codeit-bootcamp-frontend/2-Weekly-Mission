import { Folder } from '@/src/folder/type';
import styles from './AddLinkModal.module.scss';
import classNames from 'classnames/bind';
import { Dispatch, KeyboardEventHandler, SetStateAction } from 'react';
import { Modal } from '@/src/commons/ui-modal/Modal';
import { ModalContentBox } from '@/src/commons/ui-modal-content-box/ModalContentBox';
import { ModalContentTitle } from '@/src/commons/ui-modal-content-title/ModalContentTitle';
import { ModalContentDescription } from '@/src/commons/ui-modal-content-description/ModalContentDescription';
import { FolderItem } from '@/src/folder/ui-folder-item/FolderItem';
import { ModalContentButton } from '@/src/commons/ui-modal-content-button/ModalContentButton';

const cx = classNames.bind(styles);

// 링크 추가 모달 프롭 타입 선언
// Dispatch : useReducer를 사용하는 것으로 보임
type AddLinkModalProps = {
  isOpen: boolean;
  folders: Folder[]; // 폴더 목록 데이터 타입
  description: string;
  selectedFolderId: number | null;
  setSelectedFolderId: Dispatch<SetStateAction<number | null>>;
  onAddClick: () => void;
  onCloseClick: () => void;
  onKeyDown: KeyboardEventHandler<HTMLDivElement>;
};

// 링크 추가 모달창 컴포넌트
export const AddLinkModal = ({
  isOpen,
  folders,
  description,
  selectedFolderId,
  setSelectedFolderId,
  onAddClick,
  onCloseClick,
  onKeyDown,
}: AddLinkModalProps) => {
  return (
    <Modal isOpen={isOpen} onBackdropClick={onCloseClick} onKeyDown={onKeyDown}>
      <ModalContentBox
        header={
          <div className={cx('modal-header')}>
            <ModalContentTitle>폴더에 추가</ModalContentTitle>
            <ModalContentDescription>{description}</ModalContentDescription>
          </div>
        }
        content={
          <div className={cx('modal-content')}>
            <div className={cx('folder-list')}>
              {folders?.map(({ id, name, linkCount }) => (
                <FolderItem
                  key={id}
                  isSelected={id === selectedFolderId}
                  folderName={name}
                  linkCount={linkCount}
                  onClick={() => setSelectedFolderId(id)}
                />
              ))}
            </div>
            <ModalContentButton onClick={onAddClick}>
              추가하기
            </ModalContentButton>
          </div>
        }
        onCloseClick={onCloseClick}
      />
    </Modal>
  );
};
