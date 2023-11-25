import logoImg from "./imgs/logo.svg";
import profileImg from "./imgs/profile.svg";

export function Header() {
  return (
    <header>
      <div className="gnb">
        <div className="nav-waraper">
          <a href="/">
            <img className="logo" src={logoImg} alt="Linkbrary 로고" />
          </a>
          <a className="account-profile" href="/">
            <img className="profile-img" src={profileImg} alt="프로필이미지" />
            ??@??.com
          </a>
        </div>
      </div>
    </header>
  );
}
