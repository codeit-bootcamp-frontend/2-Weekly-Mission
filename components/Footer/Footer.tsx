import Link from 'next/link';
import Image from 'next/image';

import styles from './Footer.module.css';

import { ROUTE } from '../../util/constant';
import { TEXT } from './constant';

export default function Footer() {
  return (
    <footer className={styles.Footer}>
      <div className={styles.FooterItems}>
        <span className={styles.FooterCopyright}>{TEXT.codeit}</span>
        <div className={styles.FooterLinks}>
          <Link className={styles.FooterLinks} href={ROUTE.개인정보처리방침}>
            {TEXT.privacyPolicy}
          </Link>
          <Link className={styles.FooterLinks} href={ROUTE.FAQ}>
            {TEXT.faq}
          </Link>
        </div>
        <div className={styles.FooterSns}>
          <Link href='https://www.facebook.com/' target='_blank' rel='noopener noreferrer'>
            <Image src='/images/facebook.svg' alt='facebook 홈페이지로 연결된 facebook 로고' width={20} height={20} />
          </Link>
          <Link href='https://twitter.com/' target='_blank' rel='noopener noreferrer'>
            <Image src='/images/twitter.svg' alt='twitter 홈페이지로 연결된 twitter 로고' width={20} height={20} />
          </Link>
          <Link href='https://www.youtube.com/' target='_blank' rel='noopener noreferrer'>
            <Image src='/images/youtube.svg' alt='youtube 홈페이지로 연결된 youtube 로고' width={20} height={20} />
          </Link>
          <Link href='https://www.instagram.com/' target='_blank' rel='noopener noreferrer'>
            <Image
              src='/images/instagram.svg'
              alt='instagram 홈페이지로 연결된 instagram 로고'
              width={20}
              height={20}
            />
          </Link>
        </div>
      </div>
    </footer>
  );
}
