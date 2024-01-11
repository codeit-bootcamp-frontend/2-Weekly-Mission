import { Input } from '@/src/commons/ui-input/Input';
import styles from './SignUpForm.module.scss';
import classNames from 'classnames/bind';
import { Cta } from '@/src/commons/ui-cta/Cta';
import PasswordInput from '@/src/commons/ui-password-input/PasswordInput';
import { Controller, useForm } from 'react-hook-form';

const cx = classNames.bind(styles);

export default function SignUpForm() {
  const { watch, control } = useForm({
    defaultValues: { email: '', password: '', passwordRepeat: '' },
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
            required: '이메일을 입력해 주세요.',
            pattern: {
              value: /\S@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: '올바른 이메일 주소가 아닙니다',
            },
          }}
          render={({ field, fieldState }) => (
            <Input
              {...field}
              onBlur={() => {
                field.onBlur();
                // 중복 체크 해야됨
              }}
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
        <button className={cx('button')}>회원가입</button>
      </Cta>
    </form>
  );
}
