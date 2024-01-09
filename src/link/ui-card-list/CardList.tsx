import { ReactNode, forwardRef } from 'react';
import styles from './CardList.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

// 카드 리스트 컴포넌트
export const CardList = forwardRef<HTMLDivElement, { children: ReactNode }>(
  ({ children }, ref) => {
    return (
      <div ref={ref} className={cx('container')}>
        {children}
      </div>
    );
  }
);

CardList.displayName = 'CardList';
