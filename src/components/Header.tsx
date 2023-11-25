import styled from 'styled-components';

const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.gray5};
`;

function Header() {
  return <Container>헤더</Container>;
}

export default Header;
