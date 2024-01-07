import { STAR_IMAGE } from './constants';
import styles from './FolderStar.module.css';

export default function FolderStar() {
  return <img className={styles.folderStar} src={STAR_IMAGE} alt='폴더 별 표시' />;
}
