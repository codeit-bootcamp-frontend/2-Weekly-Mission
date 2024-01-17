import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import SignLayout from '@/components/Sign/SignLayout/SignLayout';
import SignHeader from '@/components/Sign/SignHeader/SignHeader';
import SignUpForm from '@/components/Sign/SignUpForm/SignUpForm';
import Social from '@/components/Sign/Social/Social';
import EmailInput from '@/components/Sign/EmailInput/EmailInput';
import PasswordInput from '@/components/Sign/PasswordInput/PasswordInput';
import DoubleCheckPasswordInput from '@/components/Sign/DoubleCheckPasswordInput/DoubleCheckPasswordInput';
import Loading from '@/components/Loading/Loading';

export default function Signup() {
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
          <SignHeader question='이미 회원이신가요?' href='/signin' linkText='로그인 하기' />
          <SignUpForm url='/sign-up' cta='회원가입'>
            <EmailInput />
            <PasswordInput />
            <DoubleCheckPasswordInput />
          </SignUpForm>
          <Social text='다른 방식으로 가입하기' />
        </SignLayout>
      ) : (
        <Loading />
      )}
    </>
  );
}
