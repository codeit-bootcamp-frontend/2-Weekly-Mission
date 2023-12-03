import logoImg from "../images/logo.svg";

function NavBar({ userInfo }) {
  return (
    <nav>
      <img src={logoImg} alt="logo" />
      <div>
        <img src={userInfo.profileImageSource} alt="사용자의 프로필 이미지" />
        <span>{userInfo.email}</span>
      </div>
    </nav>
  );
}

export default NavBar;
