import Header from './Header.js'
import Nav from './Nav.js'
import Search from './Search.js'
import Cards from './Cards.js'
import Footer from './Footer.js'
import '../styles/reset.css'
import '../styles/global.css'
import '../styles/App.css'
import { useEffect, useState } from 'react';

async function getUserProfile() {
  const response = await fetch('https://bootcamp-api.codeit.kr/api/sample/user');
  const body = await response.json();
  return body
}

async function getFolderProfile() { 
  const response = await fetch('https://bootcamp-api.codeit.kr/api/sample/folder');
  const body = await response.json();
  return body
}

function App() {
  const [userProfile, setUserProfile] = useState({
    id: 0,
    name: "",
    email: "",
    profileImageSource: ""
  });

  const [folderProfile, setFolderProfile] = useState({
    id: 0,
    name: "",
    owner: {
      id: 0,
      name: "",
      profileImageSource: ""
    },
    links: [],
    count: 0,
  });

  const handleLoad = async () => {
    const user = await getUserProfile();
    setUserProfile(user);

    const { folder } = await getFolderProfile();
    setFolderProfile(folder);
  };

  useEffect(() => {
    handleLoad();
  }, []);

  return (
    <>
      <Nav userProfile={userProfile} />
      <Header folderProfile={folderProfile} />
      <main className="main">
        <Search />
        <Cards folderProfile={folderProfile} />
      </main>
      <Footer />
    </>
  )
}

export default App;
