import styled from 'styled-components';
import GradationButton from '../molecules/GradationButton';
import { HeaderProps } from '../../utils/interfaces';

const Container = styled.div`
  width: 100%;
  height: 93px;
  margin: auto;
  background-color: ${({ theme }) => theme.colors.skyblue};
  position: relative;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 80%;
  max-width: 1520px;
  height: 54px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.a`
  cursor: pointer;
  color: ${({ theme }) => theme.colors.primary};
  font-size: 2.4rem;
  font-weight: 900;
`;

const UserInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ImgWrapper = styled.div`
  width: 2.8rem;
  height: 2.8rem;
  border-radius: 70%;
  overflow: hidden;
`;

const UserProfileImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const UserEmail = styled.div`
  cursor: pointer;
  margin-left: 1rem;
`;

function Header({ email, profileImageSource }: HeaderProps) {
  return (
    <Container>
      <Wrapper>
        <Logo href='/'>Linkbrary</Logo>
        {email ? (
          <UserInfo>
            <ImgWrapper>
              <UserProfileImg src={profileImageSource} alt='profile-img' />
            </ImgWrapper>
            <UserEmail>{email}</UserEmail>
          </UserInfo>
        ) : (
          <GradationButton width='12.8rem'>로그인</GradationButton>
        )}
      </Wrapper>
    </Container>
  );
}

export default Header;
