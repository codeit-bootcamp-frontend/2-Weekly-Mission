import { ReactNode } from 'react';
import styles from './ModalContentDescription.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

// 모달 소제목 타입 지정
type ModalContentDescriptionProps = {
  children: ReactNode;
};

// 모달 소제목 컴포넌트
export const ModalContentDescription = ({
  children,
}: ModalContentDescriptionProps) => {
  return <p className={cx('description')}>{children}</p>;
};
