import styles from './Button.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const MyButton = ({ text, size, varient = 'primary', type = 'button', ...props }) => {
  return (
    <button type={type} className={cx(`btn-${varient}`, `btn-${size}`)} {...props}>
      {text}
    </button>
  );
};

export default MyButton;
