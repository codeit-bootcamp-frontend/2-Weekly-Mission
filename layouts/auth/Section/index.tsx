import React, { ReactNode } from "react";
import { useRouter } from "next/router";
import { useFormContext } from "react-hook-form";
import { postAuth } from "@/lib/apis";
import { authMapping } from "@/lib/mapping/auth";
import AuthFooter from "../Footer";
import Cta from "@/components/common/Cta";
import * as S from "./styled";
import { AuthType } from "@/types/global.type";

interface AuthSectionProps {
  type: AuthType;
  children: ReactNode;
}

interface AuthForm {
  email: string;
  password: string;
}

function AuthSection({ type, children }: AuthSectionProps) {
  const router = useRouter();
  const { handleSubmit } = useFormContext<AuthForm>();

  const onSubmit = async (data: AuthForm) => {
    try {
      const response = await postAuth(type, data);
      if (response.ok) {
        router.push("/folder");
      }
    } catch (error) {
      console.error(error);
    }
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
