import { ReactNode } from 'react';
import styles from './ModalContentTitle.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

// 모달 제목 컴포넌트 타입 선언
type ModalContentTitleProps = {
  children: ReactNode;
};

// 모달 창의 제목 컴포넌트
export const ModalContentTitle = ({ children }: ModalContentTitleProps) => {
  return <h2 className={cx('title')}>{children}</h2>;
};
