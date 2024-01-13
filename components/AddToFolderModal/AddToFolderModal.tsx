import React, { useState } from 'react';
import Image from 'next/image';
import axios from 'axios';
import useGetData from '@/lib/useGetData';
import { FolderList } from '@/lib/apiTypes';
import CTA from '@/components/CTA/CTA';
import CheckImg from '@/public/images/check.svg';
import styles from './AddToFolderModal.module.css';

interface Props {
  url: string;
  setUrl?: React.Dispatch<React.SetStateAction<string>>;
  setAddToFolderModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function AddToFolderModal({ url, setUrl, setAddToFolderModalOpen }: Props) {
  const [selectedFolderId, setSelectedFolderId] = useState('');
  const [loading, error, folderList] = useGetData<FolderList>('/users/1/folders');

  if (loading) return;
  if (error) return;

  const list = folderList?.map(({ id, name, link: { count } }) => (
    <li key={id} className={`${styles.folderContainer} ${selectedFolderId === id ? styles.selected : ''}`}>
      <button
        className={styles.folder}
        onClick={(e) => {
          e.preventDefault();
          setSelectedFolderId(id);
        }}
      >
        {name}
        <span className={styles.linkCount}>{count}개 링크</span>
      </button>
      {id === selectedFolderId && (
        <Image src={CheckImg} alt='선택한 폴더를 나타내틑 체크 모양 아이콘' width={14} height={14} />
      )}
    </li>
  ));

  const handleAddToFolder = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    await axios.post('/links', { url: url, folderId: selectedFolderId });
    setAddToFolderModalOpen(false);
    setUrl && setUrl('');
  };

  return (
    <div className={styles.container}>
      <ul className={styles.folderList}>{list}</ul>
      <CTA text='추가하기' className='variableWidth' handleButtonClick={handleAddToFolder} />
    </div>
  );
}
