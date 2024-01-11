import classNames from 'classnames/bind';
import styles from './SigninForm.module.scss';
import { Input } from '@/src/commons/ui-input/Input';
import { Cta } from '@/src/commons/ui-cta/Cta';
import PasswordInput from '@/src/commons/ui-password-input/PasswordInput';
import { useForm, Controller } from 'react-hook-form';

const cx = classNames.bind(styles);

export default function SigninForm() {
  const { watch, control } = useForm();

  console.log(watch('email'));
  console.log(watch('password'));

  return (
    <form className={cx('form')}>
      <div className={cx('inputContainer')}>
        <label className={cx('label')}>이메일</label>
        <Controller
          control={control}
          name="email"
          defaultValue=""
          render={({ field }) => (
            <Input
              {...field}
              placeholder="이메일을 입력해주세요."
              type="email"
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
          render={({ field }) => (
            <PasswordInput {...field} placeholder="비밀번호를 입력해주세요." />
          )}
        />
      </div>
      <Cta className={cx('cta')}>
        <button
          className={cx('button')}
          onClick={(e) => {
            e.preventDefault();
            console.log(watch('email'));
          }}>
          로그인
        </button>
      </Cta>
    </form>
  );
}
