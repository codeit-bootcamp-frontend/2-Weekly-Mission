import "./ProfileSection.css";

function ProfileSection({ items, folder }) {
  // console.log(folder);
  return (
    <div className="body">
      <div className="profile">
        <img
          className="profilePicture"
          src={items.profileImageSource}
          alt={items.name}
        />
        <p className="profileName">@{items.name}</p>
        <p className="folderName">{folder.name}</p>
      </div>
    </div>
  );
}

export default ProfileSection;
