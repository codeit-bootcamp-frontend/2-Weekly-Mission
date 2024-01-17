import styled from "styled-components";
import Image from "next/image";

function AddLink() {
  return (
    <AddLinkContainer>
      <InputContainer>
        <AddLinkInput placeholder="링크를 추가해 보세요" />
        <ImgContainer>
          <Image fill src="/link.svg" alt="링크 아이콘" />
        </ImgContainer>
        <AddLinkButton>추가하기</AddLinkButton>
      </InputContainer>
    </AddLinkContainer>
  );
}

export default AddLink;

const AddLinkContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #edf7ff;
  height: 24.4rem;
  padding: 60px 320px 90px 320px;
`;

const InputContainer = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  gap: 0.8rem;
`;

const AddLinkInput = styled.input`
  width: 80rem;
  padding: 1.6rem 2rem 1.6rem 4rem;
  border-radius: 1.5rem;
  border: 0.1rem solid #6d6afe;
  background: #fff;

  &::placeholder {
    color: #9fa6b2;
    font-size: 1.6rem;
    font-style: normal;
    font-weight: 400;
    line-height: 2.4rem;
  }
`;

const ImgContainer = styled.div`
  position: absolute;
  width: 2rem;
  height: 2rem;
  left: 1.2rem;
`;

const AddLinkButton = styled.button`
  width: 9rem;
  padding: 1rem 1.6rem;
  border-radius: 0.8rem;
  color: #f5f5f5;
  font-size: 1.2rem;
  font-weight: 600;
  line-height: normal;
  border: none;
  background: linear-gradient(91deg, #6d6afe 0.12%, #6ae3fe 101.84%);
  position: absolute;
  right: 1rem;
`;
