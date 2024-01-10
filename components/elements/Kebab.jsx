import styled from "styled-components";

function Kebab() {
  return (
    <>
      <KebabModalContainer>
        <KebabModal>삭제하기</KebabModal>
        <KebabModal>폴더에 추가</KebabModal>
      </KebabModalContainer>
    </>
  );
}

export default Kebab;

const KebabModalContainer = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  right: 4rem;
  bottom: 9rem;
`;

const KebabModal = styled.button`
  padding: 1rem;
  background: #fff;
  border-radius: 0.3rem;
  box-shadow: 0 0.2rem 0.8rem 0 rgba(51, 50, 54, 0.1);

  &:hover {
    background: #e7effb;
    color: #6d6afe;
  }
`;