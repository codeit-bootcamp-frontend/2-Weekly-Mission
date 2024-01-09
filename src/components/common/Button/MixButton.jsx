import Image from 'next/image';

import styles from './IconButton.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const MixButton = ({
  text,
  textSize,
  textColor,
  iconSize,
  alt,
  showMode = 'default',
  fill = false,
  startIcon = null,
  endIcon = null,
  type = 'button',
  ...props
}) => {
  return (
    <button
      className={cx('mx-btn', `mx-btn-${showMode}`, { 'mx-btn-fill': fill })}
      type={type}
      {...props}
    >
      {startIcon && <Image src={startIcon} alt={alt} width={iconSize} />}
      {text && (
        <span
          style={{ color: textColor }}
          className={cx('mx-btn-text', `mx-btn-text-${textSize}`)}
        >
          {text}
        </span>
      )}
      {endIcon && <Image src={endIcon} alt={alt} width={iconSize} />}
    </button>
  );
};

export default MixButton;
