import { ReactNode, RefObject } from 'react';
import styles from './Layout.module.scss';
import classNames from 'classnames/bind';
import { useGetUser } from '@/src/user/useGetUser';
import { Footer } from '../ui-footer/Footer';
import { NavigationBar } from '../ui-navigation-bar/NavigationBar';

// 클래스명
const cx = classNames.bind(styles);

// 레이아웃 프롭 타입 선언
type LayoutProps = {
  children: ReactNode;
  isSticky?: boolean;
  footerRef?: RefObject<HTMLElement>; // ref 타입
};

// navbar와 footer 컴포넌트에 데이터를 props로 전달해주는 컴포넌트
export const Layout = ({
  children,
  isSticky = true,
  footerRef,
}: LayoutProps) => {
  const { data } = useGetUser();
  const profile = data
    ? { email: data.email, imageSource: data.profileImageSource }
    : null;
  return (
    <div>
      <NavigationBar profile={profile} isSticky={isSticky} />
      <main className={cx('main')}>{children}</main>
      <Footer ref={footerRef} />
    </div>
  );
};
