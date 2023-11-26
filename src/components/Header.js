function ProfileOrSignIn({ userInfo }) {
  if (!userInfo) {
    return (
      <a className="login-box" href="/signin">
        로그인
      </a>
    );
  }

  return (
    <a className="account-profile" href="/">
      <img className="profile-img" src="./imgs/profile.svg" alt="프로필이미지" />
      {`${userInfo.email}`}
    </a>
  );
}

export function Header({ userInfo }) {
  return (
    <header>
      <div className="gnb">
        <div className="nav-waraper">
          <a href="/">
            <img className="logo" src="./imgs/logo.svg" alt="Linkbrary 로고" />
          </a>
          <ProfileOrSignIn userInfo={userInfo} />
        </div>
      </div>
    </header>
  );
}
