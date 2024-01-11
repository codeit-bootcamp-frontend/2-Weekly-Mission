import Link from 'next/link';
import styles from './SocialToolbar.module.scss';
import classNames from 'classnames/bind';
import { GOOGLE_ICON, KAKAO_ICON, TEXT } from './constant';

const cx = classNames.bind(styles);

type SocialToolbarProps = {
  isSignUp: boolean;
};

export default function SocialToolbar({
  isSignUp = false,
}: SocialToolbarProps) {
  return (
    <div className={cx('container')}>
      <span className={cx('suggestion')}>
        {isSignUp ? TEXT.signup : TEXT.signin}
      </span>
      <div className={cx('buttonContainer')}>
        <Link
          href="https://www.google.com"
          target="_blank"
          rel="noopener noreferrer">
          <button>
            <img src={GOOGLE_ICON} alt="구글 로고" />
          </button>
        </Link>
        <Link
          href="https://www.kakaocorp.com/page"
          target="_blank"
          rel="noopener noreferrer">
          <button>
            <img src={KAKAO_ICON} alt="카카오 로고" />
          </button>
        </Link>
      </div>
    </div>
  );
}
