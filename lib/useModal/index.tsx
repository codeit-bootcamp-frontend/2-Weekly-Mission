import React, { useState, ReactNode } from "react";
import Image from "next/image";
import styles from "./useModal.module.css";
import ShareButtons from "../../components/domains/folder/ShareButtons";

export interface ModalProps {
  title?: string;
  link?: string;
  list?: ReactNode;
  input?: string;
  button?: string;
  color?: "blue" | "red";
  shareSNS?: boolean;
  folderId?: number;
  placeholder?: string;
}

const useModal = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };

  const Modal = ({ title, link, list, input, button, color, shareSNS, folderId, placeholder }: ModalProps) =>
    modalOpen ? (
      <div className={styles.modalBackground}>
        <div className={styles.modalBox}>
          <div className={styles.modalContainer}>
            <div className={styles.modalTop}>
              <button className={styles.modalExit} onClick={closeModal}>
                <Image src="/images/modal/exit-icon.png" width={20} height={20} alt="exit icon" />
              </button>
              <p className={styles.modalTitle}>{title}</p>
              <p className={styles.modalLink}>{link}</p>
            </div>
            {list && <div className={styles.modalList}>{list}</div>}
            {input && <input className={styles.modalInput} placeholder={placeholder} />}
            {button && (
              <button
                className={`${styles.modalButton} ${color === "blue" ? styles.blue : styles.red}`}
                onClick={closeModal}
                color={color as "blue" | "red"}
              >
                {button}
              </button>
            )}
            {shareSNS && <ShareButtons folderId={folderId} />}
          </div>
        </div>
      </div>
    ) : null;
  return { Modal, openModal, closeModal };
};

export default useModal;
