import styles from "@/styles/SignUp.module.css";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import {
  EmailInput,
  PasswordInput,
  PasswordCheckInput,
} from "@/components/Input";

export default function SignUpPage() {
  const [checkRequired, setCheckRequired] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const password = formData.get("password");
    const passwordCheck = formData.get("passwordCheck");

    if (password === passwordCheck) {
      setCheckRequired(false);
    } else {
      setCheckRequired(true);
    }
  };
  return (
    <>
      <Head>
        <title>Sign Up</title>
        <meta property="og:title" content="Linkbrary" key="title" />
        <meta
          name="viewport"
          content="width=device-width,minimum-scale=1,initial-scale=1,maximum-scale=1,user-scalable=no"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard.css"
        />
      </Head>
      <div className={styles.signIn}>
        <header className={styles.header}>
          <Link className={styles.logoLink} href={"/"}>
            <Image
              src="/images/logo.svg"
              width={133}
              height={24}
              alt="Linkbrary"
            />
          </Link>
          <p className={styles.headerMessage}>
            이미 회원이신가요?
            <Link className={styles.headerLink} href={"/signin"}>
              로그인하기
            </Link>
          </p>
        </header>
        <div className={styles.signBox}>
          <form
            className={styles.signForm}
            method="post"
            action="#"
            onSubmit={handleSubmit}
          >
            <div className={styles.signInputs}>
              <EmailInput />
              <PasswordInput />
              <PasswordCheckInput check={checkRequired} />
            </div>
            <button className={styles.cta} type="submit" id="loginButton">
              회원가입
            </button>
          </form>
          <div className={styles.snsBox}>
            <span className={styles.snsText}>다른 방식으로 가입하기</span>
            <div className={styles.snsLinks}>
              <Link
                className={`${styles.snsLink} ${styles.googleLink}`}
                href={"https://www.google.com/"}
              >
                <Image
                  src="/images/google.png"
                  width={24}
                  height={24}
                  alt="Google Login"
                />
              </Link>
              <Link
                className={`${styles.snsLink} ${styles.kakaoLink}`}
                href={"https://www.kakaocorp.com/page/"}
              >
                <Image
                  src="/images/kakao.svg"
                  width={24}
                  height={24}
                  alt="Kakao Login"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
