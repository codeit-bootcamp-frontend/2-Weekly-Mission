import Link from 'next/link';
import style from './SignTitle.module.css';
import Image from 'next/image';
import logo from '@/src/assets/logo.svg';
import { ReactNode } from 'react';

interface PropType {
  children:ReactNode;
  link: string;
  linkButton: string;
}

const SignTitle = ({children, link, linkButton}: PropType) => {
  return(
    <div className={style.container}>
      <Link href="/" className={style.logo}>
        <Image src={logo} alt="logo" fill/>
      </Link>
      <div className={style.description}>
        <p className={style.check}>{children}</p>
        <Link href={`/${link}`} className={style.link}>{linkButton}</Link>
      </div>
    </div>
  )
};

export default SignTitle;
