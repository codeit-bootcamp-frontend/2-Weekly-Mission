// navbar와 footer 컴포넌트에 데이터를 props로 전달해주는 컴포넌트

import { ReactNode, RefObject } from 'react';
import styles from './Layout.module.scss';
import classNames from 'classnames/bind';

// 클래스명
const cx = classNames.bind(styles);

// 레이아웃 프롭 타입 선언
type LayoutProps = {
  children: ReactNode;
  isSticky?: boolean;
  footerRef?: RefObject<HTMLElement>; // ref 타입
};

export const Layout = ({
  children,
  isSticky = true,
  footerRef,
}: LayoutProps) => {
  return (
    <div>
      <main className={cx('main')}>{children}</main>
    </div>
  );
};
