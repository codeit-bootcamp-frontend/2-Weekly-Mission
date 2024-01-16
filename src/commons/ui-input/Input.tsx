import {
  ChangeEventHandler,
  FocusEventHandler,
  HTMLInputTypeAttribute,
  forwardRef,
} from 'react';
import styles from './Input.module.scss';
import classNames from 'classnames/bind';
import { FieldError, FieldValues, UseFormRegister } from 'react-hook-form';

const cx = classNames.bind(styles);

export type InputProps = {
  value: string | number;
  placeholder?: string;
  type?: HTMLInputTypeAttribute;
  onChange: ChangeEventHandler<HTMLInputElement>;
  hasError?: boolean;
  errorMessage?: string;
  onBlur?: FocusEventHandler<HTMLInputElement>;
  name?: string;
};

export const Input = ({
  type = 'text',
  value,
  onChange,
  placeholder,
  hasError = false,
  errorMessage,
  onBlur,
  name,
}: InputProps) => {
  return (
    <div className={cx('container')}>
      <input
        name={name}
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
