import { useEffect, useState } from "react";
import { CardList } from "../ui/CardList/CardList";
import { NavigationBar } from "../feature/NavigationBar/NavigationBar";
import axios from "axios";
import "./Folder.css";
import { AddBar } from "../ui/AddBar/AddBar";
import { Footer } from "../feature/Footer/Footer";
import { SearchBar } from "../ui/SearchBar/SearchBar";
import { CardTabTitleOptions } from "../ui/CardTabTitleOtions/CardTabTitleOtions";

const BASE_URL = "https://bootcamp-api.codeit.kr/api";

function Folder() {
  const [userInfo, setUserInfo] = useState([]);
  const [links, setLinks] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  // user 정보 가져오기
  async function fetchUser() {
    try {
      const response = await axios.get(`${BASE_URL}/users/1`);
      setUserInfo(response.data);
    } catch (error) {
      throw new Error("유저 정보를 불러오는데 실패하였습니다.");
    }
  }

  // folderLinks 전체 데이터 가져오기
  async function fetchFolderLinks() {
    try {
      const response = await axios.get(`${BASE_URL}/users/1/links`);
      setLoading(true);
      setError(null);
      setLinks(response.data);
    } catch (error) {
      throw new Error("폴더 링크를 불러오는데 실패하였습니다.");
      setLoading(false);
      setError(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchUser();
    fetchFolderLinks();
  }, []);

  return (
    <div className="Folder">
      <NavigationBar userInfo={userInfo} />
      <AddBar />
      <div className="Folder-content">
        <SearchBar />
        <CardTabTitleOptions links={links} />
        <CardList links={links} />
      </div>
      <Footer />
    </div>
  );
}

export default Folder;
