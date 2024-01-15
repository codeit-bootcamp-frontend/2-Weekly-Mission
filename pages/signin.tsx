import React from "react";
import styled from "styled-components";
import Header from "../components/domains/auth/signin/Header";
import Form from "../components/domains/auth/signin/Form";

const SignInPage = () => {
  return (
    <SignInPageLayout>
      <SignInPageBox>
        <Header />
        <Form />
      </SignInPageBox>
    </SignInPageLayout>
  );
};

const SignInPageLayout = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: var(--gray-bg-color);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SignInPageBox = styled.div`
  width: 40rem;
`;

export default SignInPage;
