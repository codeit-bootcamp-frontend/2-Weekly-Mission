import Link from 'next/link';
import Image from 'next/image';

import styles from './Header.module.scss';
import classNames from 'classnames/bind';

import Api from 'apis/apiCall';
import { useAsync } from 'hooks/useAsync';

import Profile from 'components/common/Profile';
import LinkButton from 'components/common/Button/LinkButton';

import { INITIAL_PROFILE_DATA } from 'constants/initialData';
import { ICON } from 'constants/importImg';

const cx = classNames.bind(styles);
const { logo } = ICON;

const Header = () => {
  const {
    data: { data: userData },
  } = useAsync(() => Api.getUserData(), INITIAL_PROFILE_DATA);

  const profileData = userData?.[0];
  const isLoggedIn = !!profileData?.email;

  return (
    <header className={cx('gnb')}>
      <div className={cx('gnb-container')}>
        <h1 className={cx('gnb-logo')}>
          <Link href={'/'} className={cx('gnb-logo-link')}>
            <Image src={logo.url} alt={logo.alt} className={cx('gnb-logo-link-image')} />
          </Link>
        </h1>

        {isLoggedIn ? (
          <Profile profileData={profileData} />
        ) : (
          <LinkButton
            path={'/signin'}
            text='로그인'
            size='md'
            className={cx('btn-login')}
          />
        )}
      </div>
    </header>
  );
};

export default Header;
