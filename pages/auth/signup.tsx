import React from "react";
import Head from "next/head";
import { FormProvider, useForm } from "react-hook-form";
import AuthLayout from "@/layouts/auth";
import InputField from "@/components/common/InputField";
import { userServices } from "@/pages/api/address";

interface AuthForm {
  email: string;
  password: string;
}

const SignUpPage = () => {
  const methods = useForm<AuthForm>();

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
      <AuthLayout type="signUp">
        <InputField
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
        <InputField
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
      </AuthLayout>
    </FormProvider>
  );
};

export default SignUpPage;
