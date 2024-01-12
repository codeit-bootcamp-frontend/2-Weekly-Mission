import React from "react";
import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import { authMapping } from "@/lib/mapping/auth";

interface AuthHeader {
  type: "signIn" | "signUp";
}

function AuthHeader({ type }: AuthHeader) {
  return (
    <Container>
      <LogoLink href="/">
        <Image src="/logo.svg" width={210} height={38} alt="홈으로 연결된 Linkbrary 로고" priority />
      </LogoLink>
      <HeaderMessage>
        {authMapping[type].message}
        <HeaderLink href={authMapping[type].href}>{authMapping[type].linkText}</HeaderLink>
      </HeaderMessage>
    </Container>
  );
}

export default AuthHeader;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 1.6rem;
`;

const LogoLink = styled(Link)`
  display: flex;
  justify-content: center;
`;

const HeaderMessage = styled.p`
  display: flex;
  column-gap: 0.8rem;
  font-size: 1.6rem;
  font-weight: 400;
  line-height: 150%;
`;

const HeaderLink = styled(Link)`
  height: fit-content;
  font-size: 1.6rem;
  font-weight: 600;
  line-height: normal;
  color: ${({ theme }) => theme.primary};
  border-bottom: 0.1rem solid ${({ theme }) => theme.primary};
`;
