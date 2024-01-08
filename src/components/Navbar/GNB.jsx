import styled from "styled-components";

import Account from "./Account";
import Logo from "./Logo";
import SigninBtn from "./SigninBtn";

function GNB({ isSignin, userName, userProfileImgSrc }) {
  return (
    <Nav>
      <Container>
        <Logo />
        {isSignin ? (
          <Account userName={userName} userProfileImgSrc={userProfileImgSrc} />
        ) : (
          <SigninBtn />
        )}
      </Container>
    </Nav>
  );
}

const Nav = styled.nav`
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  width: 100%;
  background-color: #edf7ff;
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 6.3rem;
  padding: 0 3.2rem;

  @media (min-width: 768px) {
    height: 9.4rem;
    max-width: 86.3rem;
  }

  @media (min-width: 1200px) {
    height: 9.4rem;
    max-width: 192rem;
    padding: 0 20rem;
  }
`;

export default GNB;
