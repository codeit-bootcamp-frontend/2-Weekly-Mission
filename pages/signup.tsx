import React from "react";
import styled from "styled-components";
import Header from "../components/domains/auth/signup/Header";
import Form from "../components/domains/auth/signup/Form";

const SignUpPage = () => {
  return (
    <SignUpPageLayout>
      <SignUpPageBox>
        <Header />
        <Form />
      </SignUpPageBox>
    </SignUpPageLayout>
  );
};

const SignUpPageLayout = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: var(--gray-bg-color);
  display: flex;
  justify-content: center;
  align-items: center;
`;
const SignUpPageBox = styled.div`
  width: 40rem;
`;

export default SignUpPage;
