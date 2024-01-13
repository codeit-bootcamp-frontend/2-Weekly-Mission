import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import HeaderLayout from '@/components/HeaderLayout/HeaderLayout';
import Navbar from '@/components/Navbar/Navbar';
import SharedHeader from '@/components/SharedHeader/SharedHeader';
import SearchBar from '@/components/SearchBar/SearchBar';
import Footer from '@/components/Footer/Footer';
import SearchedCardList from '@/components/SearchedCardList/SearchedCardList';
import styles from '@/styles/shared.module.css';

export default function Shared() {
  const router = useRouter();
  const { folderId } = router.query;
  const [searchValue, setSearchValue] = useState('');

  return (
    <>
      <Navbar userId='1' className='sticky' />
      <HeaderLayout>
        <SharedHeader userId='1' folderId={folderId} />
      </HeaderLayout>
      <SearchBar searchValue={searchValue} setSearchValue={setSearchValue} />
      <SearchedCardList userId='1' folderId={folderId} searchValue={searchValue} />
      <Footer />
    </>
  );
}
