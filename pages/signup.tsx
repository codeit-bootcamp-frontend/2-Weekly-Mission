import React, { useEffect } from 'react';
import { useRouter } from 'next/router';

import SignLayout from '@/components/Sign/SignLayout/SignLayout';
import SignHeader from '@/components/Sign/SignHeader/SignHeader';
import SignForm from '@/components/Sign/SignForm/SignForm';
import Social from '@/components/Sign/Social/Social';
import EmailInput from '@/components/Sign/EmailInput/EmailInput';
import PasswordInput from '@/components/Sign/PasswordInput/PasswordInput';
import DoubleCheckPasswordInput from '@/components/Sign/DoubleCheckPasswordInput/DoubleCheckPasswordInput';

export default function Signup() {
  const router = useRouter();

  useEffect(() => {
    if (localStorage.getItem('accessToken')) {
      router.push('/folder');
    }
  }, []);
  return (
    <SignLayout>
      <SignHeader question='이미 회원이신가요?' href='/signin' linkText='로그인 하기' />
      <SignForm url='/sign-up' cta='회원가입'>
        <EmailInput />
        <PasswordInput />
        <DoubleCheckPasswordInput />
      </SignForm>
      <Social text='다른 방식으로 가입하기' />
    </SignLayout>
  );
}
