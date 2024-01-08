import styled from "styled-components";

function Account({ userName, userProfileImgSrc }) {
  return (
    <Container>
      <Img src={userProfileImgSrc} alt="유저 프로필 이미지" />
      <Span>{userName}</Span>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 0.6rem;
  font-size: 1.4rem;
`;

const Img = styled.img`
  border-radius: 4.7rem;
  width: 2.8rem;
  height: 2.8rem;
`;

const Span = styled.span`
  display: none;
  color: var(--linkbrary-gray-100, #373740);

  @media (min-width: 768px) {
    display: block;
  }
`;

export default Account;
