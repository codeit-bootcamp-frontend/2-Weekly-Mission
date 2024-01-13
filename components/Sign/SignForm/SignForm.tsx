import React from 'react';
import { useRouter } from 'next/router';
import { useForm, SubmitHandler, FormProvider } from 'react-hook-form';

import Input from '@/components/Sign/Input/Input';
import CTA from '@/components/CTA/CTA';

import { FormValues, validation } from '@/lib/formTypes';
import { regExp } from '@/lib/constants.js';
import axios from '@/lib/axios.js';

import styles from './SignForm.module.css';

export default function SignForm({ url }: { url: '/sign-in' | '/sign-up' }) {
  const router = useRouter();
  const pathname = router.pathname;
  const isSignUpPage = pathname === '/signup' ? true : false;

  const methods = useForm<FormValues>({ mode: 'onBlur' });

  // 이 함수도 useForm의 methods를 사용해서 SignForm 컴포넌트 밖으로 빼기가 어려운데,
  // 어디에 정의하는 게 좋을까요?
  const checkEmail = async () => {
    const email = { email: methods.getValues('email') };
    let isUsableEmail = false;
    try {
      const { data } = await axios.post('/check-email', email);
      isUsableEmail = data.data.isUsableNickname;
    } catch (error) {
      methods.setError('email', { message: '이미 사용 중인 이메일입니다.' });
    }
    return isUsableEmail;
  };

  const onSubmit: SubmitHandler<FormValues> = async () => {
    const isUsableEmail = isSignUpPage ? await checkEmail() : true;

    if (!isUsableEmail) return;

    const userData = { email: methods.getValues('email'), password: methods.getValues('password') };

    try {
      const { data } = await axios.post(url, userData);
      localStorage.setItem('accessToken', data.data.accessToken);

      return router.push('/folder');
    } catch (error) {
      methods.setError('email', { message: '이메일을 확인해주세요.' });
      methods.setError('password', { message: '비밀번호를 확인해주세요.' });
    }
  };

  const emailValidation: validation = {
    required: '이메일을 입력해주세요.',
    pattern: {
      value: regExp.email,
      message: '올바른 이메일 주소가 아닙니다.',
    },
  };

  const passwordValidation: validation = {
    required: '비밀번호를 입력해주세요.',
    pattern: {
      value: regExp.password,
      message: '비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.',
    },
  };

  // Question: 이 3가지 validation들을 따로 파일로 혹은 컴포넌트 밖으로 분리시키고 싶은데,
  // 현재 이 객체에서 useForm의 methods, getvalues를 사용하기 때문에, 분리가 어렵습니다.
  // 방법이 있을까요?
  // 혹은 아래의 이 validation만 컴포넌트 내부에 두고, 나머지는 밖으로 빼는건 통일성이 없겠죠?
  const doubleCheckPasswordValidation: validation = {
    required: '비밀번호를 입력해주세요.',
    pattern: {
      value: regExp.password,
      message: '비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.',
    },
    validate: {
      check: (val) => {
        if (methods.getValues('password') !== val) {
          return '비밀번호가 일치하지 않아요.';
        }
      },
    },
  };

  return (
    <FormProvider {...methods}>
      <form className={styles.form} onSubmit={methods.handleSubmit(onSubmit)}>
        <Input
          label='이메일'
          id='email'
          type='email'
          placeholder='이메일을 입력해주세요.'
          validation={emailValidation}
        />
        <Input
          label='비밀번호'
          id='password'
          type='password'
          placeholder='영문, 숫자를 조합해 8자 이상 입력해 주세요.'
          validation={passwordValidation}
        />
        {isSignUpPage ? (
          <Input
            label='비밀번호 확인'
            id='doubleCheckPassword'
            type='password'
            placeholder='비밀번호와 일치하는 값을 입력해 주세요.'
            validation={doubleCheckPasswordValidation}
          />
        ) : null}
        <CTA text={isSignUpPage ? '회원가입' : '로그인'} className='variableWidth' />
      </form>
    </FormProvider>
  );
}
