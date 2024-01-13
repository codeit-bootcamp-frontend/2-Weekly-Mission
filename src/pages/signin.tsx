import styles from 'styles/signup.module.css';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import Input from 'components/common/Input';
import { signin } from '../utils/api/authApi';
import router from 'next/router';
import { redirectToIfAccessTokenExists } from 'utils/redirect';
import { useEffect } from 'react';

const VALIDATE_REGEX = {
  email: /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i,
  password: /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,25}$/,
};

const INPUT_SETTING = {
  label: {
    email: '이메일',
    password: '비밀번호',
  },
  placeholder: {
    email: '이메일을 입력해 주세요.',
    password: '비밀번호를 입력해 주세요.',
  },
};

export type SigninFormData = {
  email: string;
  password: string;
};

export default function Signin() {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<SigninFormData>({
    mode: 'onBlur',
    defaultValues: {
      email: '',
      password: '',
    },
  });

  useEffect(() => {
    redirectToIfAccessTokenExists('./folder');
  }, []);

  const onSubmit = async (data: SigninFormData) => {
    const userInfo = {
      email: data.email,
      password: data.password,
    };

    const tokenData = await signin(userInfo);
    if (!tokenData?.accessToken) {
      setError('email', { type: 'manual', message: '이메일을 확인해주세요' });
      setError('password', { type: 'manual', message: '비밀번호를 확인해주세요' });
      return;
    }

    window.localStorage.setItem('data1', tokenData.accessToken);
    router.push('/folder');
  };

  return (
    <div className={styles.signupPageWrapper}>
      <div className={styles.signupContainer}>
        <header className={styles.headerWrapper}>
          <img className={styles.header__logo} alt="홈으로 가는 링크브러리 로고" src="/assets/linkbrary-logo.svg"></img>
          <div className={styles.header__content}>
            <p className={styles.header__text}>회원이 아니신가요? </p>
            <Link className={styles.header__link} href="/signup">
              회원 가입하기
            </Link>
          </div>
        </header>
        <form onSubmit={handleSubmit(onSubmit)} className={styles.signupForm}>
          <Input
            className={styles.inputItem}
            type="email"
            label={INPUT_SETTING.label.email}
            placeholder={INPUT_SETTING.placeholder.email}
            errors={errors}
            {...register('email', {
              required: '이메일을 입력해주세요',
              pattern: {
                value: VALIDATE_REGEX.email,
                message: '올바른 이메일 주소가 아닙니다',
              },
            })}
          />
          <Input
            className={styles.inputItem}
            type="password"
            label={INPUT_SETTING.label.password}
            placeholder={INPUT_SETTING.placeholder.password}
            errors={errors}
            {...register('password', {
              required: '비밀번호를 입력해 주세요',
            })}
          />

          <button className={styles.signupButton}>로그인</button>
        </form>
        <footer>
          <div className={styles.snsSignBox}>
            <p className={styles.snsSignBox__text}>소셜 로그인</p>
            <div className={styles.snsSignBox__logo}>
              <a className={styles.snsSignBox__logoItem} href="https://www.google.com">
                <img
                  className={styles.snsSignBox__logoImg}
                  src="/assets/google-logo.png"
                  alt="구글 홈으로 연결되는 아이콘"
                />
              </a>
              <a className={styles.snsSignBox__logoItem} href="https://www.kakaocorp.com/page">
                <img
                  className={styles.snsSignBox__logoImg}
                  src="/assets/kakao-logo.png"
                  alt="카카오 홈으로 연결되는 아이콘"
                />
              </a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
