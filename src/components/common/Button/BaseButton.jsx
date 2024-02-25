import classNames from 'classnames/bind';
import styles from './Button.module.scss';

const cx = classNames.bind(styles);

const BaseButton = ({ text, size, variant = 'primary', type = 'button', ...props }) => {
  return (
    <button type={type} className={cx(`btn-${variant}`, `btn-${size}`)} {...props}>
      {text}
    </button>
  );
};

export default BaseButton;
