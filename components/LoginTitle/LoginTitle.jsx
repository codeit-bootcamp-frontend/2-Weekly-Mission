import Image from "next/image";
import Link from "next/link";
import styles from "./LoginTitle.module.css";

export default function Title() {
  return (
    <>
      <div className={styles["loginTitle-all"]}>
        <div className={styles["logo-img"]}>
          <Image fill src="/Linkbrary.svg" alt="로고 이미지" />
        </div>
        <div className={styles["description"]}>
          <div className={styles["title"]}>
            회원이 아니신가요?{" "}
            <Link href="/signup" className={styles["join-go"]}>
              회원 가입하기
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
