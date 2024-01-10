import { useState, useEffect } from "react";
import axios from "../lib/axios";
import Header from "../components/elements/Header";
import AddLink from "../components/folderPage/AddLink";
import Search from "../components/elements/Search";
import FolderList from "../components/folderPage/FolderList";
import Card from "../components/elements/Card";
import Footer from "../components/elements/Footer";

function FolderPage() {
  const [userData, setUserData] = useState();
  const [folderData, setFolderData] = useState();
  const [folderList, setFolderList] = useState();

  async function getUserApi() {
    const res = await axios.get("/users/1");
    const profile = res.data;
    setUserData({
      ...profile.data[0],
      email: profile.data[0].email,
      profileImageSource: profile.data[0].image_source,
    });
  }

  async function getUserFolderApi() {
    const res = await axios.get("/users/1/folders");
    const folder = res.data;
    setFolderData(folder);
    console.log(folder);
  }

  async function getUserLinkApi() {
    const res = await axios.get("/users/1/links");
    const link = res.data;
    setFolderList(link);
  }

  useEffect(() => {
    getUserApi();
    getUserFolderApi();
    getUserLinkApi();
  }, []);

  return (
    <>
      <Header profile={userData} />
      <AddLink />
      <Search />
      <FolderList lists={folderData} />
      <Card cardData={folderList} />
      <Footer />
    </>
  );
}

export default FolderPage;
