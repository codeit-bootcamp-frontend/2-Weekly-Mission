import React, { useEffect } from 'react';
import { useRouter } from 'next/router';

import SignLayout from '@/components/Sign/SignLayout/SignLayout';
import SignHeader from '@/components/Sign/SignHeader/SignHeader';
import SignForm from '@/components/Sign/SignForm/SignForm';
import Social from '@/components/Sign/Social/Social';
import EmailInput from '@/components/Sign/EmailInput/EmailInput';
import PasswordInput from '@/components/Sign/PasswordInput/PasswordInput';

export default function Signin() {
  const router = useRouter();

  useEffect(() => {
    if (localStorage.getItem('accessToken')) {
      router.push('/folder');
    }
  }, []);

  return (
    <SignLayout>
      <SignHeader question='회원이 아니신가요?' href='/signup' linkText='회원 가입하기' />
      <SignForm url='/sign-in' cta='로그인'>
        <EmailInput />
        <PasswordInput />
      </SignForm>
      <Social text='소셜 로그인' />
    </SignLayout>
  );
}
