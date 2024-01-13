import { useMediaQuery } from 'react-responsive';
import useModal from 'hooks/useModal';
import Modal from 'components/common/Modal';
import styles from './FloatingActionButton.module.css';
import stylesForModal from 'components/common/Modal.module.css';
import { useEffect, useState } from 'react';

export default function FloatingActionButton() {
  const [addFoldermodalRef, openAddFolderModal, closeAddFoldereModal] = useModal();

  const [mobile, setMobile] = useState<boolean>(true); //hydration fail 방지를 위해 파생된 뷰포트 관련 state를 제작

  const isMobile = useMediaQuery({
    query: '(max-width :767px)',
  });

  const checkResize = () => {
    if (isMobile) {
      setMobile(true);
    } else {
      setMobile(false);
    }
  };

  useEffect(() => {
    checkResize();
  }, [isMobile]);

  return (
    <>
      {mobile && (
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
