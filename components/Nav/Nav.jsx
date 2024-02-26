import Image from "next/image";
import styles from "./Nav.module.css";
import Link from "next/link";

export default function Nav({ userProfile }) {
  return (
    <div className={styles["nav-all"]}>
      <div className={styles["nav-layout"]}>
        <div className={styles["logo-img"]}>
          <Image
            src="/Linkbrary.svg"
            alt="로고 이미지"
            width={100}
            height={100}
          />
        </div>
        {userProfile ? (
          <div className={styles["profile-layout"]}>
            <div className={styles["profile-img"]}>
              <Image
                src={userProfile.image_source}
                alt="프로필 이미지"
                width={50}
                height={50}
              />
            </div>
            <div className={styles["profile-email"]}>{userProfile.email}</div>
          </div>
        ) : (
          <Link href="/signin">
            <div className={styles["login-btn"]}>로그인</div>
          </Link>
        )}
      </div>
    </div>
  );
}
