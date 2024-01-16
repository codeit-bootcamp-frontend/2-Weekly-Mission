import { ReactNode } from 'react';
import { MouseEvent } from 'react';
import styles from '@/components/Button.module.scss';
import classNames from 'classnames/bind';
interface ButtonProps {
  children: ReactNode;
  className?: string;
  variant: 'primary';
  size: 'large' | 'small';
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
}
export default function Button({
  children,
  className = '',
  variant = 'primary',
  onClick,
  size = 'large',
  ...props
}: ButtonProps) {
  const cx = classNames.bind(styles);

  return (
    <button
      className={cx(variant, size, className)}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
}
