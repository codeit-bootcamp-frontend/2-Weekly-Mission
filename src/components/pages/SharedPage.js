import Header from "../header/Header.js";
import Footer from "../footer/Footer.js";
import { useEffect, useState } from "react";
import { getData } from "../api/api";
import MainHeader from "../main/MainHeader.js";
import SearchBar from "../main/SearchBar.js";
import CardWrapper from "../main/CardWrapper.js";
import "../main/Main.css";

function SharedPage() {
  const [profileDatas, setProfileDatas] = useState({
    id: 0,
    name: "",
    email: "",
    profileImageSource: "",
  });

  const [folderDatas, setFolderDatas] = useState({});
  const [ownerDatas, setOwnerDatas] = useState({});
  const [links, setLinks] = useState([]);

  const getSampleUserData = async () => {
    try {
      const response = await getData("sample/user");
      // console.log(response, "Header");
      const { id, name, email, profileImageSource } = response;
      setProfileDatas((prevProfileDatas) => ({
        ...prevProfileDatas,
        id: id,
        name: name,
        email: email,
        profileImageSource: profileImageSource,
      }));
    } catch (e) {
      console.log(e);
    }
  };
  const getLinks = async () => {
    try {
      const result = await getData("sample/folder");
      // console.log("Main", result);
      const linksData = result.folder.links;
      const foldersData = result.folder;
      const ownerData = result.folder.owner;

      setFolderDatas(foldersData);
      setLinks(linksData);
      setOwnerDatas(ownerData);
    } catch (e) {
      console.log(`getLinks에서 ${e} 오류`);
    }
  };

  useEffect(() => {
    getSampleUserData();
    getLinks();
  }, []);
  return (
    <>
      <Header profileDatas={profileDatas} />
      <MainHeader ownerDatas={ownerDatas} folderDatas={folderDatas} />
      <div className="main-wrapper">
        <SearchBar />
        <CardWrapper links={links} />
      </div>
      <Footer />
    </>
  );
}

export default SharedPage;
