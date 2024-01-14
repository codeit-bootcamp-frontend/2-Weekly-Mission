import Image from "next/image";
import Link from "next/link";
import React from "react";
import styled from "styled-components";

export default function Header() {
  return (
    <SignFormHeader>
      <Link href="/">
        <Image src="/png/logo.png" alt="logo" width={210} height={38} />
      </Link>
      <p>
        회원이 아니신가요? <Link href="/signup">회원 가입하기</Link>
      </p>
    </SignFormHeader>
  );
}

const SignFormHeader = styled.div`
  display: flex;
  text-align: center;
  flex-direction: column;
  gap: 1.6rem;

  & p {
    font-size: 16px;
    font-weight: 400;
  }

  & p > a {
    color: #6d6afe;
    font-weight: 600;
  }
`;
