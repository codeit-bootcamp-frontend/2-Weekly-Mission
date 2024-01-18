import React, { ReactNode } from "react";

import AuthSection from "./Section";
import AuthHeader from "./Header";

import * as S from "./styled";

interface AuthLayoutProps {
  buttonText: string;
  type: "signIn" | "signUp";
  children: ReactNode;
}

function AuthLayout({ buttonText, type, children }: AuthLayoutProps) {
  return (
    <S.Article>
      <AuthHeader type={type} />
      <AuthSection buttonText={buttonText} type={type}>
        {children}
      </AuthSection>
    </S.Article>
  );
}

export default AuthLayout;
