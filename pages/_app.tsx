import type { AppProps } from 'next/app';
import Head from 'next/head';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import '@/styles/global.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Linkbrary</title>
        <link rel='icon' href='/favicon.ico'></link>
      </Head>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
