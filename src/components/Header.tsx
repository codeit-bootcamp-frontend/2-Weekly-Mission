import styled from 'styled-components';
import GradationButton from './GradationButton';

const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.skyblue};
  position: sticky;
  top: 0;
`;

const Container = styled.div`
  max-width: 1520px;
  height: 54px;
  padding: 0 20rem;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.a`
  cursor: pointer;
  color: ${({ theme }) => theme.colors.primary};
  font-size: 2rem;
  font-weight: 900;
`;

function Header() {
  return (
    <Wrapper>
      <Container>
        <Logo href='/'>Linkbrary</Logo>
        <GradationButton width='12.8rem'>로그인</GradationButton>
      </Container>
    </Wrapper>
  );
}

export default Header;
