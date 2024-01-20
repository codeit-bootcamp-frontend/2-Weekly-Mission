import React from "react";
import Image from "next/image";
import { authMapping } from "@/lib/mapping/auth";
import * as S from "./styled";
import { AuthType } from "@/types/global.type";

interface AuthHeaderTypes {
  type: AuthType;
}

function AuthHeader({ type }: AuthHeaderTypes) {
  return (
    <S.Header>
      <S.LogoLink href="/">
        <Image src="/logo.svg" width={210} height={38} alt="홈으로 연결된 Linkbrary 로고" priority />
      </S.LogoLink>
      <S.Message>
        {authMapping[type].message}
        <S.SLink href={authMapping[type].href}>{authMapping[type].linkText}</S.SLink>
      </S.Message>
    </S.Header>
  );
}

export default AuthHeader;
