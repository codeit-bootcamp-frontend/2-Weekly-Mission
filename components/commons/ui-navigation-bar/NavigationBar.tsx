import styles from './NavigationBar.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

type NavigationBarProps = {
  profile: {
    imageSource: string;
    email: string;
  } | null;
  isSticky: boolean;
};

export const NavigationBar = ({ profile, isSticky }: NavigationBarProps) => {
  return (
    <nav className={cx('container', { sticky: isSticky })}>
      <div className={cx('items')}></div>
    </nav>
  );
};
