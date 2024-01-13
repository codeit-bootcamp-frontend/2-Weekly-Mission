import { HTMLProps, forwardRef, useRef, useState } from 'react';
import styles from './Input.module.css';
import clsx from 'clsx';

type InputType = 'text' | 'email' | 'password';

interface InputProps extends HTMLProps<HTMLInputElement> {
  label: string;
  errors: any;
  type: InputType;
}

const Input = forwardRef<HTMLInputElement, InputProps>(({ label, errors, type, className, ...props }, ref) => {
  const { name: inputName } = props;

  let hasToBeToggled = false;
  if (type === 'password') hasToBeToggled = true;
  const hasError = !!errors?.[inputName ?? '']?.message;

  const [inputType, setInputType] = useState<'password' | 'text' | 'email'>(type);

  const handleClickToggle = () => {
    if (inputType === 'text') setInputType('password');
    if (inputType === 'password') setInputType('text');
  };

  const IMG_PATH = {
    password: '/assets/eye-off.svg',
    text: '/assets/eye-on.svg',
    email: '',
  };

  return (
    <div className={className}>
      <h1 className={styles.label}>{label}</h1>
      <div className={styles.inputWrapper}>
        <input
          className={clsx(styles.input, hasError && styles.inputError)}
          type={inputType}
          ref={ref}
          {...props}
        ></input>
        {hasToBeToggled && (
          <button className={styles.inputToggleButton} type="button" onClick={handleClickToggle}>
            <img src={IMG_PATH[inputType]} alt="비밀번호 토글 버튼 아이콘" />
          </button>
        )}
      </div>
      <p className={styles.errorMessage}>{errors?.[inputName ?? '']?.message}</p>
    </div>
  );
});

export default Input;
