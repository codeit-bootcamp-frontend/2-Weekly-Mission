import React, { ReactNode, useEffect, useRef } from 'react';
import Image from 'next/image';
import CloseImg from '@/public/images/close.svg';
import styles from './ModalLayout.module.css';

interface Props {
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  modalTitle: string;
  details?: string;
  children: ReactNode;
}

export default function ModalLayout({ setModalOpen, modalTitle, details, children }: Props) {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleModalClose = (e: MouseEvent) => {
      if (e.target instanceof Node && modalRef.current && !modalRef.current.contains(e.target)) {
        setModalOpen(false);
      }
    };

    document.addEventListener('mousedown', handleModalClose);

    return () => {
      document.removeEventListener('mousedown', handleModalClose);
    };
  }, []);

  return (
    <div className={styles.background}>
      <div className={styles.container} ref={modalRef}>
        <button
          className={styles.closeButton}
          onClick={(e) => {
            e.preventDefault();
            setModalOpen(false);
          }}
        >
          <Image className={styles.closeImage} src={CloseImg} alt='모달 닫기' width={12} height={12} />
        </button>
        <header className={styles.header}>
          <p className={styles.modalTitle}>{modalTitle}</p>
          <p className={styles.details}>{details}</p>
        </header>
        {children}
      </div>
    </div>
  );
}
