import { useEffect, useState } from "react";

/* 이 컴포넌트에서 가져와야 하는 데이터:
1. 프로필 사진
2. 폴더 이름 */

function FolderHero() {
  const [profileImgUrl, setProfileImgUrl] = useState();
  const [folderName, setFolderName] = useState();

  useEffect(() => {
    fetch("https://bootcamp-api.codeit.kr/api/sample/folder")
      .then((response) => response.json())
      .then((result) => {
        setProfileImgUrl(result.folder.owner.profileImageSource);
        setFolderName(result.folder.name);
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
