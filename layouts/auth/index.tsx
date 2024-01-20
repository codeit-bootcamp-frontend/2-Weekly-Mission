import React, { ReactNode } from "react";
import AuthSection from "./Section";
import AuthHeader from "./Header";
import * as S from "./styled";
import { AuthType } from "@/types/global.type";

interface AuthLayoutProps {
  type: AuthType;
  children: ReactNode;
}

function AuthLayout({ type, children }: AuthLayoutProps) {
  return (
    <S.Article>
      <AuthHeader type={type} />
      <AuthSection type={type}>{children}</AuthSection>
    </S.Article>
  );
}

export default AuthLayout;
