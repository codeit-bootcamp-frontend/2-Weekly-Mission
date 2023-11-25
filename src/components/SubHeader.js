import '../styles/SubHeader.css';

const SubHeader = ({owner, name}) => {
  return(
    <section className="main">
      <div className="main-content">
        <div className="user--container">
          <img src={owner.profileImageSource} alt="프로필 이미지" className="main-profile-image"></img>
          <p className="main-profile-name">@{owner.name}</p>
        </div>
        <h1 className="bookmark-title">{name}</h1>
      </div>
    </section>
  )
};

export default SubHeader;
