import type { AppProps } from 'next/app';
import Head from 'next/head';

import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

import '@/styles/global.css';

// 헤더 profile 추가
const profile = '';
// export const Layout = ({ children }) => {
// const [profile, setProfile] = useState('');
//   useEffect(() => {
//     const fetchData = async () => {
//       const { data } = await getCodeItInfo(`users/1`);
//       const { email, image_source } = data[0] || {};
//       const profile = data ? { email, image_source } : null;
//       setProfile(profile);
//     };
//     fetchData();
//   }, []);

export default function App({ Component, pageProps }: AppProps) {
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
