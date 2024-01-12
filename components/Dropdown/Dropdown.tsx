import React, { useEffect, useRef, useState } from 'react';
import CTA from '../CTA/CTA';
import ModalLayout from '../ModalLayout/ModalLayout';
import AddToFolderModal from '../AddToFolderModal/AddToFolderModal';
import styles from './Dropdown.module.css';
import axios from 'axios';

interface Props {
  className: string;
  url: string;
  id: string;
  setViewDropBox: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Dropdown({ className, setViewDropBox, url, id }: Props) {
  const [deleteLinkModalOpen, setDeleteLinkModalOpen] = useState(false);
  const [addToFolderModalOpen, setAddToFolderModalOpen] = useState(false);
  const dropBoxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleDropBoxClose = (e: MouseEvent) => {
      if (e.target instanceof Node && dropBoxRef.current && !dropBoxRef.current.contains(e.target)) {
        setViewDropBox(false);
      }
    };

    document.addEventListener('mousedown', handleDropBoxClose);

    return () => {
      document.removeEventListener('mousedown', handleDropBoxClose);
    };
  }, []);

  const handleDeleteLink = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    await axios.delete(`/links/${id}`);
    setDeleteLinkModalOpen(false);
  };

  return (
    <div className={`${className} ${styles.dropdown}`} ref={dropBoxRef}>
      <button
        className={styles.dropdownMenu}
        onClick={(e) => {
          e.preventDefault();
          setDeleteLinkModalOpen(true);
        }}
      >
        삭제하기
      </button>
      {deleteLinkModalOpen && (
        <ModalLayout setModalOpen={setDeleteLinkModalOpen} modalTitle='링크 삭제' details={url}>
          {/* todo: 클래스 네입 2개 내려주고 싶으면 CTA에서 타입을 어떻게 지정해줘야하지 ? */}
          <CTA text='삭제하기' className='variableWidth' handleButtonClick={handleDeleteLink} />
        </ModalLayout>
      )}
      <button
        className={styles.dropdownMenu}
        onClick={(e) => {
          e.preventDefault();
          setAddToFolderModalOpen(true);
        }}
      >
        폴더에 추가
      </button>
      {addToFolderModalOpen && (
        <ModalLayout setModalOpen={setAddToFolderModalOpen} modalTitle='폴더에 추가' details={url}>
          <AddToFolderModal url={url} setAddToFolderModalOpen={setAddToFolderModalOpen} />
        </ModalLayout>
      )}
    </div>
  );
}
