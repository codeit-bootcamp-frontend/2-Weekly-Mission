import styles from './Shared.module.css';

export default function Shared({ folderInfo, searchBar, cardList }: any) {
  return (
    <div className={styles.SharedPage}>
      {folderInfo}
      <div className={styles.SharedPageItems}>
        {searchBar}
        {cardList}
      </div>
    </div>
  );
}
