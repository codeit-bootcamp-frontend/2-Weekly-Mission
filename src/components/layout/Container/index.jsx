import styles from './Container.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const Container = ({ children }) => {
  return <div className={cx('container')}>{children}</div>;
};

export default Container;
