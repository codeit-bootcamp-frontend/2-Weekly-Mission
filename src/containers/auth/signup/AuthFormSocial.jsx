import Link from 'next/link';

import classNames from 'classnames/bind';
import styles from './AuthForm.module.scss';

import { SOCIAL_LOGIN } from 'constants/listOption';
import IconButton from 'components/common/Button/IconButton';

const cx = classNames.bind(styles);

const AuthFormSocial = () => {
  return (
    <div className={cx('auth-form-social')}>
      <span className={cx('auth-form-social-title')}>다른 방식으로 가입하기</span>
      <ul className={cx('auth-form-social-list')}>
        {SOCIAL_LOGIN.map((item) => (
          <li key={item.id} className={cx('auth-form-social-item')}>
            <Link href={item.url}>
              <IconButton svg={item.src} iconSize={42} alt={item.alt} />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AuthFormSocial;
