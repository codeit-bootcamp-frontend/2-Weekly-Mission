import clsx from 'clsx';
import { MouseEventHandler, ReactNode, forwardRef } from 'react';

import styles from './Modal.module.css';
const WARNING_ACTION = { delete: '삭제' };

interface ModalProps {
  onCloseModal: MouseEventHandler<HTMLButtonElement | HTMLDialogElement>;
  onClickActionButton?: () => void;
  isButtonActivated?: boolean;
  title: string;
  subTitle?: string;
  children?: ReactNode;
}

const Modal = forwardRef<HTMLDialogElement | null, ModalProps>(
  ({ onCloseModal, onClickActionButton, isButtonActivated = true, title, subTitle, children, ...props }, ref) => {
    const handleModalClick: MouseEventHandler<HTMLDialogElement> = (e) => {
      e.stopPropagation();
      e.preventDefault();
      if ((e.target as HTMLDialogElement).nodeName === 'DIALOG') onCloseModal(e);
    };

    // 모달이 '삭제'와 같은 되돌릴 수 없는 액션을 쿠셔닝 하는 목적일때 버튼을 붉은색으로 바꿈
    const isWarningButton = title.includes(WARNING_ACTION.delete);

    return (
      <dialog ref={ref} {...props} className={styles.modal} onClick={handleModalClick}>
        <div className={styles.modalContentWrapper}>
          <button
            onClick={(e) => {
              e.preventDefault();
              onCloseModal(e);
            }}
          >
            <img className={styles.modalCloseButton} src="/assets/close.svg" alt="" />
          </button>
          <div className={styles.modalTitle}>{title}</div>
          <div className={styles.modalSubTitle}>{subTitle}</div>
          <div className={styles.modalContent}>{children}</div>
          {isButtonActivated && (
            <button
              className={clsx(styles.modalButton, isWarningButton && styles.modalWarningButton)}
              // onClick={() => {
              //   onClickActionButton();
              // }} // 모달의 액션을 실행하는 함수, 추후 api와 연결 예정
            >
              {`${title.slice(-2)}하기`}
            </button>
          )}
        </div>
      </dialog>
    );
  }
);

Modal.displayName = 'Modal';

export default Modal;
