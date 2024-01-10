import Link from 'next/link';
import { useForm } from 'react-hook-form';
import Input from 'components/common/Input';
import { isUsableEmail, signup } from './api/fetchApi';
import router from 'next/router';
import styles from '/src/styles/signup.module.css';

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

  const onSubmit = async (data: SignupFormData) => {
    console.log(data);

    const userInfo = {
      email: data.email,
      password: data.password,
    };

    await signup(userInfo);
    router.push('/folder');
  };

  const checkDuplicateEmail = async (value: string) => {
    const isUsable = await isUsableEmail(value);
    if (!isUsable) return '이미 사용 중인 이메일입니다.';
  };

  return (
    <div className={styles.signupPageWrapper}>
      <header>
        <img alt="홈으로 가는 링크브러리 로고"></img>
        <div>
          <p>이미 회원이신가요? </p>
          <Link href="/siginin">로그인하기</Link>
        </div>
      </header>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.signupForm}>
        <Input
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
        <button>회원가입</button>
      </form>
      <footer>
        <div>
          <p>다른 방식으로 가입하기</p>
          <img alt="구글 홈으로 연결되는 아이콘"></img>
          <img alt="카카오 홈으로 연결되는 아이콘"></img>
        </div>
      </footer>
    </div>
  );
}
