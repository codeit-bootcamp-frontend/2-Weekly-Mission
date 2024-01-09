import styles from './CardList.module.scss';
import classNames from 'classnames/bind';

import { ReactNode, forwardRef } from 'react';

const cx = classNames.bind(styles);

export const CardList = forwardRef<HTMLDivElement, { children: ReactNode }>(
  ({ children }, ref) => {
    return (
      <div ref={ref} className={cx('container')}>
        {children}
      </div>
    );
  }
);
