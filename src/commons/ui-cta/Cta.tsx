import { ReactNode } from 'react';
import styles from './Cta.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

// cta 컴포넌트 타입 선언
type CtaProps = {
  children: ReactNode;
};

// CTA :call to action 컴포넌트
export const Cta = ({ children }: CtaProps) => {
  return <div className={cx('container')}>{children}</div>;
};
