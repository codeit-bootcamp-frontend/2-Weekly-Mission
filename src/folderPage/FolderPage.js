import { useEffect, useState } from "react";
import {
  getFolderList,
  getFolderListAllMenu,
  getFolderPageUsers,
} from "../Api";
import FolderNav from "./FolderNav";
import FolderHeader from "./FolderHeader";
import SearchBar from "../components/SearchBar";
import FolderList from "./FolderList/FolderListMenu";
import { Footer } from "../footer/footer";
import FolderAll from "./FolderList/FolderListChange/FolderAll";
import { Ul } from "./FolderList/FolderListChange/FolderAllCss";
// import { styled } from "styled-components";

//getFolderList, 쓸일 있으면 위로 올리기.

// const Main = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: flex-start;
//   gap: 40px;
// `;

function FolderPage() {
  const [folderPageUsers, setFolderPageUsers] = useState(null);
  const [useFolderList, setUseFolderList] = useState(null);
  const [folderMenu, setFolderMenu] = useState(null);

  const fetchFolderUsers = async () => {
    try {
      const { data } = await getFolderPageUsers();
      setFolderPageUsers(data);
    } catch (error) {
      console.error("Error fetching fetchFolderUsers:", error);
    }
  };

  const fetchFolderList = async () => {
    try {
      const { data } = await getFolderList();
      setUseFolderList(data);
    } catch (error) {
      console.error("Error fetching fetchFolderList:", error);
    }
  };

  const folderListAllMenu = async () => {
    try {
      const { data } = await getFolderListAllMenu();
      setFolderMenu(data);
    } catch (error) {
      console.error("Error fetching FolderListAllMenu:", error);
    }
  };

  useEffect(() => {
    fetchFolderUsers();
    fetchFolderList();
    folderListAllMenu();
  }, []);

  if (!folderPageUsers) {
    return <div>Loading...</div>;
  }

  if (!useFolderList) {
    return <div>기다려봐 데이터 받는중...</div>;
  }

  if (!folderMenu) {
    return <div>이거 뜨면 AllMenu fetch 안 받아와지는것</div>;
  }

  return (
    <>
      <FolderNav folderPageUsers={folderPageUsers} />
      <FolderHeader />
      <SearchBar />
      <FolderList useFolderList={useFolderList} />
      <Ul>
        <FolderAll folderMenu={folderMenu} />
      </Ul>
      <Footer />
    </>
  );
}

export default FolderPage;

//얘네는 확인해보고 컴포넌트 하나 더 만들고 넣기.
// const [useFolderList, setUseFolderList] = useState([]);

// const fetchFolderList = async () => {
//   try {
//     const { data } = await getFolderList();
//     setUseFolderList(data);
//   } catch (error) {
//     console.error("Error fetching data3:", error);
//   }
// };
