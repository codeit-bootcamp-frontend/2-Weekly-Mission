import styles from './AlertModal.module.scss';
import classNames from 'classnames/bind';

import { ModalContentBox } from '@/components/sharing/ui-modal-content-box';
import { ModalContentButton } from '@/components/sharing/ui-modal-content-button';
import { ModalContentDescription } from '@/components/sharing/ui-modal-content-description';
import { ModalContentTitle } from '@/components/sharing/ui-modal-content-title';
import { Modal } from '@/components/sharing/ui-modal';
import { KeyboardEventHandler, MouseEventHandler } from 'react';

const cx = classNames.bind(styles);

type AlertModalProps = {
  isOpen: boolean;
  title: string;
  description: string;
  buttonText: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
  onCloseClick: MouseEventHandler<HTMLDivElement | HTMLButtonElement>;
  onKeyDown: KeyboardEventHandler<HTMLDivElement>;
};

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
          <ModalContentButton onClick={onClick} themeColor='red'>
            {buttonText}
          </ModalContentButton>
        }
        onCloseClick={onCloseClick}
      />
    </Modal>
  );
};
