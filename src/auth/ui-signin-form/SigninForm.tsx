import classNames from 'classnames/bind';
import styles from './SigninForm.module.scss';
import { Input } from '@/src/commons/ui-input/Input';
import { Cta } from '@/src/commons/ui-cta/Cta';
import PasswordInput from '@/src/commons/ui-password-input/PasswordInput';

import {
  ChangeEvent,
  FocusEvent,
  FormEventHandler,
  MouseEventHandler,
} from 'react';
import { FormValue } from '../feature-signin-form/SignInForm';

const cx = classNames.bind(styles);

type SigninFormProps = {
  isSignUp: boolean;
  onClick: MouseEventHandler<HTMLDivElement>;
  formValue: FormValue;
  onChange: (name: string, value: string) => void;
  onSubmit: FormEventHandler<HTMLFormElement>;
  onBlur: (e: FocusEvent<HTMLInputElement>) => void;
};

export function SigninForm({
  isSignUp,
  onClick,
  formValue,
  onChange,
  onSubmit,
  onBlur,
}: SigninFormProps) {
  return (
    <form className={cx('form')} onSubmit={onSubmit}>
      <div className={cx('inputContainer')}>
        <label className={cx('label')}>이메일</label>
        <Input
          value={formValue.email}
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            onChange('email', e.target.value);
          }}
          onBlur={onBlur}
          placeholder="이메일을 입력해주세요."
          type="email"
        />
      </div>
      <div className={cx('inputContainer')}>
        <label className={cx('label')}>비밀번호</label>
        <PasswordInput
          value={formValue.password}
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            onChange('password', e.target.value);
          }}
          placeholder="비밀번호를 입력해주세요."
          onBlur={onBlur}
        />
      </div>
      {isSignUp && (
        <div className={cx('inputContainer')}>
          <label className={cx('label')}>비밀번호 확인</label>
          <PasswordInput
            value={formValue?.passwordRepeat ?? ''}
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              onChange('passwordRepeat', e.target.value);
            }}
            onBlur={onBlur}
          />
        </div>
      )}
      <Cta className={cx('cta')} onClick={onClick}>
        <button className={cx('button')}>로그인</button>
      </Cta>
    </form>
  );
}
