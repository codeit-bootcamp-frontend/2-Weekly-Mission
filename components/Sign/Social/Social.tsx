import Image from 'next/image';
import Link from 'next/link';
import GoogleIcon from '@/public/images/google.svg';
import KakaoIcon from '@/public/images/kakao.svg';
import styles from './Social.module.css';

interface Props {
  text: '다른 방식으로 가입하기' | '소셜 로그인';
}

export default function Social({ text }: Props) {
  return (
    <footer className={styles.social}>
      <p className={styles.title}>{text}</p>
      <div className={styles.logoContainer}>
        <Link href='http://www.google.com/' target='_blank'>
          <Image className={styles.logo} src={GoogleIcon} alt='구글 홈페이지로 이동' width={42} height={42} />
        </Link>
        <Link href='https://www.kakaocorp.com/page/' target='_blank'>
          <Image className={styles.logo} src={KakaoIcon} alt='카카오 홈페이지로 이동' width={42} height={42} />
        </Link>
      </div>
    </footer>
  );
}
