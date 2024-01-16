import { MouseEventHandler, ReactNode } from 'react';
import styles from './Cta.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

// cta 컴포넌트 타입 선언
type CtaProps = {
  children: ReactNode;
  className?: string;
  onClick?: MouseEventHandler<HTMLDivElement>;
};

// CTA :call to action 컴포넌트
export const Cta = ({ children, className, onClick }: CtaProps) => {
  return (
    <div onClick={onClick} className={cx('container', className)}>
      {children}
    </div>
  );
};
