import Header from '../components/Header';
import Nav from '../components/Nav';
import Search from '../components/Search';
import CardList from '../components/CardList';
import Footer from '../components/Footer';
import '../styles/reset.css';
import '../styles/global.css';
import '../styles/Main.css';
import { useEffect, useState } from 'react';
import { getUserProfile, getFolderProfile } from '../api/api.js';

function SharedPage() {
  const [profile, setProfile] = useState(null);
  const isSiginin = profile !== null;

  const [userProfile, setUserProfile] = useState({
    id: 0,
    name: '',
    email: '',
    profileImageSource: '',
  });

  const [folderProfile, setFolderProfile] = useState({
    id: 0,
    name: '',
    owner: {
      id: 0,
      name: '',
      profileImageSource: '',
    },
    links: [],
    count: 0,
  });

  const handleLoad = async () => {
    const user = await getUserProfile();
    setUserProfile(user);
    setProfile(user);

    const { folder } = await getFolderProfile();
    setFolderProfile(folder);
  };

  useEffect(() => {
    handleLoad();
  }, []);

  return (
    <>
      <Nav userProfile={userProfile} isSiginin={isSiginin} />
      <Header folderProfile={folderProfile} />
      <main className="main">
        <Search />
        <CardList folderProfile={folderProfile} />
      </main>
      <Footer />
    </>
  );
}

export default SharedPage;
