import React, { ChangeEvent, MouseEvent, useEffect, useState } from 'react';
import styled from 'styled-components';
import { forUser1, TasteUser1, getUserList } from '../util/api';
import Nav from '../Components/sharing/Nav';
import Footer from '../Components/sharing/Footer';
import HeaderWithInPut from '../Components/folderPage/HeaderWithInput';
import FolderPageMain from '../Components/folderPage/FolderPageMain';
import EditModal from '../Components/sharing/Modals/EditModal';
import AddFolderModal from '../Components/sharing/Modals/AddFolderModal';
import DeleteFoderModal from '../Components/sharing/Modals/DeleteFolderModal';
import ShareModal from '../Components/sharing/Modals/ShareModal';
import AddLinkModal from '../Components/sharing/Modals/AddLinkModal';
import '../css/index.css';

const ForFolderNav = styled(Nav)`
  position: static;
`;

interface Btn {
  id: number;
  name: string;
  link: { count: number };
}

interface Card {
  created_at: string | number;
  description: string;
  image_source: string;
  title: string;
  url: string;
  id: number;
  folder_Id: number;
}

export default function FolderPage() {
  const [inputValue, setInputValue] = useState('');
  const [search, setSearch] = useState('');
  const [isModal, setIsModal] = useState<number | string | null>(null);
  const [littleTitle, setLittleTite] = useState<string | null>(null);

  const [buttons, setButtons] = useState<Btn[]>([]);
  const [cardData, setCardData] = useState<Card[]>([]);
  const [userData, setUSerData] = useState({
    email: '',
    profileImageSource: '',
  });

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const makeSearchList = async () => {
    const { data } = await getUserList();

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

  const handleValue = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleModal = (e: MouseEvent<HTMLElement>) => {
    const id = e.currentTarget.id;

    if (isModal === id) {
      setIsModal(null);
    }
    console.log(e.currentTarget.id);
    setIsModal(id);
  };

  const myUser = async () => {
    const { data } = await forUser1();
    const [user] = data.map((item: object) => (item ? item : ''));

    const { email, image_source: profileImageSource } = user;

    setUSerData({ ...userData, email, profileImageSource });
  };

  const getUserTasteButton = async () => {
    const { data } = await TasteUser1();

    return setButtons(data);
  };

  const handleShowAll = async () => {
    const { data } = await getUserList();
    setCardData(data);
    setLittleTite(null);
  };

  const yourPick = async (id?: number) => {
    const { data } = await getUserList(id);

    const filteredCards = data.filter(
      ({ folder_id }: { folder_id: number }) => folder_id === id
    );

    setLittleTite(data.name);

    setCardData(filteredCards);
  };

  useEffect(() => {
    myUser();
    getUserTasteButton();
    handleShowAll();
    makeSearchList();
    yourPick();
  }, [search]);

  return (
    <>
      <ForFolderNav userData={userData} />
      <HeaderWithInPut
        inputValue={inputValue}
        handleValue={handleValue}
        handleModal={handleModal}
      />

      <FolderPageMain
        setSearch={setSearch}
        handleSearch={handleSearch}
        handleModal={handleModal}
        handleShowAll={handleShowAll}
        yourPick={yourPick}
        search={search}
        isModal={isModal}
        littleTitle={littleTitle}
        buttons={buttons}
        cardData={cardData}
      />
      <Footer />
      {isModal === 'addLink' && <AddFolderModal handleModal={handleModal} />}
      {isModal === 'goshare' && (
        <ShareModal
          name={littleTitle ? littleTitle : ''}
          handleModal={handleModal}
        />
      )}
      {isModal === 'changeName' && <EditModal handleModal={handleModal} />}
      {isModal === 'deleteFolder' && (
        <DeleteFoderModal name={littleTitle} handleModal={handleModal} />
      )}
      {isModal === 'addLinkBtn' && (
        <AddLinkModal
          url={inputValue}
          buttons={buttons}
          handleModal={handleModal}
        />
      )}
    </>
  );
}
