import React, { useState } from 'react';
import Image from 'next/image';
import { useFormContext } from 'react-hook-form';
import { FormValues, validation } from '@/lib/formTypes';
import EyeOn from '@/public/images/eye-on.svg';
import EyeOff from '@/public/images/eye-off.svg';
import styles from './Input.module.css';

interface Props {
  label: '이메일' | '비밀번호' | '비밀번호 확인';
  id: 'email' | 'password' | 'doubleCheckPassword';
  type: 'email' | 'password';
  placeholder:
    | '이메일을 입력해주세요.'
    | '영문, 숫자를 조합해 8자 이상 입력해 주세요.'
    | '비밀번호와 일치하는 값을 입력해 주세요.';
  validation: validation;
}

export default function Input({ label, id, type, placeholder, validation }: Props) {
  const {
    register,
    formState: { errors },
  } = useFormContext<FormValues>();
  const [togglePassword, setTogglePassword] = useState<boolean>(false);

  const source = togglePassword ? EyeOn : EyeOff;

  return (
    <div className={styles.inputContainer}>
      <label className={styles.inputLabel} htmlFor={id}>
        {label}
      </label>
      <div className={`${styles.input} ${errors[id] && styles.inputError}`}>
        <input
          className={styles.inputValue}
          id={id}
          type={togglePassword ? 'text' : type}
          placeholder={placeholder}
          {...register(id, validation)}
        />
        {type === 'password' && (
          <button
            type='button'
            onClick={() => {
              setTogglePassword((prev) => !prev);
            }}
          >
            <Image className={styles.togglePassword} src={source} alt='비밀번호 숨김 표시' width={16} height={14} />
          </button>
        )}
      </div>
      <small className={styles.errorMessage}>{errors[id]?.message}</small>
    </div>
  );
}
