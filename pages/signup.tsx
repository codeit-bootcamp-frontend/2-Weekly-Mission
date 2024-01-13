import React from 'react';

import SignLayout from '@/components/Sign/SignLayout/SignLayout';
import SignHeader from '@/components/Sign/SignHeader/SignHeader';
import SignForm from '@/components/Sign/SignForm/SignForm';
import Social from '@/components/Sign/Social/Social';

export default function Signup() {
  return (
    <SignLayout>
      <SignHeader question='이미 회원이신가요?' href='/signin' linkText='로그인 하기' />
      <SignForm url='/sign-up' />
      <Social text='다른 방식으로 가입하기' />
    </SignLayout>
  );
}
