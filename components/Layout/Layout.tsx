import { ReactNode, useEffect, useState } from 'react';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';

import BASE_PATH from '../../pages/api/codeit';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
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
      <Header profile={profile} />
      {children}
      <Footer />
    </>
  );
}
