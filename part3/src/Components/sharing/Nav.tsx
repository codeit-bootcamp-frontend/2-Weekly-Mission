import React from 'react';
import logoImg from '../../img/logo.svg';
import '../../css/Nav.css';

const handleLoginClick = () => location.assign('signin.html');

interface Prop {
  userData: { email?: string; profileImageSource?: string };
}

const User = ({ userData }: Prop) => {
  return (
    <article className="profile">
      <img
        className="profileImg"
        src={userData.profileImageSource}
        alt="프로필 이미지"
      />
      <p>{userData.email}</p>
    </article>
  );
};

export default function Nav({ userData }: Prop) {
  return (
    <nav>
      <div className="nav-bar">
        <a id="logo" href="/">
          <img src={logoImg} alt="LinkBrary logo" />
        </a>
        {userData ? (
          <User userData={userData} />
        ) : (
          <button onClick={handleLoginClick} className="use_site" id="signin">
            로그인
          </button>
        )}
      </div>
    </nav>
  );
}
