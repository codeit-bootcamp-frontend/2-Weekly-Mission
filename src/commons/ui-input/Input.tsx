import {
  ChangeEventHandler,
  FocusEventHandler,
  HTMLInputTypeAttribute,
} from 'react';
import styles from './Input.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

export type InputProps = {
  value: string | number;
  placeholder?: string;
  type?: HTMLInputTypeAttribute;
  onChange: ChangeEventHandler<HTMLInputElement>;
  hasError?: boolean;
  errorMessage?: string;
  onBlur?: FocusEventHandler<HTMLInputElement>;
};

export const Input = ({
  type = 'text',
  value,
  onChange,
  placeholder,
  hasError = false,
  errorMessage,
  onBlur,
}: InputProps) => {
  return (
    <div className={cx('container')}>
      <input
        type={type}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        placeholder={placeholder}
        className={cx('input', { error: hasError })}
      />
      {hasError && (
        <span className={cx('messageContainer')}>{errorMessage}</span>
      )}
    </div>
  );
};
