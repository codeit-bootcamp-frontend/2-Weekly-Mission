import { MouseEventHandler } from 'react';
import styles from './Selector.module.css';

interface SelectorProps {
  openLinkDeleteModal: MouseEventHandler<HTMLButtonElement>;
  openLinkAddToFolderModal: MouseEventHandler<HTMLButtonElement>;
}

export default function Selector({ openLinkDeleteModal, openLinkAddToFolderModal }: SelectorProps) {
  return (
    <div className={styles.Selector}>
      <button
        onClick={(e) => {
          e.preventDefault();
          openLinkDeleteModal(e);
        }}
        className={styles.Sector__option}
      >
        삭제하기
      </button>
      <button
        onClick={(e) => {
          e.preventDefault();
          openLinkAddToFolderModal(e);
        }}
        className={styles.Sector__option}
      >
        폴더에 추가
      </button>
    </div>
  );
}
