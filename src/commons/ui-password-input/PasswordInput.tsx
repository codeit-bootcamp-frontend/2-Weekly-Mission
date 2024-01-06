import { Input } from '../ui-input/Input';
import classNames from 'classnames/bind';
import styles from './PasswordInput.module.scss';
import EyeOnIcon from './eye-on.svg';
import EyeOffIcon from './eye-off.svg';
import { useState } from 'react';

const cx = classNames.bind(styles);

/* PasswordInput의 프롭 */
// 기존 Input - value, onChange, placeholder
//
// 에러가 뜰 때 - , 에러 여부, 에러 메세지

// PasswordInput의 state
// + type은 text나 password 중 하나 필수
// 비밀번호 가림 여부 => 타입 바뀌어야됨(password, text)

export default function PasswordInput() {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  return (
    <div className={cx('container')}>
      <Input
        value={'1234'}
        onChange={() => {}}
        placeholder=""
        hasError={true}
        errorMessage="테스트임"
        onBlur={() => {}}
        type="password"
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
