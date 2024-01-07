import styles from './FolderInfo.module.css';

export default function FolderInfo({ profileImage, ownerName, folderName }: any) {
  return (
    <div className={styles.FolderInfo}>
      <img className={styles.FolderInfoProfile} src={profileImage} alt='폴더 소유자 프로필 이미지' />
      <span className={styles.FolderInfoOwner}>{ownerName}</span>
      <h2 className={styles.FolderInfoFolder}>{folderName}</h2>
    </div>
  );
}
