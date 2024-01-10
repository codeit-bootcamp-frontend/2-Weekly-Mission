import styles from "@/styles/SignIn.module.css";
import Link from "next/link";

export default function SignIn() {
  const handleSubmit = (e) => {
    e.preventDefault(); // 폼 기본 동작 방지

    // 여기에서 제출된 데이터를 콘솔에 출력
    const formData = new FormData(e.target);
    console.log("Submitted Data:", Object.fromEntries(formData));
  };

  return (
    <div className={styles.signIn}>
      <header className={styles.header}>
        <Link className={styles.logoLink} href={"https://www.google.com/"}>
          image
        </Link>
        <p>
          회원이 아니신가요?
          <Link href={"https://www.google.com/"}>회원 가입하기</Link>
        </p>
      </header>
      <div>
        <form method="post" action="#" onSubmit={handleSubmit}>
          <div>
            <h1>EmailInput</h1>
            <h1>PasswordInput</h1>
          </div>
          <button type="submit" id="loginButton">
            로그인
          </button>
        </form>
        <div>
          <span>소셜 로그인</span>
          <div>
            <Link href={"https://www.google.com/"}>to Google</Link>
            <Link href={"https://www.google.com/"}>to Kakao</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
