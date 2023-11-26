import React from "react";

import "./FolderInfo.css";

function FolderInfo({ dataList }) {
  return (
    <>
      <div className="folder-info">
        <FolderProfile
          profileImageSource={dataList?.owner?.profileImageSource}
          profileName={dataList?.owner?.name}
        />
        <FolderTitle 
          folderName={dataList?.name}
        />
      </div>
    </>
  );
}

function FolderProfile({ profileImageSource, profileName }) {
  return (
    <div className="folder-info__profile">
      <img
        className="folder-info__profile-image"
        src={profileImageSource}
        alt={profileName}
      />
      <p className="folder-info__profile-name">
        {`@${profileName ?? ""}`}
      </p>
    </div>
  );
}

function FolderTitle({folderName}){
  return(
    <div className="folder-info__title">{folderName}</div>
  )
}
export default FolderInfo;
