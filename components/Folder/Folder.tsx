import styles from './Folder.module.css';

export default function Folder({ linkAddBar, searchBar, folderNavList, folderFeature, cardList }: any) {
  return (
    <div className={styles.FolderPage}>
      {linkAddBar}
      <div className={styles.FolderPageItems}>
        {searchBar}
        {folderNavList}
        {folderFeature}
        {cardList}
      </div>
    </div>
  );
}
