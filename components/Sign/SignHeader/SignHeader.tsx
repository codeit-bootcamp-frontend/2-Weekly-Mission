import Link from 'next/link';
import Image from 'next/image';
import Logo from '@/public/images/logo.svg';
import styles from './SignHeader.module.css';

interface HeaderProps {
  question: '회원이 아니신가요?' | '이미 회원이신가요?';
  href: '/signup' | '/signin';
  linkText: '회원 가입하기' | '로그인 하기';
}

export default function SignHeader({ question, href, linkText }: HeaderProps) {
  return (
    <header className={styles.logo}>
      <Link href='/'>
        <Image
          className={styles.linkToMain}
          src={Logo}
          alt='메인페이지로 이동하는 링크브러리 로고'
          width={210}
          height={38}
        />
      </Link>
      <p className={styles.ask}>
        {question}
        <Link className={styles.linkToSign} href={href}>
          {linkText}
        </Link>
      </p>
    </header>
  );
}
