import styles from './AuthLayout.module.scss';
import classNames from 'classnames/bind';
import { ReactNode } from 'react';
const cx = classNames.bind(styles);

type AuthLayoutProps = {
  authHeader: ReactNode;
};

export default function AuthLayout({ authHeader }: AuthLayoutProps) {
  return (
    <main className={cx('main')}>
      <div className={cx('container')}>{authHeader}</div>
    </main>
  );
}
