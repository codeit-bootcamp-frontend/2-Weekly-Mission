import Link from 'next/link';

import styles from './Button.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const LinkButton = ({ path, text, size, varient = 'primary', type = 'button' }) => {
  return (
    <Link href={path}>
      <button type={type} className={cx(`btn-${varient}`, `btn-${size}`)}>
        {text}
      </button>
    </Link>
  );
};

export default LinkButton;
