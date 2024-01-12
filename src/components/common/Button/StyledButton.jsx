import styles from './Button.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const StyledButton = ({ text, size, variant = 'primary', type = 'button', ...props }) => {
  return (
    <button type={type} className={cx(`btn-${variant}`, `btn-${size}`)} {...props}>
      {text}
    </button>
  );
};

export default StyledButton;
