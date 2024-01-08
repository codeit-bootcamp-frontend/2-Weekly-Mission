import { useState } from 'react';
import CTA from '../CTA/CTA';
import ModalLayout from '../ModalLayout/ModalLayout';
import AddToFolderModal from '../AddToFolderModal/AddToFolderModal';
import styles from './AddLinkbar.module.css';

export default function AddLinkbar() {
  const [url, setUrl] = useState('');
  const [addToFolderModalOpen, setAddToFolderModalOpen] = useState(false);

  return (
    <form
      className={styles.form}
      onSubmit={(e) => {
        e.preventDefault();
        if (!url) return;
        setAddToFolderModalOpen(true);
      }}
    >
      <input
        className={styles.input}
        type='url'
        value={url}
        onChange={(e) => {
          setUrl(e.target.value);
        }}
        placeholder='🔗 링크를 추가해 보세요.'
      />
      <CTA text='추가하기' className='fixedWidth' />
      {addToFolderModalOpen && (
        <ModalLayout setModalOpen={setAddToFolderModalOpen} modalTitle='폴더에 추가' details={url}>
          <AddToFolderModal url={url} setUrl={setUrl} setAddToFolderModalOpen={setAddToFolderModalOpen} />
        </ModalLayout>
      )}
    </form>
  );
}
