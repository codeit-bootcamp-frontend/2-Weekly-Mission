import { getFolder } from "../Api";
import { getProfile } from "../Api";
import React, { useState, useEffect } from "react";
import Main from "./Main";
import SearchBar from "./SearchBar";
import { Footer } from "../footer/footer";
import Nav from "./Nav";
import Header from "./Header";

function App() {
  const [userType, setUserType] = useState(null);
  const [userFolderType, setUserFolderType] = useState(null);

  const [links, setLinks] = useState([]);

  const fetchData = async () => {
    try {
      const data = await getProfile();
      setUserType(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const fetchFolder = async () => {
    try {
      const { folder } = await getFolder();
      setUserFolderType(folder);
      setLinks(folder.links);
    } catch (error) {
      console.error("Error fetching data2:", error);
    }
  };

  useEffect(() => {
    fetchFolder();
    fetchData();
  }, []);

  if (!userType) {
    return <div>Loading...</div>;
  }

  if (!userFolderType) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Nav userType={userType} />
      <Header userFolderType={userFolderType} />
      <div className="Main">
        <SearchBar />
        <ul className="cardList">
          <Main links={links} />
        </ul>
      </div>
      <Footer />
    </>
  );
}

export default App;
