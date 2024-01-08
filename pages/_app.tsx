import type { AppProps } from 'next/app';
import { useEffect, useState } from 'react';
import Head from 'next/head';

import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

import '@/styles/global.css';
import BASE_PATH from './api/codeit';

export default function App({ Component, pageProps }: AppProps) {
  // 유저 로그인(임시)
  const [profile, setProfile] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await BASE_PATH.get(`users/1`);
      setProfile(data.data[0]);
    };
    fetchData();
  }, []);

  return (
    <>
      <Head>
        <title>Linkbrary</title>
        <link rel='icon' href='/favicon.ico'></link>
      </Head>
      <Header profile={profile} />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
