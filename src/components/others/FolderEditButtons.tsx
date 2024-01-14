import dynamic from 'next/dynamic';
import clsx from 'clsx';
import stylesForModal from 'components/common/Modal.module.css';
import { useSearchContext } from 'context/SearchContext';
import useModal from 'hooks/useModal';
const Modal = dynamic(() => import('components/common/Modal'), { ssr: false });

import styles from './FolderEditButtons.module.css';

export default function FolderEditButtons() {
  const { selectedFolder } = useSearchContext();

  const [sharemodalRef, openShareModal, closeShareModal] = useModal();
  const [editmodalRef, openEditModal, closeEditModal] = useModal();
  const [deletemodalRef, openDeleteModal, closeDeleteModal] = useModal();

  return (
    <div className={styles.FolderEditButtons}>
      <div className={styles.FolderEditButtons__option}>
        <img src="/assets/share.svg"></img>
        <button onClick={openShareModal} className={styles.FolderEditButtons__des}>
          공유
        </button>
      </div>
      <div className={styles.FolderEditButtons__option}>
        <img src="/assets/pen.svg"></img>
        <button onClick={openEditModal} className={styles.FolderEditButtons__des}>
          이름변경
        </button>
      </div>
      <div className={styles.FolderEditButtons__option}>
        <img src="/assets/delete-forshare.svg"></img>
        <button onClick={openDeleteModal} className={styles.FolderEditButtons__des}>
          삭제
        </button>
      </div>

      <Modal
        title="폴더 공유"
        subTitle={selectedFolder.name}
        ref={sharemodalRef}
        onCloseModal={closeShareModal}
        isButtonActivated={false}
      >
        <div className={stylesForModal.folderShareInSNS}>
          <button className={stylesForModal.folderShareItem}>
            <div className={clsx(stylesForModal.folderShareLogoBackground, stylesForModal.shareIconKakao)}>
              <img className={stylesForModal.folderShareLogo} src="/assets/Kakao-forshare.svg"></img>
            </div>
            <span>카카오톡</span>
          </button>
          <button className={stylesForModal.folderShareItem}>
            <div className={clsx(stylesForModal.folderShareLogoBackground, stylesForModal.shareIconFacebook)}>
              <img className={stylesForModal.folderShareLogo} src="/assets/Facebook-forshare.svg"></img>
            </div>
            <span>페이스북</span>
          </button>
          <button className={stylesForModal.folderShareItem}>
            <div className={clsx(stylesForModal.folderShareLogoBackground, stylesForModal.shareIconLink)}>
              <img className={stylesForModal.folderShareLogo} src="/assets/link-forshare.svg"></img>
            </div>
            <span>링크 복사</span>
          </button>
        </div>
      </Modal>

      <Modal title="폴더 이름 변경" ref={editmodalRef} onCloseModal={closeEditModal}>
        <input className={stylesForModal.modalInput}></input>
      </Modal>

      <Modal title="폴더 삭제" subTitle={selectedFolder.name} ref={deletemodalRef} onCloseModal={closeDeleteModal} />
    </div>
  );
}
