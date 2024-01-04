import { MouseEventHandler, ReactNode } from 'react';
import styles from './ModalContentButton.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

// 모달 창의 버튼 프롭 타입 선언
type ModalContentButtonProps = {
  children: ReactNode;
  onClick: MouseEventHandler<HTMLButtonElement>;
  themeColor?: 'blue' | 'red';
};

// 모달 창의 버튼 컴포넌트
export const ModalContentButton = ({
  children,
  onClick,
  themeColor = 'blue',
}: ModalContentButtonProps) => {
  return (
    <button className={cx('button', themeColor)} onClick={onClick}>
      {children}
    </button>
  );
};
