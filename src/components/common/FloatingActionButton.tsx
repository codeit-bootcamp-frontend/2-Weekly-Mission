import dynamic from 'next/dynamic';
import { useMediaQuery } from 'react-responsive';
import useModal from 'hooks/useModal';
import styles from './FloatingActionButton.module.css';
import stylesForModal from 'components/common/Modal.module.css';
const Modal = dynamic(() => import('components/common/Modal'), { ssr: false });

export default function FloatingActionButton() {
  const [addFoldermodalRef, openAddFolderModal, closeAddFoldereModal] = useModal();

  const isMobile = useMediaQuery({
    query: '(max-width :767px)',
  });
  return (
    <>
      {isMobile && (
        <div className={styles.FloatingActionButtonContainer}>
          <button className={styles.FloatingActionButton} onClick={openAddFolderModal}>
            <div>폴더추가</div>
            <img className={styles.FloatingActionButtonIcon} src="/assets/add.png"></img>
          </button>
        </div>
      )}
      <Modal title="폴더 추가" ref={addFoldermodalRef} onCloseModal={closeAddFoldereModal}>
        <input placeholder="내용 입력" className={stylesForModal.modalInput}></input>
      </Modal>
    </>
  );
}
