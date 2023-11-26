import "./header.css";
import { getFolderName, getFolderUserName, getFolderUserImg } from "../../api";
import { useState } from "react";

function HeaderDetail() {
  const [src, setSrc] = useState("");
  const [userName, setUserName] = useState("");
  const [folderName, setFolderName] = useState("");

  getFolderName().then((response) => {
    setFolderName(response);
  });

  getFolderUserImg().then((response) => {
    setSrc(response);
  });

  getFolderUserName().then((response) => {
    setUserName(response);
  });

  const alt = "사용자 프로필 이미지";
  return (
    <div className="icon-favoritGrid  frame">
      <div className="icon-nickGrid">
        <div className="header-icon">
          <img className="icon" src={src} alt={alt} />
        </div>
        <p className="header-nickname">{userName}</p>
      </div>
      <p className="folderName">{folderName}</p>
    </div>
  );
}

export default HeaderDetail;
