import logoImg from "../assets/logo.svg";
import "./Style.css";
import { useEffect, useState } from "react";
import { fetchProfile } from "../api";

function Header() {
  const [profile, setProfile] = useState(null);

  const getProfile = async () => {
    try {
      const response = await fetchProfile();
      setProfile(response.data);
    } catch (error) {
      console.error("프로필 데이터를 불러오는 중 에러 발생:", error);
    }
  };

  useEffect(() => {
    getProfile();
  }, []);

  return (
    <header>
      <nav className="NavBar">
        <a href="/">
          <img src={logoImg} alt="홈으로 연결된 Linkbrary 로고" />
        </a>
        <div>
          {profile ? (
            <div>
              <p className="Profile">
                <img
                  className="ProfileImg"
                  src={profile.profileImageSource}
                  alt="프로필 이미지"
                />
                {profile.email}
              </p>
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
