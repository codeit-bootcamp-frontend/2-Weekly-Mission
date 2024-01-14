import React from "react";
import styled from "styled-components";

export default function MainContainer({ children }) {
  return (
    <Background>
      <Container>{children}</Container>
    </Background>
  );
}

const Background = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  height: 100vh;
  background-color: #f0f6ff;
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 3.2rem;
`;
