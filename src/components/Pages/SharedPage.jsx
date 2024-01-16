import { useEffect, useState } from "react";
import { GetSharedPageProfile, GetSharedPageFolder } from "../../api.js";
import NavSection from "../NavSection.js";
import ProfileSection from "../ProfileSection.js";
import FolderList from "../FolderList";
import "./SharedPage.css";

function SharedPage() {
  const [userProfile, setUserProfile] = useState({
    id: 0,
    name: "",
    email: "",
    profileImageSource: "",
  });

  const [folderProfile, setFolderProfile] = useState({
    id: 0,
    name: "",
    owner: {
      id: 0,
      name: "",
      profileImageSource: "",
    },
    links: [],
    count: 0,
  });

  const [isLoading, setIsloading] = useState(false);
  const [isError, setIsError] = useState(null);

  const handleLoad = async () => {
    try {
      setIsloading(true);
      setIsError(null);

      const user = await GetSharedPageProfile();
      setUserProfile(user);
      const { folder } = await GetSharedPageFolder();
      setFolderProfile(folder);
    } catch (error) {
      setIsError(error);
    } finally {
      setIsloading(false);
    }
  };

  useEffect(() => {
    handleLoad();
  }, []);

  return (
    <div className="body">
      {isLoading ? (
        <span className="loading">로딩중입니다.</span>
      ) : (
        <>
          <NavSection className="nav" value="shared" />
          <ProfileSection items={userProfile} folder={folderProfile} />
          <FolderList folder={folderProfile} />
          {isError?.message && <span className="error">{isError.message}</span>}
        </>
      )}
    </div>
  );
}

export default SharedPage;
