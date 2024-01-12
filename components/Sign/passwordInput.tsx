import { useState } from 'react';

import Image from 'next/image';

import styles from './passwordInput.module.css';

interface InputProps {
  error?: boolean;
  errorMsg?: string;
  onBlurHandler?: (event: React.FocusEvent<HTMLInputElement>) => void;
}

export default function PasswordInput({ error, errorMsg, onBlurHandler }: InputProps) {
  const [showPassword, setShowPassword] = useState(false);

  function onClickHandler() {
    setShowPassword(!showPassword);
  }

  return (
    <>
      <div className={styles.inputForm}>
        <input
          type={showPassword ? 'text' : 'password'}
          className={`${styles.default} ${error && styles.error}`}
          onBlur={onBlurHandler}
        />
        {error && <span className={styles.errorMsg}> {errorMsg} </span>}

        <button className={styles.passwordBtn} onClick={onClickHandler}>
          {showPassword ? (
            <Image src='/images/eye-on.svg' alt='비밀번호표시' width={16} height={16} />
          ) : (
            <Image src='/images/eye-off.svg' alt='비밀번호숨김' width={16} height={16} />
          )}
        </button>
      </div>
    </>
  );
}
