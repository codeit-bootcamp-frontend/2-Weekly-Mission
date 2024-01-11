import classNames from 'classnames/bind';
import styles from './SigninForm.module.scss';
import { Input } from '@/src/commons/ui-input/Input';
import { Cta } from '@/src/commons/ui-cta/Cta';
import PasswordInput from '@/src/commons/ui-password-input/PasswordInput';
import { useForm, Controller } from 'react-hook-form';

const cx = classNames.bind(styles);

export default function SigninForm() {
  const { control } = useForm({
    defaultValues: { email: '', password: '' },
    mode: 'onBlur',
  });

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
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
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
      <Cta
        className={cx('cta')}
        onClick={(e) => {
          e.preventDefault();
        }}>
        <button className={cx('button')}>로그인</button>
      </Cta>
    </form>
  );
}
