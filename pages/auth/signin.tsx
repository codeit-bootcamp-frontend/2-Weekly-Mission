import React from "react";
import AuthLogo from "@/components/domains/auth/commons/AuthLogo";
import SignInForm from "@/components/domains/auth/SignInForm";
import SNS from "@/components/domains/auth/commons/SNS";
import styles from "@/styles/Sign.module.css";

export default function Signin() {
  return (
    <div className={styles.body}>
      <main className={styles.main}>
        <AuthLogo signMessage="회원이 아니신가요?" link="/auth/signup" linkTitle="회원 가입하기" />
        <SignInForm />
        <SNS title="소셜 로그인" />
      </main>
    </div>
  );
}
