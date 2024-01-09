import { Input, InputProps } from '../ui-input/Input';
import classNames from 'classnames/bind';
import styles from './PasswordInput.module.scss';
import EyeOnIcon from './eye-on.svg';
import EyeOffIcon from './eye-off.svg';
import { useState } from 'react';

const cx = classNames.bind(styles);

/* PasswordInput의 프롭 */
// input의 type은 여기서 정해지니까 뺌
type PasswordInputProps = Omit<InputProps, 'type'>;

// 비밀번호 input 컴포넌트
export default function PasswordInput({
  value,
  onChange,
  placeholder,
  hasError = false,
  errorMessage,
  onBlur,
}: PasswordInputProps) {
  // 비밀번호 가림 여부
  const [isVisible, setIsVisible] = useState<boolean>(false);

  //   visible에 따른 타입 값
  const inputType = isVisible ? 'text' : 'password';

  return (
    <div className={cx('container')}>
      <Input
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        hasError={hasError}
        errorMessage={errorMessage}
        onBlur={onBlur}
        type={inputType}
      />
      <button
        type="button"
        className={cx('button')}
        onClick={() => {
          setIsVisible(!isVisible);
        }}>
        {isVisible ? <EyeOnIcon /> : <EyeOffIcon />}
      </button>
    </div>
  );
}
