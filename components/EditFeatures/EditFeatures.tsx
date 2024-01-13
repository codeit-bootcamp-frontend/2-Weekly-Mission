import React, { FormEvent, useState } from 'react';
import Image from 'next/image';
import ModalLayout from '../ModalLayout/ModalLayout';
import CTA from '../CTA/CTA';
import ShareImg from '@/public/images/share.svg';
import PenImg from '@/public/images/pen.svg';
import DeleteImg from '@/public/images/trash.svg';
import styles from './EditFeatures.module.css';
import axios from 'axios';

interface Props {
  folderId: string;
  folderName: string;
}

export default function EditFeatures({ folderId, folderName }: Props) {
  const [editFolderNameModalOpen, setEditFolderNameModalOpen] = useState(false);
  const [newFolderName, setNewFolderName] = useState('');

  const [deleteFolderModalOpen, setDeleteFolderModalOpen] = useState(false);

  const handleEditFolderName = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!newFolderName) return;
    await axios.put(`/folders/${folderId}`, { name: newFolderName });
    setNewFolderName('');
    setEditFolderNameModalOpen(false);
  };

  const handleDeleteFolder = async () => {
    await axios.delete(`/folders/${folderId}`);
    setDeleteFolderModalOpen(false);
  };

  return (
    <div className={styles.features}>
      <button className={styles.feature}>
        <Image src={ShareImg} alt='폴더 공유' />
        공유
      </button>
      <button className={styles.feature} onClick={() => setEditFolderNameModalOpen(true)}>
        <Image src={PenImg} alt='폴더 이름 변경' />
        이름 변경
      </button>
      {editFolderNameModalOpen && (
        <ModalLayout setModalOpen={setEditFolderNameModalOpen} modalTitle='폴더 이름 변경'>
          <form className={styles.modalForm} onSubmit={handleEditFolderName}>
            <input
              className={styles.modalInput}
              value={newFolderName}
              type='text'
              placeholder='내용 입력'
              onChange={(e) => setNewFolderName(e.target.value)}
            />
            <CTA text='변경하기' className='variableWidth' />
          </form>
        </ModalLayout>
      )}
      <button className={styles.feature} onClick={() => setDeleteFolderModalOpen(true)}>
        <Image src={DeleteImg} alt='폴더 삭제' />
        삭제
      </button>
      {deleteFolderModalOpen && (
        <ModalLayout setModalOpen={setDeleteFolderModalOpen} modalTitle='폴더 삭제' details={folderName}>
          <CTA text='삭제하기' className='variableWidth' handleButtonClick={handleDeleteFolder} />
        </ModalLayout>
      )}
    </div>
  );
}
