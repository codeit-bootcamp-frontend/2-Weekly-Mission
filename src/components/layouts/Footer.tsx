import styled from 'styled-components';

const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.black};
  width: 100%;
  height: 160px;
`;

const Wrapper = styled.div`
  width: 100%;
  max-width: 1650px;
  font-family: 'Abel';
  font-size: 1.6rem;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.gray100};
  /* padding: 3.2rem 10.4rem 0; */
  padding-top: 3.2rem;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const CopyRight = styled.div``;

const NavLinks = styled.div``;

const NavLink = styled.a`
  cursor: pointer;

  & + & {
    margin-left: 3rem;
  }
`;

const SNS = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SNSLogoWrapper = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 2rem;
  cursor: pointer;

  & + & {
    margin-left: 1rem;
  }
`;

function Footer() {
  return (
    <Container>
      <Wrapper>
        <CopyRight>©codeit - 2023</CopyRight>
        <NavLinks>
          <NavLink>Privacy Policy</NavLink>
          <NavLink>FAQ</NavLink>
        </NavLinks>
        <SNS>
          <SNSLogoWrapper href='https://www.facebook.com/' target='_blank'>
            <img src='/images/facebook-icon.png' alt='facebook-icon' />
          </SNSLogoWrapper>
          <SNSLogoWrapper href='https://www.twitter.com/' target='_blank'>
            <img src='/images/twitter-icon.png' alt='twitter-icon' />
          </SNSLogoWrapper>
          <SNSLogoWrapper href='https://www.youtube.com/' target='_blank'>
            <img src='/images/youtube-icon.png' alt='youtube-icon' />
          </SNSLogoWrapper>
          <SNSLogoWrapper href='https://www.instagram.com/' target='_blank'>
            <img src='/images/instagram-icon.png' alt='instagram-icon' />
          </SNSLogoWrapper>
        </SNS>
      </Wrapper>
    </Container>
  );
}

export default Footer;
