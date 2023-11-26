import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";

import ENDPOINTS from "../../config/api";

import CardFactory from "../commons/CardFactory";
import FolderInfo from "./FolderInfo";
import SearchBar from "../commons/SearchBar";
import TableLayout from "../layouts/TableLayout";

const root = ReactDOM.createRoot(document.getElementById("main-root"));
root.render(<SharedMainScreen />);

function SharedMainScreen() {
  const [folderData, setFolderData] = useState({});
  const [linkData, setLinkData] = useState([]);

  useEffect(() => {
    fetch(ENDPOINTS.SAMPLE.FOLDER)
      .then((response) => response.json())
      .then((result) => {
        return result.folder;
      })
      .then((folder) => {
        setFolderData({
          id: folder.id,
          name: folder.name,
          owner: folder.owner,
        });
        return folder.links;
      })
      .then((links) => {
        setLinkData(links);
      })
      .catch((error) => {
        console.error(`데이터 가져오는 중 오류 발생\n${error}`);
      });
  }, []);

  return (
    <>
      <FolderInfo dataList={folderData}/>
      <SearchBar />
      <TableLayout classNameList={[`table-layout_card`]}>
        <CardFactory dataList={linkData} />
      </TableLayout>
    </>
  );
}
