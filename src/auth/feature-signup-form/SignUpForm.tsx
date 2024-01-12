import { Input } from '@/src/commons/ui-input/Input';
import styles from './SignUpForm.module.scss';
import classNames from 'classnames/bind';
import { Cta } from '@/src/commons/ui-cta/Cta';
import PasswordInput from '@/src/commons/ui-password-input/PasswordInput';
import { Controller, useForm } from 'react-hook-form';
import { useCheckEmail } from '../utils/useCheckEmail';
import { useSignUp } from '../utils/useSignUp';
import { MouseEvent, useEffect, useState } from 'react';
import { useRouter } from 'next/router';

const cx = classNames.bind(styles);

export default function SignUpForm() {
  const router = useRouter();
  const [isValid, setIsValid] = useState<boolean>(false);

  const { watch, control, trigger, getFieldState } = useForm({
    defaultValues: { email: '', password: '', passwordRepeat: '' },
    mode: 'onBlur',
  });

  const checkEmail = useCheckEmail(watch('email'));
  const signUp = useSignUp(watch('email'), watch('password'));

  // 폼 제출 이벤트 콜백
  const handleSubmit = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    // 각 인풋의 유효성 검사(useForm의 trigger사용)
    trigger(['email', 'password', 'passwordRepeat']).then(() => {
      if (
        getFieldState('email').error ||
        getFieldState('password').error ||
        getFieldState('passwordRepeat').error
      ) {
        setIsValid(false);
      } else {
        setIsValid(true);
      }
    });
  };

  // 이미 로그인 되어있으면 리다이렉트
  if (typeof window !== 'undefined') {
    if (window.localStorage.getItem('accessToken')) {
      router.push('/folder');
    }
  }

  // 회원가입에 성공하면 로컬스토리지 저장 후 페이지 리다이렉트
  if (signUp.data) {
    const accessToken = signUp?.data?.data?.accessToken;
    window.localStorage.setItem('accessToken', accessToken);

    if (window.localStorage.getItem('accessToken')) {
      router.push('/folder');
    }
  }

  // 자체적으로 유효성 검증 후 에러가 존재한다면 요청하지 않음
  useEffect(() => {
    if (isValid) {
      signUp.execute();
    }

    // 값이 올바른데도 오류가 나면 서버 문제로 가정
    if (signUp.error) {
      alert('요청하신 서버에 오류가 있습니다.');
    }
  }, [isValid]);

  return (
    <form className={cx('form')}>
      <div className={cx('inputContainer')}>
        <label className={cx('label')}>이메일</label>
        <Controller
          control={control}
          name="email"
          defaultValue=""
          rules={{
            required: '이메일을 입력해 주세요.',
            pattern: {
              value: /\S@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: '올바른 이메일 주소가 아닙니다',
            },
            validate: () => {
              checkEmail.execute();

              return checkEmail?.error ? '이미 존재하는 이메일입니다.' : true;
            },
          }}
          render={({ field, fieldState }) => (
            <Input
              {...field}
              placeholder="이메일을 입력해 주세요."
              hasError={Boolean(fieldState.error)}
              errorMessage={fieldState.error?.message}
            />
          )}
        />
      </div>
      <div className={cx('inputContainer')}>
        <label className={cx('label')}>비밀번호</label>
        <Controller
          control={control}
          name="password"
          defaultValue=""
          rules={{
            required: '비밀번호를 입력해 주세요',
            pattern: {
              value: /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,25}$/,
              message: '비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.',
            },
          }}
          render={({ field, fieldState }) => (
            <PasswordInput
              {...field}
              placeholder="영문, 숫자를 조합해 8자 이상 입력해 주세요."
              hasError={Boolean(fieldState.error)}
              errorMessage={fieldState.error?.message}
            />
          )}
        />
      </div>
      <div className={cx('inputContainer')}>
        <label className={cx('label')}>비밀번호 확인</label>
        <Controller
          control={control}
          name="passwordRepeat"
          defaultValue=""
          rules={{
            required: '비밀번호를 입력해 주세요',
            validate: (value) =>
              value === watch('password')
                ? true
                : '비밀번호가 일치하지 않아요.',
          }}
          render={({ field, fieldState }) => (
            <PasswordInput
              {...field}
              placeholder="비밀번호와 일치하는 값을 입력해 주세요."
              hasError={Boolean(fieldState.error)}
              errorMessage={fieldState.error?.message}
            />
          )}
        />
      </div>
      <Cta className={cx('cta')}>
        <button className={cx('button')} onClick={handleSubmit}>
          회원가입
        </button>
      </Cta>
    </form>
  );
}
