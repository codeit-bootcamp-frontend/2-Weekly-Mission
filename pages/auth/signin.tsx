import React from "react";
import Head from "next/head";
import { FormProvider, useForm } from "react-hook-form";
import AuthLayout from "@/layouts/auth";
import InputField from "@/components/common/InputField";

interface AuthForm {
  email: string;
  password: string;
}

const SignInPage = () => {
  const methods = useForm<AuthForm>();

  return (
    <FormProvider {...methods}>
      <Head>
        <title>로그인</title>
      </Head>
      <AuthLayout type="signIn">
        <InputField
          label="이메일"
          labelName="email"
          type="email"
          placeholder="이메일을 입력해주세요."
          validationRules={{
            required: "이메일을 입력해주세요.",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "유효한 이메일 주소를 입력해주세요.",
            },
          }}
        />
        <InputField
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
      </AuthLayout>
    </FormProvider>
  );
};

export default SignInPage;
