import styles from './FolderNavClick.module.css';

export default function FolderNavClick({ id, name, onFolderClick }: any) {
  const folderNavClick = () => {
    if (onFolderClick) {
      onFolderClick(id);
    }
  };

  return (
    <button onClick={folderNavClick} className={styles.folderNavList}>
      {name}
    </button>
  );
}
