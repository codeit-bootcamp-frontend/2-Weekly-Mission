import Link from 'next/link';

import { FormEvent, ReactNode } from 'react';

import styles from './Layout.module.css';
import SubmitButton from './submitButton';

interface LayoutProps {
  questionText?: string;
  linkText?: string;
  href: string;
  submitBtnText: string;
  snsText: string;
  children?: ReactNode;
}

export default function Layout({ questionText, linkText, href, submitBtnText, snsText, children }: LayoutProps) {
  const handleOnSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('submitTest');
  };

  return (
    <form onSubmit={handleOnSubmit}>
      <div className={styles.body}>
        <header className={styles.header}>
          <Link href='/'>
            <img className={styles.headerLogo} src='/images/linkbrary.svg' alt='logo' />
          </Link>

          <div className={styles.headerSignTextForm}>
            <span className={styles.headerSignText}>{questionText}</span>
            <div>
              <Link className={styles.headerLoginLink} href={href}>
                {linkText}
              </Link>
              <hr className={styles.headerLoginHr} />
            </div>
          </div>
        </header>

        <section className={styles.section}>
          {children}

          <SubmitButton text={submitBtnText} />

          <div className={styles.socialForm}>
            <span className={styles.socialSnsText}>{snsText}</span>
            <div className={styles.socialLinkForm}>
              <Link target='_blank' href='https://www.google.com/' rel='noopener noreferrer'>
                <div className={`${styles.snsBg1} ${styles.socialLinkBackground}`}>
                  <img className='' src='/images/google.png' alt='google' />
                </div>
              </Link>
              <Link
                target='_blank'
                href='https://www.kakaocorp.com/page/service/service/KakaoTalk?lang=ko'
                rel='noopener noreferrer'
              >
                <div className={`${styles.snsBg2} ${styles.socialLinkBackground}`}>
                  <img className='' src='/images/kakako.svg' alt='kakao' />
                </div>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </form>
  );
}
