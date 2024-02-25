import Link from 'next/link';
import Image from 'next/image';
import classNames from 'classnames/bind';
import { useQuery } from '@tanstack/react-query';
import { getUser } from 'apis/user';
import Profile from 'components/common/Profile';
import LinkButton from 'components/common/Button/LinkButton';
import { ICON } from 'constants/importImg';
import styles from './Header.module.scss';

const cx = classNames.bind(styles);
const { logo } = ICON;

const Header = () => {
  const { data: profileData } = useQuery({
    queryKey: ['user'],
    queryFn: getUser,
  });

  const isLoggedIn = !!profileData?.id;

  return (
    <header className={cx('gnb')}>
      <div className={cx('gnb-container')}>
        <h1 className={cx('gnb-logo')}>
          <Link href={'/'} className={cx('gnb-logo-link')}>
            <Image
              src={logo.url}
              alt={logo.alt}
              width={133}
              height={24}
              className={cx('gnb-logo-link-image')}
            />
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
