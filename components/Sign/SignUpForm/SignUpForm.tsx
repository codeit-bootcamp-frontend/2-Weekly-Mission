import { ReactNode } from 'react';
import { useRouter } from 'next/router';
import { useForm, SubmitHandler, FormProvider } from 'react-hook-form';

import CTA from '@/components/CTA/CTA';

import { FormValues } from '@/lib/formTypes';
import axios from '@/lib/axios.js';

import styles from './SignUpForm.module.css';

interface Props {
  url: '/sign-up';
  cta: '회원가입';
  children: ReactNode;
}

export default function SignForm({ url, cta, children }: Props) {
  const methods = useForm<FormValues>({ mode: 'onBlur' });

  const router = useRouter();

  const checkEmail = async () => {
    const email = { email: methods.getValues('email') };
    let isUsable = false;
    try {
      const { data } = await axios.post('/check-email', email);
      isUsable = data.data.isUsableNickname;
    } catch (error) {
      methods.setError('email', { message: '이미 사용 중인 이메일입니다.' });
    }
    return isUsable;
  };

  const onSubmit: SubmitHandler<FormValues> = async () => {
    const isUsableEmail = await checkEmail();
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

  return (
    <FormProvider {...methods}>
      <form className={styles.form} onSubmit={methods.handleSubmit(onSubmit)}>
        {children}
        <CTA text={cta} className='variableWidth' />
      </form>
    </FormProvider>
  );
}
