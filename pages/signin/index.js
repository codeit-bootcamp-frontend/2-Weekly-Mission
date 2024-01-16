import styles from "@/styles/SignIn.module.css";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { EmailInput, PasswordInput } from "@/components/Input";

export default function SignIn() {
  // const { data } = useGetUser();
  // const profile = data
  //   ? { email: data.email, imageSource: data.profileImageSource }
  //   : null;

  const handleSubmit = (e) => {
    e.preventDefault(); // 폼 기본 동작 방지

    // 여기에서 제출된 데이터를 콘솔에 출력
    const formData = new FormData(e.target);
    console.log("Submitted Data:", Object.fromEntries(formData));
  };

  return (
    <>
      <Head>
        <title>Login</title>
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
            회원이 아니신가요?
            <Link className={styles.headerLink} href={"/signup"}>
              회원 가입하기
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
            </div>
            <button className={styles.cta} type="submit" id="loginButton">
              로그인
            </button>
          </form>
          <div className={styles.snsBox}>
            <span className={styles.snsText}>소셜 로그인</span>
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
