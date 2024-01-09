import styles from './Modal.module.scss';
import classNames from 'classnames/bind';
import {
  KeyboardEvent,
  KeyboardEventHandler,
  MouseEvent,
  MouseEventHandler,
  ReactNode,
} from 'react';
import { Portal } from '../ui-portal/Portal';

const cx = classNames.bind(styles);

// 모달에 들어가는 프롭 타입 선언
type ModalProps = {
  children: ReactNode;
  isOpen?: boolean;
  disableScrollLock?: boolean; // 스크롤 방지
  hideBackdrop?: boolean;
  onBackdropClick?: MouseEventHandler<HTMLDivElement>;
  onKeyDown?: KeyboardEventHandler<HTMLDivElement>;
};

// 모달 컨테이너 컴포넌트
export const Modal = ({
  children,
  isOpen = false,
  disableScrollLock = false,
  hideBackdrop = false,
  onBackdropClick,
  onKeyDown,
}: ModalProps) => {
  // 닫기 버튼 클릭 이벤트 콜백 함수
  const handleBackdropClick = (e: MouseEvent<HTMLDivElement>) => {
    if (e.target !== e.currentTarget) {
      return;
    }

    if (onBackdropClick) {
      onBackdropClick(e);
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (onKeyDown) {
      onKeyDown(e);
    }
  };

  if (!isOpen) {
    return null;
  }

  return (
    <Portal>
      <div
        className={cx('container', { backdrop: !hideBackdrop })}
        onClick={handleBackdropClick}
        onKeyDown={handleKeyDown}
        tabIndex={0}>
        {children}
      </div>
    </Portal>
  );
};
