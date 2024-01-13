import { SampleUserFolder } from 'constants/type';
import styles from './FolderBanner.module.css';

export default function FolderBanner({ folder }: { folder: SampleUserFolder }) {
  const { name } = folder;
  const { owner } = folder;
  return (
    <div className={styles.folderBanner}>
      <div className={styles.avatar}>
        <img className={styles.bannerImage} src={owner.profileImageSource}></img>
        <div className={styles.bannerOwner}>{owner.name}</div>
      </div>
      <div className={styles.bannerFolderName}>{name}</div>
    </div>
  );
}
