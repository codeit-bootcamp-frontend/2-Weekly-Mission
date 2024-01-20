import React, { ReactNode } from "react";
import { useRouter } from "next/router";
import { useFormContext } from "react-hook-form";
import { userServices } from "@/pages/api/address";
import AuthFooter from "../Footer";
import Cta from "@/components/common/Cta";
import { authMapping } from "@/lib/mapping/auth";
import * as S from "./styled";
import { AuthType } from "@/types/global.type";
import { instance } from "@/pages/api/instance";

interface AuthSectionProps {
  type: AuthType;
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
    try {
      const response = await instance.post(serviceTypeUrl, data);
      const {
        data: { accessToken },
      } = response.data;
      localStorage.setItem("accessToken", accessToken);
      router.push("/folder");
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
