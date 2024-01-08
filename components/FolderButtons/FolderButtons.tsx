import React, { FormEvent, useState } from 'react';
import Image from 'next/image';
import useGetData from '@/lib/useGetData';
import AddIcon from '@/public/images/add.svg';
import styles from './FolderButtons.module.css';
import ModalLayout from '../ModalLayout/ModalLayout';
import CTA from '../CTA/CTA';
import axios from 'axios';

interface Props {
  userId: string;
  folderId: string;
  setSelectedFolder: React.Dispatch<React.SetStateAction<{ id: string; name: string }>>;
}

export default function FolderButtons({ userId = '', folderId, setSelectedFolder }: Props) {
  const [folderName, setFolderName] = useState('');
  const [addFolderModalOpen, setAddFolderModalOpen] = useState(false);
  const [loading, error, folderList] = useGetData(`/users/${userId}/folders`);

  if (loading) return;
  if (error) return;

  const list = folderList.map(({ id, name }) => (
    <li key={id}>
      <button
        className={`${styles.button} ${folderId === id ? styles.activeButton : ''}`}
        onClick={() => setSelectedFolder({ id, name })}
      >
        {name}
      </button>
    </li>
  ));

  const handleAddFolder = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!folderName) return;
    const addFolder = async () => {
      await axios.post('/folders', { name: folderName });
    };
    await addFolder();
    setFolderName('');
    setAddFolderModalOpen(false);
  };

  return (
    <div className={styles.container}>
      <ul className={styles.buttonList}>
        <li>
          <button
            className={`${styles.button} ${!folderId ? styles.activeButton : ''}`}
            onClick={() => {
              setSelectedFolder({ id: '', name: '전체' });
            }}
          >
            전체
          </button>
        </li>
        {list}
      </ul>
      <button onClick={() => setAddFolderModalOpen(true)}>
        <Image className={styles.addButton} src={AddIcon} alt='폴더 추가하기 버튼' width={16} height={16} />
      </button>
      {addFolderModalOpen && (
        <ModalLayout setModalOpen={setAddFolderModalOpen} modalTitle='폴더 추가'>
          <form className={styles.modalForm} onSubmit={handleAddFolder}>
            <input
              className={styles.modalInput}
              value={folderName}
              type='text'
              placeholder='내용 입력'
              onChange={(e) => setFolderName(e.target.value)}
            />
            <CTA text='추가하기' className='variableWidth' />
          </form>
        </ModalLayout>
      )}
    </div>
  );
}
