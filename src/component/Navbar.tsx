import { Link } from "react-router-dom";
import styled from "styled-components";
import logoIcon from "../img/logo.png";
import { UserData } from "../utils/type";

interface Props {
  userData: UserData;
  location: {
    pathname: string;
  };
}

function Navbar({ userData, location }: Props) {
  const { email, image_source } = userData;

  const isSharedPath = location.pathname === "/shared";

  return (
    <>
      <StyledNavbarContainer $isActiveFixed={isSharedPath}>
        <StyledNavItem>
          <Link to="/">
            <StyledNavLogo src={logoIcon} alt="logo" />
          </Link>

          {userData?.id ? (
            <StyledNavProfile>
              <StyledNavProfileImg src={image_source} alt="profile-img" />
              <StyledNavProfileEmail>{email}</StyledNavProfileEmail>
            </StyledNavProfile>
          ) : (
            <StyledNavLoginBtn>로그인</StyledNavLoginBtn>
          )}
        </StyledNavItem>
      </StyledNavbarContainer>
    </>
  );
}

const StyledNavbarContainer = styled.nav<{ $isActiveFixed: boolean }>`
  background-color: #f0f6ff;
  margin: 0 auto;
  position: ${({ $isActiveFixed }) => ($isActiveFixed ? "fixed" : "static")};
  width: 100%;
  top: 0;
  left: 50%;
  transform: ${({ $isActiveFixed }) => ($isActiveFixed ? "translate(-50%, 0);" : "none")};
  z-index: 99;
`;

const StyledNavItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1920px;
  margin: 0 auto;
  padding: 3.2rem 20rem;

  @media all and (min-width: 768px) and (max-width: 1124px) {
    max-width: 710px;
    padding: 3.2rem 3.2rem;
  }

  @media all and (max-width: 768px) {
    padding: 1.8rem 3.2rem;
  }
`;

const StyledNavLogo = styled.img`
  width: 13rem;
`;

const StyledNavProfile = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
`;

const StyledNavProfileImg = styled.img`
  width: 2.8rem;
  border-radius: 50%;
`;

const StyledNavProfileEmail = styled.p`
  font-size: 14px;
`;

const StyledNavLoginBtn = styled.button`
  border-radius: 8px;
  background: linear-gradient(91deg, #6d6afe 0.12%, #6ae3fe 101.84%);
  border: none;
  color: white;
  padding: 1.6rem 2rem;
  width: 12.8rem;
  font-size: 1.8rem;
  font-weight: 600;
  cursor: pointer;
`;

export default Navbar;
