import Link from 'next/link';
import Image from 'next/image';

import styles from './Footer.module.scss';
import classNames from 'classnames/bind';

import { FOOTER_SOCIAL_LIST } from 'constants/listOption';

const cx = classNames.bind(styles);

const Footer = () => {
  return (
    <footer className={cx('footer')}>
      <div className={cx('footer-container')}>
        <h2 className={cx('visually-hidden')}>footer</h2>
        <div className={cx('copyright')}>©codeit - 2023</div>
        <div>
          <ul className={cx('corporate-list')}>
            <li className={cx('corporate-list-item')}>
              <Link href={'/privacy'} className={cx('corporate-list-item-link')}>
                Privacy Policy
              </Link>
            </li>
            <li className={cx('corporate-list-item')}>
              <Link href={'/faq'} className={cx('corporate-list-item-link')}>
                FAQ
              </Link>
            </li>
          </ul>
        </div>
        <div className={cx('social')}>
          <ul className={cx('social-list')}>
            {FOOTER_SOCIAL_LIST.map((item) => (
              <li key={item.id} className={cx('social-list-item')}>
                <Link
                  href={item.url}
                  aria-label={item.label}
                  className={cx('social-list-item-link')}
                >
                  <Image
                    src={item.icon.url}
                    alt={item.icon.alt}
                    className={cx('social-list-item-link-icon')}
                    width={20}
                    height={20}
                  />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
