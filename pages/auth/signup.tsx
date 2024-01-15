import React from "react";
import styles from "@/styles/Sign.module.css";
import Link from "next/link";
import Image from "next/image";
import { CtaLong } from "@/components/commons/Cta";
import { useRouter } from "next/router";
import AuthInput from "@/components/domains/auth/AuthInput";
import { useForm } from "react-hook-form";

export default function Signin() {
  const { register, handleSubmit } = useForm();
  const router = useRouter();

  const onLogin = () => {
    router.push("/auth/signin");
  };

  const handleOnKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      onLogin();
    }
  };

  return (
    <div className={styles.body}>
      <main className={styles.main}>
        <div className={styles.logo}>
          <Link href="/">
            <Image src="/images/auth/linkbrary-logo-sign.svg" width={210} height={38} alt="logo" />
          </Link>
          <div className={styles.sign}>
            <div>이미 회원이신가요?</div>
            <Link href="/auth/signin">로그인 하기</Link>
          </div>
        </div>

        <form className={styles.form} onSubmit={handleSubmit((data) => alert(JSON.stringify(data)))}>
          <AuthInput
            label="이메일"
            type="email"
            placeholder="이메일을 입력해 주세요."
            onValid={(email: string) => {
              if (!email) {
                return false;
              }
              const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

              return emailRegex.test(email);
            }}
            errorMessage="올바른 이메일 주소가 아닙니다."
            {...register("email")}
          />
          <AuthInput
            label="비밀번호"
            type="password"
            placeholder="비밀번호를 입력해 주세요."
            onValid={(password: string) => {
              return password !== "";
            }}
            errorMessage="비밀번호가 올바르지 않습니다."
          />
          <AuthInput
            label="비밀번호 확인"
            type="password"
            placeholder="비밀번호를 입력해 주세요."
            onValid={(password: string) => {
              return password !== "";
            }}
            errorMessage="비밀번호 동일하지 않습니다"
            onKeyPress={handleOnKeyPress}
          />
          <CtaLong onClick={handleSubmit(onLogin)}>회원가입</CtaLong>
        </form>

        <div className={styles.sns}>
          <div className={styles.snsTitle}>다른 방식으로 가입하기</div>
          <button className={styles.snsButton}>
            <a href="https://www.google.com/" target="_blank">
              <Image src="/images/auth/google-background.svg" width={42} height={42} alt="google background" />
              <Image className={styles.snsIcon} src="/images/auth/google.png" width={22} height={22} alt="google" />
            </a>
          </button>
          <button className={styles.snsButton}>
            <a href="https://www.kakaocorp.com/page/" target="_blank">
              <Image src="/images/auth/kakao-background.svg" width={42} height={42} alt="kakao background" />
              <Image className={styles.snsIcon} src="/images/auth/kakao.svg" width={22} height={22} alt="kakao" />
            </a>
          </button>
        </div>
      </main>
    </div>
  );
}
