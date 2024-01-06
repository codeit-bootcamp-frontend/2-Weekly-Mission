import React from "react";
import Head from "next/head";
import AuthFooter from "@/components/AuthLayout/Footer";
import styled from "styled-components";
import AuthHeader from "@/components/AuthLayout/Header";
import AuthInput from "@/components/AuthLayout/AuthInput";
import Cta from "@/components/Common/Cta";
import { useRouter } from "next/router";

const SignInPage = () => {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>로그인</title>
      </Head>
      <Wrapper>
        <AuthHeader type="signIn" />
        <AuthSection>
          <AuthForm>
            <AuthInputs>
              <AuthInput label="이메일" type="email" />
              <AuthInput label="패스워드" type="password" />
            </AuthInputs>
            <Cta onClick={() => router.push("/folder")}>로그인</Cta>
          </AuthForm>
          <AuthFooter />
        </AuthSection>
      </Wrapper>
    </>
  );
};

export default SignInPage;

const Wrapper = styled.div`
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

const AuthSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 3.2rem;
  width: 100%;
  max-width: 40rem;

  @media (min-width: 768px) {
    width: 40rem;
  }
`;

const AuthForm = styled.form`
  display: flex;
  flex-direction: column;
  row-gap: 3rem;
  width: 100%;
`;

const AuthInputs = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 2.4rem;
`;
