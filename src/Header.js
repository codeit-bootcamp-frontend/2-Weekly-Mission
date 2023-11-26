import React from "react";
import "./style.css";
import logoImg from "./img/logo.svg";
import profileImg from "./img/profile_img.png";
import codeitImg from "./img/Union.png";

function Header() {
  return (
    <div className="header">
      <div className="nav">
        <img src={logoImg} alt="Logo" />
        <div className="profile">
          <img src={profileImg} alt="프로필 이미지" />
          <span>Codeit@codeit.com</span>
        </div>
      </div>

      <div className="innerHeader">
        <img className="codeitLogo" src={codeitImg} alt="코드잇 로고 이미지" />
        <span>@코드잇</span>
        <h1>⭐ 즐겨찾기</h1>
      </div>
    </div>
  );
}

export default Header;
