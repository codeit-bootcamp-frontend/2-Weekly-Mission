import { useState } from 'react';
import { useForm } from 'react-hook-form';

import Image from 'next/image';

import SubmitButton from './submitButton';

import styles from './SignInForm.module.css';

export default function SingInForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  }: any = useForm();

  const onSubmit = (data: any) => {
    const inputData = data.id && data.password;
    const userData = '';
    const submitValid = '';

    // 로그인, 회원가입 유효성 검사
    if (submitValid) {
      console.log('success!');
    } else {
      console.log('fail!');
    }
  };

  const onBlurHandler = () => {
    console.log(`BlurTest`);
  };

  const [showPassword, setShowPassword] = useState(false);
  function onClickHandler() {
    setShowPassword(!showPassword);
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <div>
        <div className={styles.labelForm}>
          <label>이메일</label>
          <input
            className={`${styles.default} ${errors.id && styles.error}`}
            type='text'
            name='id'
            placeholder='이메일을 입력해 주세요.'
            {...register('id', {
              required: true,
            })}
            onBlur={onBlurHandler}
          />
        </div>
        {errors.id && <span className={styles.errorMsg}>email error.</span>}
      </div>

      <div className={styles.passwordWrap}>
        <div className={styles.labelForm}>
          <label>비밀번호</label>
          <input
            className={`${styles.default} ${errors.id && styles.error}`}
            type={showPassword ? 'text' : 'password'}
            name='password'
            placeholder='비밀번호를 입력해 주세요.'
            {...register('password', {
              required: true,
            })}
            onBlur={onBlurHandler}
          />
        </div>
        {errors.password && <span className={styles.errorMsg}>password error.</span>}

        <button type='button' className={styles.passwordBtn} onClick={onClickHandler}>
          {showPassword ? (
            <Image src='/images/eye-on.svg' alt='비밀번호표시' width={16} height={16} />
          ) : (
            <Image src='/images/eye-off.svg' alt='비밀번호숨김' width={16} height={16} />
          )}
        </button>
      </div>

      <SubmitButton text='로그인' />
    </form>
  );
}
