import Link from 'next/link';
import { useForm } from 'react-hook-form';
import Input from 'components/common/Input';
import { isUsableEmail, signup } from './api/auth';
import router from 'next/router';
import styles from 'styles/signup.module.css';

const VALIDATE_REGEX = {
  email: /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i,
  password: /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,25}$/,
};

const INPUT_SETTING = {
  label: {
    email: '이메일',
    password: '비밀번호',
    passwordConfirm: '비밀번호 확인',
  },
  placeholder: {
    email: '이메일을 입력해 주세요',
    password: '영문, 숫자를 조합해 8자 이상 입력해 주세요',
    passwordConfirm: '비밀번호와 일치하는 값을 입력해 주세요',
  },
};

type SignupFormData = {
  email: string;
  password: string;
  passwordConfirm: string;
};

export default function Signup() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<SignupFormData>({
    mode: 'onBlur',
    defaultValues: {
      email: '',
      password: '',
      passwordConfirm: '',
    },
  });

  // redirectToIfAccessTokenExists('./folder');

  const onSubmit = async (data: SignupFormData) => {
    const userInfo = {
      email: data.email,
      password: data.password,
    };

    const tokenData = await signup(userInfo);
    if (!tokenData?.accessToken) return;

    window.localStorage.setItem('data1', tokenData.accessToken);
    router.push('/folder');
  };

  const checkDuplicateEmail = async (value: string) => {
    const isUsable = await isUsableEmail(value);
    if (!isUsable) return '이미 사용 중인 이메일입니다.';
  };

  return (
    <div className={styles.signupPageWrapper}>
      <div className={styles.signupContainer}>
        <header className={styles.headerWrapper}>
          <img className={styles.header__logo} alt="홈으로 가는 링크브러리 로고" src="/assets/linkbrary-logo.svg"></img>
          <div className={styles.header__content}>
            <p className={styles.header__text}>이미 회원이신가요? </p>
            <Link className={styles.header__link} href="/signin">
              로그인하기
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
              validate: checkDuplicateEmail,
            })}
          ></Input>
          <Input
            className={styles.inputItem}
            type="password"
            label={INPUT_SETTING.label.password}
            placeholder={INPUT_SETTING.placeholder.password}
            errors={errors}
            {...register('password', {
              required: '비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요',
              pattern: {
                value: VALIDATE_REGEX.password,
                message: '비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요',
              },
            })}
          ></Input>
          <Input
            className={styles.inputItem}
            type="password"
            label={INPUT_SETTING.label.passwordConfirm}
            placeholder={INPUT_SETTING.placeholder.passwordConfirm}
            errors={errors}
            {...register('passwordConfirm', {
              required: true,
              validate: (value) => {
                const passwordConfirmValue = value;
                const passwordValue = watch('password');
                if (!passwordConfirmValue) return;
                if (passwordConfirmValue !== passwordValue) return '비밀번호가 일치하지 않아요';
              },
            })}
          ></Input>
          <button className={styles.signupButton}>회원가입</button>
        </form>
        <footer>
          <div className={styles.snsSignBox}>
            <p className={styles.snsSignBox__text}>다른 방식으로 가입하기</p>
            <div className={styles.snsSignBox__logo}>
              <div className={styles.snsSignBox__logoItem}>
                <img
                  className={styles.snsSignBox__logoImg}
                  src="/assets/google-logo.png"
                  alt="구글 홈으로 연결되는 아이콘"
                />
              </div>
              <div className={styles.snsSignBox__logoItem}>
                <img
                  className={styles.snsSignBox__logoImg}
                  src="/assets/kakao-logo.png"
                  alt="카카오 홈으로 연결되는 아이콘"
                />
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
