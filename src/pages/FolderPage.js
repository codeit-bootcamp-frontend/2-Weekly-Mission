import Header from "../components/Header-folder";
import AddLink from "../components/AddLink";
import CardInput from "../components/CardInput";
import Search from "../components/Search";
import { useEffect, useState } from "react";
import { getUser } from "../api";

function FolderPage() {
  const [userData, setUserData] = useState();

  const getProfile = async () => {
    const { data } = await getUser();
    const { email, image_source } = data[0];

    setUserData({
      ...userData,
      email,
      image_source,
    });
  };

  useEffect(() => {
    getProfile();
  }, []);

  return (
    <>
      <Header profile={userData} />
      <AddLink />
      <Search />
      <CardInput />
    </>
  );
}

export default FolderPage;
