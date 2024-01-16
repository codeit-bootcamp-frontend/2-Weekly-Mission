import React from "react";
import styles from "@/styles/Sign.module.css";
import AuthLogo from "@/components/domains/auth/AuthLogo";
import SNS from "@/components/domains/auth/SNS";
import InputForm from "@/components/domains/auth/signUp/InputForm";

export default function Signin() {
  return (
    <div className={styles.body}>
      <main className={styles.main}>
        <AuthLogo signMessage="이미 회원이신가요?" link="/auth/signin" linkTitle="로그인 하기" />
        <InputForm />
        <SNS title="다른 방식으로 가입하기" />
      </main>
    </div>
  );
}
