import Header from "../components/Header-shared";
import Title from "../components/Title";
import CardInput from "../components/CardInput-shared";
import Search from "../components/Search";
import { useEffect, useState } from "react";
import { fetchProfile, fetchLinks } from "../api";

function SharedPage() {
  const [userData, setUserData] = useState();
  const [profile, setProfile] = useState(null);
  const [cardData, setCardData] = useState([]);

  const getProfile = async () => {
    const { email, profileImageSource } = await fetchProfile();

    setUserData({
      ...userData,
      email,
      profileImageSource,
    });
  };

  const getUserInfo = async () => {
    const { folder } = await fetchLinks();
    const { name, owner, links } = folder;

    setProfile({
      ...profile,
      name,
      owner,
    });

    setCardData(links);
  };

  useEffect(() => {
    getProfile();
    getUserInfo();
  }, []);

  return (
    <>
      <Header profile={userData} />
      <Title folderData={profile} />
      <Search />
      <CardInput linksData={cardData} />
    </>
  );
}

export default SharedPage;
