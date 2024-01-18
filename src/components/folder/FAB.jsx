import React from "react";
import styled from "styled-components";

import COLOR_TOKEN from "../../styles/colors";
import add from "../../images/FAB-add.svg";

function FAB() {
  return (
    <Button>
      <Div>
        <span>폴더 추가</span>
        <Img src={add} alt="폴더 추가 버튼" />
      </Div>
    </Button>
  );
}

const Button = styled.button`
  display: flex;
  padding: 0.8rem 2.4rem;
  align-items: flex-start;
  gap: 2rem;
  position: fixed;
  left: calc(50% - 6.9rem);
  bottom: 10.1rem;
  border-radius: 2rem;
  border: 1px solid ${COLOR_TOKEN.white};
  background: ${COLOR_TOKEN.primary};

  @media (min-width: 768px) {
    display: none;
  }
`;

const Div = styled.div`
  display: flex;
  align-items: center;
  gap: 0.4rem;
  color: ${COLOR_TOKEN.gray10};
  text-align: center;
  font-family: Abel;
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.03rem;
`;

const Img = styled.img`
  width: 1.6rem;
  height: 1.6rem;
`;

export default FAB;
