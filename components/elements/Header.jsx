import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

function Header({ profile }) {
  return (
    <HeaderContainer>
      <NavBar>
        <Link href="/">
          <Image
            src="/logo.svg"
            alt="홈으로 연결된 Linkbrary 로고"
            width={133}
            height={24}
          />
        </Link>
        <div>
          {profile ? (
            <div>
              <Profile>
                <Image
                  src={profile.profileImageSource}
                  alt="프로필 이미지"
                  width={20}
                  height={20}
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
