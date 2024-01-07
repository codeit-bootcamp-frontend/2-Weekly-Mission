import addFolderIcon from 'assets/add-purple.png';
import FolderButton from 'components/common/FolderButton';
import Modal from 'components/common/Modal';
import stylesForModal from 'components/common/Modal.module.css';
import useModal from 'hooks/useModal';
import { useMediaQuery } from 'react-responsive';
import styles from './Filtering.module.css';
import { folderItem } from 'constants/type';

interface FilteringProps {
  chosenFolderId: number;
  folder: folderItem[];
}

export default function Filtering({ chosenFolderId, folder }: FilteringProps) {
  const [addFoldermodalRef, openAddFolderModal, closeAddFoldereModal] = useModal();

  const isNotMobile = useMediaQuery({
    query: '(min-width :768px)',
  });

  const allInfo = {
    id: 0,
    name: '전체',
  };

  const allFolderList = [allInfo, ...folder];

  if (!folder.length) return;
  return (
    <div className={styles.folderNav}>
      <div className={styles.Sorting}>
        {allFolderList.map((folderInfo) => {
          const isFolderChosen = +chosenFolderId === folderInfo.id; // 선택된 폴더인지 확인
          console.log(folderInfo.id, isFolderChosen);
          return <FolderButton isFolderChosen={isFolderChosen} key={folderInfo.id} folderInfo={folderInfo} />;
        })}
      </div>
      {isNotMobile && (
        <div className={styles.addFolderButton}>
          <button onClick={openAddFolderModal} className={styles.folderAddText}>
            폴더 추가
          </button>
          <img className={styles.addFolderIcon} src={addFolderIcon}></img>
        </div>
      )}

      <Modal title="폴더 추가" ref={addFoldermodalRef} onCloseModal={closeAddFoldereModal}>
        <input placeholder="내용 입력" className={stylesForModal.modalInput}></input>
      </Modal>
    </div>
  );
}
