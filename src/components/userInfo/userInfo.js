import styles from "./userInfo.module.css";

export default function UserInfo() {
  return (
    <>
      <div className={styles.userInfo}>
        <div className={styles.userProfile}>
          <img className={styles.userProfileImg} src="" alt="프로필 이미지" />
          <div className={styles.userName}>@코드잇</div>
        </div>
        <div className={styles.userFolderName}>⭐️즐겨찾기</div>
      </div>
    </>
  );
}
