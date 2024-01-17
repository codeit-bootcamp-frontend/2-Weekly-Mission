import Image from "next/image";
import Link from "next/link";
import styles from "./ShareBox.module.css";
export default function ShareBox() {
  return (
    <>
      <div className={styles["sharebox-all"]}>
        <p className={styles["sharebox-title"]}> 소셜 로그인 </p>
        <div className={styles["sharebox-links"]}>
          <Link
            className={styles["sharebox-link"]}
            href="https://www.google.com/"
          >
            <Image width={42} height={42} src="/google.png" alt="구글로고" />
          </Link>
          <Link
            className={styles["sharebox-link"]}
            href="https://www.kakaocorp.com/page/"
          >
            <Image width={42} height={42} src="/kakao.png" alt="카카오 로고" />
          </Link>
        </div>
      </div>
    </>
  );
}
