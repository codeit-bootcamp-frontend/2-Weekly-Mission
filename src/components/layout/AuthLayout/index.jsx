import styles from './AuthLayout.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const AuthLayout = ({ children }) => {
  return <div className={cx('auth-layout')}>{children}</div>;
};
export default AuthLayout;
