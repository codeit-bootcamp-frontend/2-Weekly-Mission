import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { FormProvider, useForm } from "react-hook-form";
import styled from "styled-components";
import { userServices } from "../api/address";
import Cta from "@/components/Common/Cta";
import AuthHeader from "@/components/AuthLayout/Header";
import AuthInput from "@/components/AuthLayout/AuthInput";
import AuthFooter from "@/components/AuthLayout/Footer";

interface AuthForm {
  email: string;
  password: string;
}

interface Response {
  data: {
    accessToken: string;
  };
}

const SignUpPage = () => {
  const router = useRouter();
  const methods = useForm<AuthForm>();

  const onSubmit = async (data: AuthForm) => {
    await fetch(userServices.signUp, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...data }),
    })
      .then((res) => res.json())
      .then((response: Response) => {
        const { accessToken } = response.data;
        localStorage.setItem("accessToken", accessToken);
      })
      .then(() => router.push("/folder"))
      .catch((e) => console.error(e));
  };

  const checkedEmail = async (email: string) => {
    const response = await fetch(userServices.checkedEmail, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    });
    if (response?.status === 409) {
      return "이미 사용중인 이메일입니다.";
    }
    return true;
  };

  return (
    <FormProvider {...methods}>
      <Head>
        <title>회원 가입</title>
      </Head>
      <Article>
        <AuthHeader type="signUp" />
        <AuthSection>
          <AuthForm onSubmit={methods.handleSubmit(onSubmit)} noValidate>
            <AuthInputs>
              <AuthInput
                label="이메일"
                labelName="email"
                type="email"
                placeholder="이메일을 입력해주세요."
                validationRules={{
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "유효한 이메일 주소를 입력해주세요.",
                  },
                  required: "이메일을 입력해주세요.",
                  validate: {
                    emailAvailable: () => {
                      const { email } = methods.getValues();
                      return checkedEmail(email);
                    },
                  },
                }}
              />
              <AuthInput
                label="패스워드"
                labelName="password"
                type="password"
                placeholder="비밀번호를 입력해주세요."
                validationRules={{
                  required: "비밀번호를 입력해주세요.",
                  minLength: {
                    value: 8,
                    message: "최소 8자 이상이어야 합니다.",
                  },
                }}
              />
              <AuthInput
                label="패스워드 확인"
                labelName="confirm-password"
                type="password"
                placeholder="비밀번호와 일치하는 값을 입력해 주세요"
                validationRules={{
                  required: "비밀번호를 입력해주세요.",
                  validate: {
                    notMatch: (value) => {
                      const { password } = methods.getValues();
                      return password === value || "비밀번호가 일치하지 않습니다.";
                    },
                  },
                }}
              />
            </AuthInputs>
            <Cta type="submit">회원가입</Cta>
          </AuthForm>
          <AuthFooter />
        </AuthSection>
      </Article>
    </FormProvider>
  );
};

export default SignUpPage;

const Article = styled.article`
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
