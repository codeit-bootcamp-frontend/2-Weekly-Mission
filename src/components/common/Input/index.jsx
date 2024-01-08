import styles from './Input.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const Input = ({ type = 'text', ...props }) => {
  return <input type={type} {...props} className={cx('input')} />;
};

export default Input;
