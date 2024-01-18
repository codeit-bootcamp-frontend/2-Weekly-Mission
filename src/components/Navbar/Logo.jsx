import React from "react";
import styled from "styled-components";

import logo from "../../images/logo.svg";

function Logo() {
  return (
    <a href="/">
      <Img src={logo} alt="홈으로 연결된 Linkbrary 로고" />
    </a>
  );
}

const Img = styled.img`
  height: 1.6rem;

  @media (min-width: 768px) {
    height: 2.4rem;
  }
`;

export default Logo;
