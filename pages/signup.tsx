import React from "react";
import styled from "styled-components";
import Header from "../components/domains/auth/Header";
import Form from "../components/domains/auth/SignupForm";
import Link from "next/link";

const SignUpPage = () => {
  return (
    <SignUpPageLayout>
      <SignUpPageBox>
        <Header>
          <div>
            이미 회원이신가요?
            <Link href={"/signin"}>로그인 하기</Link>
          </div>
        </Header>
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
