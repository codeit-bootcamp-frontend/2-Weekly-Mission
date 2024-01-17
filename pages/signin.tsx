import React, { useEffect } from "react";
import styled from "styled-components";
import Header from "../components/domains/auth/Header";
import Form from "../components/domains/auth/SigninForm";

import Link from "next/link";

const SignInPage = () => {
  return (
    <SignInPageLayout>
      <SignInPageBox>
        <Header>
          <div>
            회원이 아니신가요?
            <Link href={"/signup"}>회원가입 하기</Link>
          </div>
        </Header>
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
