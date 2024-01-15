import { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { useForm } from 'react-hook-form';
import classNames from 'classnames/bind';
import styles from './AuthForm.module.scss';

import { signup } from 'services/api';
import { handleValidation } from 'services/auth';
import { redirectToPage } from 'utils';

import { isAccessToken } from 'constants/auth';
import { SOCIAL_LOGIN } from 'constants/listOption';
import { ICON } from 'constants/importImg';

import TextField from 'components/common/TextField';
import StyledButton from 'components/common/Button/StyledButton';
import IconButton from 'components/common/Button/IconButton';

const cx = classNames.bind(styles);
const { logo } = ICON;

const AuthForm = () => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm({ mode: 'onBlur' });

  const onSubmit = (data) => {
    const isSuccess = handleValidation(data, setError);
    if (isSuccess) {
      signup(data);
    }
  };

  useEffect(() => {
    if (isAccessToken) {
      redirectToPage('/folder');
    }
  }, []);

  return (
    <div className={cx('auth-form')}>
      <fieldset>
        <legend className='visually-hidden'>Login Linkbrary Account</legend>
        <header className={cx('auth-form-header')}>
          <h1 className={cx('logo')}>
            <Link href={'/'}>
              <Image width={210} src={logo.url} alt={logo.alt} />
            </Link>
          </h1>
          <p className={cx('auth-form-header-info')}>
            이미 회원이신가요?
            <Link href={'/signin'}>
              <span className={cx('auth-form-header-signin')}>로그인 하기</span>
            </Link>
          </p>
        </header>

        <form onSubmit={handleSubmit(onSubmit)} className={cx('auth-form-login')}>
          <TextField
            type='email'
            name='email'
            label='이메일'
            register={register}
            errors={errors}
            placeholder='이메일을 입력해주세요.'
          />
          <TextField
            type='password'
            name='password'
            label='비밀번호'
            register={register}
            errors={errors}
            placeholder='영문, 숫자를 조합해 8자 이상 입력해 주세요.'
          />
          <TextField
            type='password'
            name='passwordConfirm'
            label='비밀번호 확인'
            register={register}
            errors={errors}
            placeholder='비밀번호와 일치하는 값을 입력해 주세요.'
          />
          <StyledButton text='회원가입' size='lg' type='submit' />
        </form>

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
      </fieldset>
    </div>
  );
};
export default AuthForm;
