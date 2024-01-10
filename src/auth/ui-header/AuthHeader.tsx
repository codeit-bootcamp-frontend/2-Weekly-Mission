import classNames from 'classnames/bind';
import styles from './AuthHeader.module.scss';
import { LOGO_IMAGE } from './constant';
import Link from 'next/link';

const cx = classNames.bind(styles);

export default function AuthHeader() {
  return (
    <div className={cx('container')}>
      <Link href={'/'}>
        <img className={cx('logo')} src={LOGO_IMAGE} alt="홈으로 가는 로고" />
      </Link>
      <div className={cx('textContainer')}>
        <span className={cx('suggestion')}>회원이 아니신가요?</span>
        <Link href={'/signup'} className={cx('link')}>
          회원 가입하기
        </Link>
      </div>
    </div>
  );
}
