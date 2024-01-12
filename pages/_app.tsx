import '@/styles/globals.css'
import Head from 'next/head';
import type { AppProps } from 'next/app'
import Footer from '@/src/common/Components/Footer/Footer';
import Nav from '@/src/common/Components/Nav/Nav';

export default function App({ Component, pageProps }: AppProps) {
  return( 
    <>
      <Head>
        <title>Linkbrary</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}
