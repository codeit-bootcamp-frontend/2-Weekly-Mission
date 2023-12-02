import { useEffect, useState } from "react";
import { getFolder } from "../api";

/* 이 컴포넌트에서 가져와야 하는 데이터:
1. 프로필 사진
2. 폴더 이름 */

function FolderHero() {
  const [profileImgUrl, setProfileImgUrl] = useState();
  const [folderName, setFolderName] = useState();

  useEffect(() => {
    getFolder().then((folder) => {
      setProfileImgUrl(folder.owner.profileImageSource);
      setFolderName(folder.name);
    });
  });

  return (
    <>
      <img src={profileImgUrl} alt="codeit profile" />
      <div>@코드잇</div>
      <div>{folderName}</div>
    </>
  );
}

export default FolderHero;
