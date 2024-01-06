import { MouseEventHandler, ReactNode } from 'react';
import styles from './Card.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

// 카드 컴포넌트의 프롭 타입 선언
type CardProps = {
  children: ReactNode;
  onMouseOver: MouseEventHandler<HTMLDivElement>;
  onMouseLeave: MouseEventHandler<HTMLDivElement>;
};

// 카드 (정확히는 카드 컨테이너) 컴포넌트
export const Card = ({ children, onMouseOver, onMouseLeave }: CardProps) => {
  return (
    <div
      className={cx('container')}
      onMouseOver={onMouseOver}
      onMouseLeave={onMouseLeave}>
      {children}
    </div>
  );
};
