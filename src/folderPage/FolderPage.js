import { useEffect, useState } from "react";
import { getFolderPageUsers } from "../Api";
import FolderNav from "./FolderNav";
import FolderHeader from "./FolderHeader";
import SearchBar from "../components/SearchBar";

//getFolderList, 쓸일 있으면 위로 올리기.

function FolderPage() {
  const [folderPageUsers, setFolderPageUsers] = useState(null);

  const fetchFolderUsers = async () => {
    try {
      const { data } = await getFolderPageUsers();
      setFolderPageUsers(data);
    } catch (error) {
      console.error("Error fetching folderData:", error);
    }
  };

  useEffect(() => {
    fetchFolderUsers();
  }, []);

  if (!folderPageUsers) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <FolderNav folderPageUsers={folderPageUsers} />
      <FolderHeader />
      <SearchBar />
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
