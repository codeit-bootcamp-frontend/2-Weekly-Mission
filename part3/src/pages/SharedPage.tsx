import Nav from '../Components/sharing/Nav';
import Footer from '../Components/sharing/Footer';
import { getUserData, getUserPick } from '../util/api';
import React, { ChangeEvent, useEffect, useState } from 'react';
import SharedPageHeader from '../Components/sharedPage/SharedPageHeader';
import SharedPageMain from '../Components/sharedPage/SharedPageMain';

interface Card {
  createdAt: string | number;
  description: string;
  imageSource: string;
  title: string;
  url: string;
  id: number;
}

function SharedPage() {
  const [userInfo, setUserInfo] = useState({
    name: '',
    owner: { profileImageSource: '', name: '' },
  });
  const [cardData, setCardData] = useState<Card[]>([]);
  const [userData, setUserData] = useState({
    email: '',
    profileImageSource: '',
  });
  const [search, setSearch] = useState('');

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const makeSearchList = async () => {
    const { data } = await getUserPick();

    const isInclude = (data: string, key = search) =>
      data?.toLowerCase().includes(key?.toLowerCase());

    const filteredSearch = data.filter(
      (card: Card) =>
        isInclude(card.title) ||
        isInclude(card.url) ||
        isInclude(card.description)
    );
    setCardData(filteredSearch);
  };

  const isUser = async () => {
    const { email, profileImageSource } = await getUserData();
    setUserData({
      email,
      profileImageSource,
    });
  };

  const userInfoAll = async () => {
    const { folder } = await getUserPick();
    const { name, owner, links } = folder;
    setUserInfo({ ...userInfo, name, owner });

    setCardData(links);
  };

  useEffect(() => {
    isUser();
    userInfoAll();
    makeSearchList();
  }, []);

  return (
    <>
      <Nav userData={userData} />
      <SharedPageHeader userInfo={userInfo} />
      <SharedPageMain
        search={search}
        handleSearch={handleSearch}
        cardData={cardData}
      />
      <Footer />
    </>
  );
}

export default SharedPage;
