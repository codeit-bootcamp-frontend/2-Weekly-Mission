import styles from './FullLayout.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const FullLayout = ({ children }) => {
  return <div className={cx('full-layout')}>{children}</div>;
};

export default FullLayout;
