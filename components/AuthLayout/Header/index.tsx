import React from "react";
import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

type AuthType = "signIn" | "signUp";

const rendingText: Record<AuthType, { message: string; linkText: string; href: string }> = {
  signIn: {
    message: "회원이 아니신가요?",
    linkText: "회원가입 하기",
    href: "signup",
  },
  signUp: {
    message: "이미 회원이신가요?",
    linkText: "로그인 하기",
    href: "signin",
  },
};
function AuthHeader({ type }: { type: AuthType }) {
  return (
    <Container>
      <LogoLink href="/">
        <Image src="/logo.svg" width={210} height={38} alt="홈으로 연결된 Linkbrary 로고" priority />
      </LogoLink>
      <HeaderMessage>
        {rendingText[type].message}
        <HeaderLink href={rendingText[type].href}>{rendingText[type].linkText}</HeaderLink>
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
