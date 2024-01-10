import Image from "next/image";
import styles from "./Nav.module.css";
export default function Nav() {
  return (
    <>
      <div className={styles["nav-all"]}>
        <div className={styles["nav-layout"]}>
          <div className={styles["logo-img"]}>
            <Image fill src="/Linkbrary.svg" alt="로고 이미지" />
          </div>
          <div className={styles["profile-layout"]}>
            <div className={styles["profile-img"]}>
              <Image fill src="/profile.svg" alt="프로필 이미지" />
            </div>
            <div className={styles["profile-email"]}>codiet@email.com</div>
          </div>
        </div>
      </div>
    </>
  );
}
