import styles from './Selector.module.css';

export default function Selector({ openLinkDeleteModal, openLinkAddToFolderModal }) {
  return (
    <div className={styles.Selector}>
      <button
        onClick={(e) => {
          e.preventDefault();
          openLinkDeleteModal();
        }}
        className={styles.Sector__option}
      >
        삭제하기
      </button>
      <button
        onClick={(e) => {
          e.preventDefault();
          openLinkAddToFolderModal();
        }}
        className={styles.Sector__option}
      >
        폴더에 추가
      </button>
    </div>
  );
}
