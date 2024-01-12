import React, { ReactNode } from "react";
import styled from "styled-components";
import AuthSection from "./Section";
import AuthHeader from "./Header";

interface AuthLayoutProps {
  buttonText: string;
  type: "signIn" | "signUp";
  children: ReactNode;
}

function AuthLayout({ buttonText, type, children }: AuthLayoutProps) {
  return (
    <Article>
      <AuthHeader type={type} />
      <AuthSection buttonText={buttonText}>{children}</AuthSection>
    </Article>
  );
}

export default AuthLayout;

const Article = styled.article`
  background-color: #f0f6ff;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 3rem;
  padding: 12rem 3.2rem 0;

  @media (min-width: 768px) {
    padding: 20rem 0 0;
  }

  @media (min-width: 1200px) {
    padding: 23.8rem 0 0;
  }
`;
