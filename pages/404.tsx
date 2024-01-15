import styled from "styled-components";

function NotFoundPage() {
  return (
    <Container>
      <H2>404 NOTFOUND ! </H2>
      <P>죄송합니다! 페이지를 찾을수 없습니다.</P>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  background: #1e1e1e;
`;
const H2 = styled.h2`
  color: #6d6afe;
  font-size: 10rem;
  font-weight: 600;
`;
const P = styled.p`
  font-size: 3rem;
  font-weight: 400;
  color: white;
`;

export default NotFoundPage;
