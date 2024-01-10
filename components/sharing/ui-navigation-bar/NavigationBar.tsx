import styles from './NavigationBar.module.scss';
import classNames from 'classnames/bind';

import { LOGO_IMAGE, TEXT } from './constant';
import { Cta } from '@/components/sharing/ui-cta';
import { ROUTE } from '@/components/sharing/util';
import { Profile } from '@/components/user/ui-profile';

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
      <div className={cx('items')}>
        <a href={ROUTE.랜딩}>
          <img
            className={cx('logo')}
            src={LOGO_IMAGE}
            alt='Linkbrary 서비스 로고'
          />
        </a>
        {profile ? (
          <Profile profile={profile} />
        ) : (
          <a href={ROUTE.로그인}>
            <Cta>
              <span className={cx('signin')}>{TEXT.login}</span>
            </Cta>
          </a>
        )}
      </div>
    </nav>
  );
};
