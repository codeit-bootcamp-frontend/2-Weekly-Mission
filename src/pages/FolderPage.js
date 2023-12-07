import Header from "../components/Header-folder";
import AddLink from "../components/AddLink";
import CardInput from "../components/CardInput-folder";
import Search from "../components/Search";
import { useEffect, useState } from "react";
import { getUser, getUserLink } from "../api";

function FolderPage() {
  const [userData, setUserData] = useState();
  const [cardData, setCardData] = useState();

  const getProfile = async () => {
    const { data } = await getUser();
    const { email, image_source } = data[0]; // 인덱스로 접근하는 것 말고 다른 방법이 있을까요?

    setUserData({
      ...userData,
      email,
      image_source,
    });
  };

  const getCardData = async () => {
    const { data } = await getUserLink();

    setCardData(data);
  }

  useEffect(() => {
    getProfile();
    getCardData();
  }, []);

  return (
    <>
      <Header profile={userData} />
      <AddLink />
      <Search />
      <CardInput linksData={cardData}/>
    </>
  );
}

export default FolderPage;
