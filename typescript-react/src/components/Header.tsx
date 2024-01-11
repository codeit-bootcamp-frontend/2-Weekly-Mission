import { useState, useEffect } from "react";
import { SHARED_PAGE_API_URL } from "../constants/constant";
import "../style/Header.css";

interface OwnerData {
  id: number;
  name: string;
  profileImageSource: string;
}

interface FolderData {
  folder: {
    id: number;
    name: string;
    owner: OwnerData;
  };
}

function Header() {
  const [folderData, setFolderData] = useState<FolderData | null>(null);

  async function getUserFolderData() {
    try {
      const response = await fetch(`${SHARED_PAGE_API_URL}/folder`);
      const userFolderData: FolderData = await response.json();
      setFolderData(userFolderData);
    } catch (error) {
      throw new Error("폴더 정보를 가져오는데 실패했습니다.");
    }
  }

  useEffect(() => {
    getUserFolderData();
  }, []);

  return (
    <div className="header-section">
      <div className="hearder-user-section">
        <img
          className="user-folder-img"
          src={folderData?.folder?.owner?.profileImageSource}
          alt="폴더 프로필"
        />
        <span className="user-folder-owner">
          {folderData?.folder?.owner?.name}
        </span>
      </div>
      <div>
        <span className="user-folder-name">{folderData?.folder?.name}</span>
      </div>
    </div>
  );
}

export default Header;
