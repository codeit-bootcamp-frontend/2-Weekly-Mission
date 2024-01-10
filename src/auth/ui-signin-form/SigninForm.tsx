import classNames from 'classnames/bind';
import styles from './SigninForm.module.scss';
import { Input } from '@/src/commons/ui-input/Input';
import { Cta } from '@/src/commons/ui-cta/Cta';
import PasswordInput from '@/src/commons/ui-password-input/PasswordInput';

const cx = classNames.bind(styles);

export default function SigninForm() {
  return (
    <form className={cx('form')}>
      <div className={cx('inputContainer')}>
        <label className={cx('label')}>이메일</label>
        <Input />
      </div>
      <div className={cx('inputContainer')}>
        <label className={cx('label')}>비밀번호</label>
        <PasswordInput />
      </div>
      <Cta className={cx('cta')}>
        <span className={cx('button')}>로그인</span>
      </Cta>
    </form>
  );
}
