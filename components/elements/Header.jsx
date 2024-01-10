import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

function Header({ profile }) {
  return (
    <HeaderContainer>
      <NavBar>
        <Link href="/">
          <ImgContainer>
            <Image fill src="/logo.svg" alt="홈으로 연결된 Linkbrary 로고" />
          </ImgContainer>
        </Link>
        <div>
          {profile ? (
            <div>
              <Profile>
                <ProfileImg
                  src={profile.profileImageSource}
                  alt="프로필 이미지"
                />
                {profile.email}
              </Profile>
            </div>
          ) : (
            <Link href="/">
              <span>로그인</span>
            </Link>
          )}
        </div>
      </NavBar>
    </HeaderContainer>
  );
}

export default Header;

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background-color: #edf7ff;
`;

const NavBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 20rem;
  width: 100%;
  background-color: #edf7ff;
`;

const Profile = styled.p`
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.3rem;
`;

const ProfileImg = styled.img`
  width: 2rem;
  height: 2rem;
  border-radius: 1rem;
`;

const ImgContainer = styled.div`
  position: relative;
  width: 13.3rem;
  height: 2.4rem;
`;
