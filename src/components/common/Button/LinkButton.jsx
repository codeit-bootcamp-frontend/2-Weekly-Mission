import Link from 'next/link';

import styles from './Button.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const LinkButton = ({ path, text, size, variant = 'primary', type = 'button' }) => {
  return (
    <Link href={path}>
      <button type={type} className={cx(`btn-${variant}`, `btn-${size}`)}>
        {text}
      </button>
    </Link>
  );
};

export default LinkButton;
