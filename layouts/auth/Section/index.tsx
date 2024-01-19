import React, { ReactNode } from "react";
import { useRouter } from "next/router";
import { useFormContext } from "react-hook-form";
import { userServices } from "@/pages/api/address";
import AuthFooter from "../Footer";
import Cta from "@/components/common/Cta";
import { authMapping } from "@/lib/mapping/auth";
import * as S from "./styled";

interface AuthSectionProps {
  type: "signIn" | "signUp";
  children: ReactNode;
}

interface AuthForm {
  email: string;
  password: string;
}

interface Response {
  data: {
    accessToken: string;
  };
}

function AuthSection({ type, children }: AuthSectionProps) {
  const router = useRouter();
  const { handleSubmit } = useFormContext<AuthForm>();

  const serviceTypeUrl = userServices[type];

  const onSubmit = async (data: AuthForm) => {
    await fetch(serviceTypeUrl, {
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

  return (
    <S.Section>
      <S.AuthForm onSubmit={handleSubmit(onSubmit)} noValidate>
        <S.TextFieldContainer>{children}</S.TextFieldContainer>
        <Cta type="submit">{authMapping[type].button}</Cta>
      </S.AuthForm>
      <AuthFooter />
    </S.Section>
  );
}

export default AuthSection;
