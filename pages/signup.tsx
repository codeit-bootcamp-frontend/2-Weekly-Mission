import Link from 'next/link';
import Image from 'next/image';
import Container from '@/components/Container';
import Button from '@/components/Button';
import Input from '@/components/Input';
import styles from '@/styles/SignupPage.module.scss';
import logoImg from '@/public/assets/images/logo.svg';
import googleImg from '@/public/assets/images/google.png';
import kakaoImg from '@/public/assets/images/kakao.png';
import classNames from 'classnames/bind';
import { useState, ChangeEvent, FormEvent } from 'react';
import { useRouter } from 'next/router';

const cx = classNames.bind(styles);

export default function SignUpPage() {
  const [values, setValues] = useState({
    name: '',
    email: '',
    password: '',
    passwordRepeat: '',
  });

  const router = useRouter();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    try {
      console.log('회원가입 성공');
      router.push('/folder');
    } catch (error) {
      console.error('Error:', error);
    }
  }

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

      <form className={cx('form')} onSubmit={handleSubmit}>
        <div className={cx('input-group')}>
          <div>
            <label htmlFor="email">이메일</label>
            <Input
              id="email"
              className={cx('input')}
              name="email"
              type="text"
              placeholder="example@email.com"
              value={values.email}
              onChange={handleChange}
            />
            <p className={cx('error-message')}>이메일 입력해주세요</p>
          </div>
          <div>
            <label htmlFor="password">비밀번호</label>
            <Input
              id="password"
              className={cx('input')}
              name="password"
              type="password"
              placeholder=""
              value={values.password}
              onChange={handleChange}
            />
            <p className={cx('error-message')}>비밀번호를 입력해주세요</p>
          </div>
          <div>
            <label htmlFor="passwordRepeat">비밀번호 확인</label>
            <Input
              id="passwordRepeat"
              className={cx('input')}
              name="passwordRepeat"
              type="password"
              placeholder=""
              value={values.passwordRepeat}
              onChange={handleChange}
            />
            <p className={cx('error-message')}>비밀번호를 입력해주세요</p>
          </div>
        </div>
        <Button variant={'primary'} size={'large'} className={cx('button')}>
          회원가입
        </Button>
      </form>

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
