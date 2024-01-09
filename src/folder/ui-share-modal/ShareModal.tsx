import { KeyboardEventHandler, MouseEventHandler } from 'react';
import styles from './ShareModal.module.scss';
import classNames from 'classnames/bind';
import { ModalContentBox } from '@/src/commons/ui-modal-content-box/ModalContentBox';
import { Modal } from '@/src/commons/ui-modal/Modal';
import { ModalContentTitle } from '@/src/commons/ui-modal-content-title/ModalContentTitle';
import { ModalContentDescription } from '@/src/commons/ui-modal-content-description/ModalContentDescription';
import KakaoIcon from './kakao.svg';
import FacebookIcon from './facebook.svg';
import LinkIcon from './link.svg';

const cx = classNames.bind(styles);

// 공유 모달 프롭 타입 선언
type ShareModalProps = {
  isOpen: boolean;
  folderName: string;
  onKakaoClick: MouseEventHandler<HTMLButtonElement>;
  onFacebookClick: MouseEventHandler<HTMLButtonElement>;
  onLinkCopyClick: MouseEventHandler<HTMLButtonElement>;
  onCloseClick: MouseEventHandler<HTMLButtonElement | HTMLDivElement>;
  onKeyDown: KeyboardEventHandler<HTMLDivElement>;
};

// 공유 모달 컴포넌트
export const ShareModal = ({
  isOpen,
  folderName,
  onCloseClick,
  onFacebookClick,
  onKakaoClick,
  onKeyDown,
  onLinkCopyClick,
}: ShareModalProps) => {
  return (
    <Modal isOpen={isOpen} onBackdropClick={onCloseClick} onKeyDown={onKeyDown}>
      <ModalContentBox
        header={
          <div className={cx('modal-header')}>
            <ModalContentTitle>폴더 공유</ModalContentTitle>
            <ModalContentDescription>{folderName}</ModalContentDescription>
          </div>
        }
        content={
          <div className={cx('modal-content')}>
            <button className={cx('button')} onClick={onKakaoClick}>
              <KakaoIcon />
              <span>카카오톡</span>
            </button>
            <button className={cx('button')} onClick={onFacebookClick}>
              <FacebookIcon />
              <span>페이스북</span>
            </button>
            <button className={cx('button')} onClick={onLinkCopyClick}>
              <LinkIcon />
              <span>링크 복사</span>
            </button>
          </div>
        }
        onCloseClick={onCloseClick}
      />
    </Modal>
  );
};
