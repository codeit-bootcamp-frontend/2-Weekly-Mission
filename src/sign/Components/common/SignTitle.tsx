import Link from 'next/link';
import style from './SignTitle.module.css';
import Image from 'next/image';
import logo from '@/src/assets/logo.svg';

const SignTitle = () => {
  return(
    <div className={style.container}>
      <Link href="/" className={style.logo}>
        <Image src={logo} alt="logo" fill/>
      </Link>
      <div className={style.description}>
        <p className={style.check}>회원이 아니신가요?</p>
        <Link href="/signup" className={style.link}>회원 가입하기</Link>
      </div>
    </div>
  )
};

export default SignTitle;
