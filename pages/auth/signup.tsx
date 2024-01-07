import React from "react";
import Head from "next/head";
import styled from "styled-components";
import AuthFooter from "@/components/AuthLayout/Footer";
import AuthHeader from "@/components/AuthLayout/Header";
import AuthInput from "@/components/AuthLayout/AuthInput";
import Cta from "@/components/Common/Cta";
import { useRouter } from "next/router";

const SignUpPage = () => {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>회원 가입</title>
      </Head>
      <Wrapper>
        <AuthHeader type="signUp" />
        <AuthSection>
          <AuthForm>
            <AuthInputs>
              {/**다음 주차에 React-hook-form으로 교체 예정이기 떄문에 기능 테스트 용으로 에러를 반환함. */}
              <AuthInput
                label="이메일"
                type="email"
                onValid={() => true}
                placeholder="이메일을 입력해주세요."
                errorMessage="이메일 형식이 아닙니다."
              />
              <AuthInput
                label="패스워드"
                type="password"
                placeholder="비밀번호를 입력해주세요."
                errorMessage="비밀번호가 올바르지 않습니다."
              />
              <AuthInput
                label="패스워드 확인"
                type="password"
                placeholder="비밀번호를 입력해주세요."
                errorMessage="비밀번호가 동일하지 않습니다."
              />
            </AuthInputs>
            <Cta onClick={() => router.push("signin")}>회원가입</Cta>
          </AuthForm>
          <AuthFooter />
        </AuthSection>
      </Wrapper>
    </>
  );
};

export default SignUpPage;

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
