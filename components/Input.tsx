import styles from '@/components/Input.module.scss';
import classNames from 'classnames/bind';
import { useState, useRef, InputHTMLAttributes, RefObject } from 'react';

const cx = classNames.bind(styles);
interface InputRefProps {
  inputRef: RefObject<HTMLInputElement>;
}

const ToggleEye = ({ inputRef }: InputRefProps) => {
  const [isActive, setActive] = useState(false);

  const handleClick = () => {
    setActive(!isActive);
    if (inputRef.current) {
      inputRef.current.type = isActive ? 'text' : 'password';
    }
  };

  const label = isActive ? '비밀번호 숨기기' : '비밀번호 보이기';

  const className = cx('toggle-eye', { active: isActive });

  return (
    <button className={className} onClick={handleClick}>
      <span className={cx('visually-hidden')}>{label}</span>
    </button>
  );
};

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

export default function Input({ className = '', ...props }: InputProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div className={cx('container', className)} {...props}>
      <input ref={inputRef} {...props} />
      {props.type === 'password' && <ToggleEye inputRef={inputRef} />}
    </div>
  );
}
