import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import SignLayout from '@/components/Sign/SignLayout/SignLayout';
import SignHeader from '@/components/Sign/SignHeader/SignHeader';
import SignInForm from '@/components/Sign/SignInForm/SignInForm';
import Social from '@/components/Sign/Social/Social';
import EmailInput from '@/components/Sign/EmailInput/EmailInput';
import PasswordInput from '@/components/Sign/PasswordInput/PasswordInput';
import Loading from '@/components/Loading/Loading';

export default function Signin() {
  const [displayPage, setDisplayPage] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const accessToken = localStorage.getItem('accessToken');
    accessToken ? router.push('/folder') : setDisplayPage(true);
  }, []);

  return (
    <>
      {displayPage ? (
        <SignLayout>
          <SignHeader question='회원이 아니신가요?' href='/signup' linkText='회원 가입하기' />
          <SignInForm url='/sign-in' cta='로그인'>
            <EmailInput />
            <PasswordInput />
          </SignInForm>
          <Social text='소셜 로그인' />
        </SignLayout>
      ) : (
        <Loading />
      )}
    </>
  );
}
