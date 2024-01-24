import Head from "next/head";
import { SignLayout } from "@/src/page-layout/SigninLayout";
import { ROUTE } from "@/src/sharing/util";

const SignInPage = () => {
  return (
    <SignLayout
      header={
        <Head
          message="회원이 아니신가요?"
          link={{ text: "회원 가입하기", href: ROUTE.회원가입 }}
        />
      }
      form={<SignInForm />}
      oauth={<Oauth description="소셜 로그인" />}
    />
  );
};

export default SignInPage;
