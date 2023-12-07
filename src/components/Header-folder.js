import logoImg from "../assets/logo.svg";
import "./Style.css";

function Header({profile}) {
  return (

    <header>
      <nav className="NavBar">
        <a href="/">
          <img src={logoImg} alt="홈으로 연결된 Linkbrary 로고" />
        </a>
        <div>
      {profile ? (
        <div>
          <p className="Profile"><img className="ProfileImg" src={profile.image_source} alt="프로필 이미지" />{profile.email}</p>
        </div>
      ) : (
        <a href="/">
          <span className="signin">로그인</span>
        </a>
      )}
    </div>
      </nav>
    </header>
  );
}

export default Header;