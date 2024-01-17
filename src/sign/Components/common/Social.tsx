import { ReactNode } from 'react';
import style from './Social.module.css';
import Link from 'next/link';
import google from '@/src/assets/google.png';
import kakao from '@/src/assets/kakaoLogin.svg';
import Image from 'next/image';

const Social = ({children}:{children:ReactNode}) => {
  return(
    <div className={style.social}>
      <p>{children}</p>
      <div className={style.icons}>
        <Link href="https://www.google.com">
          <div className={style.google}>
            <div className={style['google--icon']}>
              <Image src={google} alt="google login" fill/>
            </div>
          </div>
        </Link>
        <Link href="https://www.kakaocorp.com/page">
          <div className={style.kakao}>
            <div className={style['kakao--icon']}>
              <Image src={kakao} alt="kakao login" fill/>
            </div>
          </div>
        </Link>
      </div>
    </div>
  )
};

export default Social;
