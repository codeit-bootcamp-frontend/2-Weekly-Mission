import React from "react";
import styled from "styled-components";
import COLOR_TOKEN from "../../styles/colors";

function Sorting({ name = "전체", id, setter, isClicked }) {
  const handleClick = () => {
    setter(1, id, name, id);
  };
  return (
    <Wrapper isClicked={isClicked} id={id} onClick={handleClick}>
      {name}
    </Wrapper>
  );
}

const Wrapper = styled.button`
  display: flex;
  padding: 0.6rem 1rem;
  align-items: center;
  border-radius: 0.5rem;
  border: 1px solid ${COLOR_TOKEN.primary};
  background: ${({ isClicked, id }) =>
    isClicked === id ? COLOR_TOKEN.primary : COLOR_TOKEN.white};
  color: ${({ isClicked, id }) =>
    isClicked === id ? COLOR_TOKEN.white : COLOR_TOKEN.black};
  font-family: Pretendard;
  font-size: 1.4rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  &:hover,
  &:active {
    background: ${COLOR_TOKEN.primary};
    color: ${COLOR_TOKEN.white};
  }
`;

export default Sorting;
