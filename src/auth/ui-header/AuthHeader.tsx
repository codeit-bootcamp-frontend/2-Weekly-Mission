import classNames from 'classnames/bind';
import styles from './AuthHeader.module.scss';
import { LOGO_IMAGE, LINK_TITLE, ROUTER, SUGGESTION } from './constant';
import Link from 'next/link';

const cx = classNames.bind(styles);

type AuthHeaderProps = {
  isSignUp: boolean;
};

export default function AuthHeader({ isSignUp = false }: AuthHeaderProps) {
  return (
    <div className={cx('container')}>
      <Link href={'/'}>
        <img className={cx('logo')} src={LOGO_IMAGE} alt="홈으로 가는 로고" />
      </Link>
      <div className={cx('textContainer')}>
        <span className={cx('suggestion')}>
          {isSignUp ? SUGGESTION.signUp : SUGGESTION.signIn}
        </span>
        <Link
          href={isSignUp ? ROUTER.signUp : ROUTER.signIn}
          className={cx('link')}>
          {isSignUp ? LINK_TITLE.signUp : LINK_TITLE.signIn}
        </Link>
      </div>
    </div>
  );
}
