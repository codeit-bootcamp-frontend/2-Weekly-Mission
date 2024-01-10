import styles from './Grid.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const GridLayout = ({ children }) => {
  return <div className={cx('grid')}>{children}</div>;
};

export default GridLayout;
