import Link from 'next/link';
import Image from 'next/image';
import Container from '@/components/Container';
import SignUpForm from '@/components/SignUpForm';
import styles from '@/styles/SignupPage.module.scss';
import logoImg from '@/public/assets/images/logo.svg';
import googleImg from '@/public/assets/images/google.png';
import kakaoImg from '@/public/assets/images/kakao.png';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

export default function SignUpPage() {
  return (
    <Container page={'users'}>
      <header className={cx('header')}>
        <h1 className={cx('visually-hidden')}>회원가입 페이지</h1>
        <Link className={cx('logo')} href={'/'}>
          <Image src={logoImg} alt="홈으로 연결된 Linkbrary 로고" />
        </Link>

        <div className={cx('text')}>
          <span>이미 회원이신가요?</span>
          <Link className={cx('link')} href={'/signin'}>
            로그인 하기
          </Link>
        </div>
      </header>

      <SignUpForm />

      <footer className={cx('footer')}>
        <h2 className={cx('title')}>다른 방식으로 가입하기</h2>
        <div className={cx('link-group')}>
          <Link className={cx('link')} href="https://www.google.com/">
            <Image src={googleImg} alt="구글" />
          </Link>
          <Link className={cx('link')} href="https://www.kakaocorp.com/page/">
            <Image src={kakaoImg} alt="카카오톡" />
          </Link>
        </div>
      </footer>
    </Container>
  );
}
