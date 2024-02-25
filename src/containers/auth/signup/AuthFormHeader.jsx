import Link from 'next/link';
import Image from 'next/image';
import classNames from 'classnames/bind';
import { useFormContext } from 'react-hook-form';
import { ICON } from 'constants/importImg';
import styles from './AuthForm.module.scss';

const cx = classNames.bind(styles);
const { logo } = ICON;

const AuthFormHeader = () => {
  const { reset } = useFormContext();

  return (
    <header className={cx('auth-form-header')}>
      <div className={cx('auth-form-header-container')}>
        <h1 className={cx('logo')}>
          <Link href={'/'}>
            <Image width={210} src={logo.url} alt={logo.alt} />
          </Link>
        </h1>
        <p className={cx('auth-form-header-info')}>
          이미 회원이신가요?
          <Link href={'/signin'} onClick={() => reset()}>
            <span className={cx('auth-form-header-signin')}>로그인 하기</span>
          </Link>
        </p>
      </div>
    </header>
  );
};

export default AuthFormHeader;
