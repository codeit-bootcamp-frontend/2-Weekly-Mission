import "./Style.css";

function Title({folderData}) {
  return (
    <div className="Title">
      {folderData && (
      <div>
        <img className="UserProfileImg" src={folderData.owner.profileImageSource} alt="프로필 이미지" />
        <p className="UserName">{folderData.owner.name}</p>
        <p className="BookMark">{folderData.name}</p>
      </div>
  )}
  </div>
  );
}

export default Title;