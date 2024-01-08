import '/public/assets/reset.css';
import Footer from 'components/common/Footer';
import Gnb from 'components/common/Gnb';

import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Gnb />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
