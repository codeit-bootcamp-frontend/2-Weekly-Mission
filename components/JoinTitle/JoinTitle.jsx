import Image from "next/image";
import Link from "next/link";
import styles from "../LoginTitle/LoginTitle.module.css";

export default function JoinTitle() {
  return (
    <>
      <div className={styles["loginTitle-all"]}>
        <div className={styles["logo-img"]}>
          <Image fill src="/Linkbrary.svg" alt="로고 이미지" />
        </div>
        <div className={styles["description"]}>
          <div className={styles["title"]}>
            이미 회원이신가요?{""}
            <Link href="/signin" className={styles["join-go"]}>
              로그인하기
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
