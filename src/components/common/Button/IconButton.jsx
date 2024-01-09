import Image from 'next/image';

import styles from './IconButton.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const IconButton = ({
  svg,
  iconSize,
  alt,
  type = 'button',
  showMode = 'default',
  ...props
}) => {
  return (
    <button type={type} className={cx('ic-btn', `ic-btn-${showMode}`)} {...props}>
      <Image src={svg} alt={alt} width={iconSize} />
    </button>
  );
};

export default IconButton;
