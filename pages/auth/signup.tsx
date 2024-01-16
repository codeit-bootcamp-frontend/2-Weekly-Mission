import React from "react";
import styles from "@/styles/Sign.module.css";
import AuthLogo from "@/components/domains/auth/commons/AuthLogo";
import SignUpForm from "@/components/domains/auth/SignUpForm";
import SNS from "@/components/domains/auth/commons/SNS";

export default function Signin() {
  return (
    <div className={styles.body}>
      <main className={styles.main}>
        <AuthLogo signMessage="이미 회원이신가요?" link="/auth/signin" linkTitle="로그인 하기" />
        <SignUpForm />
        <SNS title="다른 방식으로 가입하기" />
      </main>
    </div>
  );
}
