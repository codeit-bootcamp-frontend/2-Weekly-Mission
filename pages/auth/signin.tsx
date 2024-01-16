import React from "react";
import AuthLogo from "@/components/domains/auth/AuthLogo";
import InputForm from "@/components/domains/auth/signIn/InputForm";
import SNS from "@/components/domains/auth/SNS";
import styles from "@/styles/Sign.module.css";

export default function Signin() {
  return (
    <div className={styles.body}>
      <main className={styles.main}>
        <AuthLogo signMessage="회원이 아니신가요?" link="/auth/signup" linkTitle="회원 가입하기" />
        <InputForm />
        <SNS title="소셜 로그인" />
      </main>
    </div>
  );
}
