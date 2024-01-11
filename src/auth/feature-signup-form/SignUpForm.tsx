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
          render={({ field }) => (
            <Input placeholder="이메일을 입력해 주세요." />
          )}
        />
      </div>
      <div className={cx('inputContainer')}>
        <label className={cx('label')}>비밀번호</label>
        <Controller
          control={control}
          name="email"
          defaultValue=""
          render={({ field }) => (
            <PasswordInput placeholder="영문, 숫자를 조합해 8자 이상 입력해 주세요." />
          )}
        />
      </div>
      <div className={cx('inputContainer')}>
        <label className={cx('label')}>비밀번호 확인</label>
        <Controller
          control={control}
          name="email"
          defaultValue=""
          render={({ field }) => (
            <PasswordInput placeholder="비밀번호와 일치하는 값을 입력해 주세요." />
          )}
        />
      </div>
      <Cta className={cx('cta')}>
        <button className={cx('button')}>회원가입</button>
      </Cta>
    </form>
  );
}
