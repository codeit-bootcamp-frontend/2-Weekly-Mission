import '../styles/UserMain.css';

const UserMain = ({user}) => {
  return(
    <section className="main">
      <div className="main-content">
        <div className="user--container">
          <img src={user.profileImageSource} alt="프로필 이미지" className="main-profile-image"></img>
          <p className="main-profile-name">@{user.name}</p>
        </div>
        <h1 className="bookmark-title">⭐️ 즐겨찾기</h1>
      </div>
    </section>
  )
};

export default UserMain;
