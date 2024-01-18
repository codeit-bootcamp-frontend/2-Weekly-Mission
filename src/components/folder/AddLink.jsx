import React from "react";
import styled from "styled-components";

import COLOR_TOKEN from "../../styles/colors";
import link from "../../images/link.svg";
import AddLinkBtn from "./AddLinkBtn";

function AddLink() {
  return (
    <Wrapper>
      <Container>
        <LinkInputContainer>
          <LinkIcon src={link} alt="링크 추가 아이콘" />
          <Input placeholder="링크를 추가해 보세요." />
        </LinkInputContainer>
        <AddLinkBtn />
      </Container>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  max-width: 80rem;
  padding: 0.8rem 1rem;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.8rem;
  border-radius: 1.5rem;
  border: 1px solid ${COLOR_TOKEN.primary};
  background: ${COLOR_TOKEN.white};

  @media (min-width: 768px) {
    padding: 1.6rem 2rem;
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
`;

const LinkInputContainer = styled.div`
  display: flex;
  flex-grow: 1;
  align-items: center;
  gap: 1.2rem;
`;

const LinkIcon = styled.img`
  width: 1.6rem;
  height: 1.6rem;
`;

const Input = styled.input`
  color: ${COLOR_TOKEN.gray60};
  border: none;
  font-family: Pretendard;
  font-size: 1.4rem;
  font-style: normal;
  font-weight: 400;

  @media (min-width: 768px) {
    font-size: 1.6rem;
    line-height: 2.4rem; /* 150% */
  }
`;

export default AddLink;
