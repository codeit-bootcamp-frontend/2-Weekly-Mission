import classNames from 'classnames/bind';
import styles from './SigninForm.module.scss';
import { Input } from '@/src/commons/ui-input/Input';
import { Cta } from '@/src/commons/ui-cta/Cta';
import PasswordInput from '@/src/commons/ui-password-input/PasswordInput';
import { useForm, Controller } from 'react-hook-form';
import { useSignIn } from '../utils/useSignIn';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

const cx = classNames.bind(styles);

export default function SigninForm() {
  const router = useRouter();

  // react-hook-form 커스텀 훅
  const { watch, control, setError } = useForm({
    defaultValues: { email: '', password: '' },
    mode: 'onBlur',
  });

  // 로그인 커스텀 훅
  const { execute, error, loading, data } = useSignIn(
    watch('email'),
    watch('password')
  );

  // 이미 로그인 되어있으면 리다이렉트
  if (typeof window !== 'undefined') {
    if (window.localStorage.getItem('accessToken')) {
      router.push('/folder');
    }
  }

  // data 들어오면 로컬 스토리지 저장후 페이지 이동
  if (data) {
    const accessToken = data?.data?.accessToken;
    window.localStorage.setItem('accessToken', accessToken);

    if (window.localStorage.getItem('accessToken')) {
      router.push('/folder');
    }
  }

  useEffect(() => {
    if (error) {
      setError('email', {
        type: 'invalid',
        message: '이메일을 확인해 주세요.',
      });
      setError('password', {
        type: 'invalid',
        message: '비밀번호를 확인해 주세요.',
      });
    }
  }, [error, setError]);

  return (
    <form className={cx('form')}>
      <div className={cx('inputContainer')}>
        <label className={cx('label')}>이메일</label>
        <Controller
          control={control}
          name="email"
          defaultValue=""
          rules={{
            required: '이메일을 입력해 주세요',
            pattern: {
              value: /\S@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: '올바른 이메일 주소가 아닙니다',
            },
          }}
          render={({ field, fieldState }) => (
            <Input
              {...field}
              placeholder="이메일을 입력해주세요."
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
            required: '비밀번호를 입력해 주세요.',
          }}
          render={({ field, fieldState }) => (
            <PasswordInput
              {...field}
              placeholder="비밀번호를 입력해주세요."
              hasError={Boolean(fieldState.error)}
              errorMessage={fieldState.error?.message}
            />
          )}
        />
      </div>
      <Cta className={cx('cta')}>
        <button
          disabled={loading}
          onClick={(e) => {
            e.preventDefault();
            execute();
          }}
          className={cx('button')}>
          로그인
        </button>
      </Cta>
    </form>
  );
}
