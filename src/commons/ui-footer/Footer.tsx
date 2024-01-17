import styles from './Footer.module.scss';
import classNames from 'classnames/bind';
import { ROUTE } from '../util/constant';
import { TEXT, SNS } from './constant';
import { forwardRef } from 'react';
import Link from 'next/link';

const cx = classNames.bind(styles);

export const Footer = forwardRef<HTMLElement>((_, ref) => {
  return (
    <footer ref={ref} className={cx('container')}>
      <div className={cx('items')}>
        <span className={cx('copyright')}>{TEXT.codeit}</span>
        <div className={cx('links')}>
          <Link className={cx('link')} href={ROUTE.개인정보처리방침}>
            {TEXT.privacyPolicy}
          </Link>
          <Link className={cx('link')} href={ROUTE.FAQ}>
            {TEXT.faq}
          </Link>
        </div>
        <div className={cx('sns')}>
          {SNS.map((sns) => {
            return (
              <Link
                key={sns}
                href={`https://www.${sns}.com/`}
                target="_blank"
                rel="noopener noreferrer">
                <img
                  src={`../../images/${sns}.svg`}
                  alt={`${sns} 홈페이지로 연결된 ${sns} 로고`}
                />
              </Link>
            );
          })}
        </div>
      </div>
    </footer>
  );
});

Footer.displayName = 'Footer';
