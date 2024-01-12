import FolderAddLink from '../FolderAddLink/FolderAddLink';
import styles from './FolderNavList.module.css';

export default function FolderNavList({ children }: any) {
  return (
    <div className={styles.folderNavWrap}>
      <div>{children}</div>
      <FolderAddLink />
    </div>
  );
}
