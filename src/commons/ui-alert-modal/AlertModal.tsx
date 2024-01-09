import { KeyboardEventHandler, MouseEventHandler } from 'react';
import { ModalContentBox } from '../ui-modal-content-box/ModalContentBox';
import { Modal } from '../ui-modal/Modal';
import styles from './AlertModal.module.scss';
import classNames from 'classnames/bind';
import { ModalContentTitle } from '../ui-modal-content-title/ModalContentTitle';
import { ModalContentButton } from '../ui-modal-content-button/ModalContentButton';
import { ModalContentDescription } from '../ui-modal-content-description/ModalContentDescription';

const cx = classNames.bind(styles);

// 컴포넌트 프롭
type AlertModalProps = {
  isOpen: boolean;
  title: string;
  description: string;
  buttonText: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
  onCloseClick: MouseEventHandler<HTMLButtonElement | HTMLDivElement>;
  onKeyDown: KeyboardEventHandler<HTMLDivElement>;
};

// 삭제 관련 모달(버튼 빨간 경우) 컴포넌트
export const AlertModal = ({
  isOpen,
  title,
  description,
  buttonText,
  onClick,
  onCloseClick,
  onKeyDown,
}: AlertModalProps) => {
  return (
    <Modal isOpen={isOpen} onBackdropClick={onCloseClick} onKeyDown={onKeyDown}>
      <ModalContentBox
        header={
          <div className={cx('modal-header')}>
            <ModalContentTitle>{title}</ModalContentTitle>
            <ModalContentDescription>{description}</ModalContentDescription>
          </div>
        }
        content={
          <ModalContentButton onClick={onClick} themeColor="red">
            {buttonText}
          </ModalContentButton>
        }
        onCloseClick={onCloseClick}
      />
    </Modal>
  );
};
