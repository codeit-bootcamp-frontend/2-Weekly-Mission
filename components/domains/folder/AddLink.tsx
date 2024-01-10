import React, { useState, useEffect, FC, forwardRef } from "react";
import Image from "next/image";
import styles from "./AddLink.module.css";
import { getLinks, getFolders } from "@/lib/api";
import { LinkData, FolderData } from "@/lib/utils/type";
import useModal, { ModalProps } from "@/lib/useModal";
import ModalPotal from "@/lib/Portal";

interface FolderLinkButtonProps {
  folderId?: number;
  folderName?: string;
  onClick?: () => void;
}

function FolderLinkButton({ folderId, folderName, onClick }: FolderLinkButtonProps) {
  const [isActive, setIsActive] = useState(false);
  const [links, setLinks] = useState<LinkData[]>([]);

  useEffect(() => {
    const fetchLinks = async () => {
      const apiEndpoint: any = folderId;

      const link = await getLinks(apiEndpoint);
      setLinks(link.data);
    };

    fetchLinks();
  }, [folderId]);

  const handleFolderClick = () => {
    setIsActive(!isActive);
    if (onClick) {
      onClick();
    }
  };

  return (
    <button className={styles.linkButton} onClick={handleFolderClick}>
      <div>{folderName}</div>
      <span>{`${links ? links.length : 0}개 링크`}</span>
      {isActive && <Image src="/images/modal/check.svg" width={14} height={14} alt="check icon" />}
    </button>
  );
}

function FolderLinks() {
  const [folders, setFolders] = useState<FolderData[]>([]);

  useEffect(() => {
    const fetchFolders = async () => {
      const folder = await getFolders();

      setFolders(folder.data);
    };

    fetchFolders();
  }, []);

  return (
    <div className={styles.folderLinkList}>
      {folders.map((folder) => (
        <FolderLinkButton key={folder.id} folderId={folder.id} folderName={folder.name} />
      ))}
    </div>
  );
}

export interface AddLinkProps {
  $isSticky: boolean;
}

const AddLink = forwardRef<HTMLDivElement, AddLinkProps>(function AddLink({ $isSticky }, ref) {
  const { Modal, openModal } = useModal();
  const [linkInput, setLinkInput] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLinkInput(e.target.value);
  };

  return (
    <div className={styles.addLinkSection} ref={ref}>
      <div className={`${styles.addLinkBar} ${$isSticky ? "sticky" : ""}`}>
        <div className={styles.addLinkContainer}>
          <input
            className={styles.addLinkInput}
            placeholder="링크를 추가해 보세요"
            value={linkInput}
            onChange={handleInputChange}
          />
          <Image
            className={styles.addLinkImg}
            src="/images/folder/add-link.png"
            width={20}
            height={20}
            alt="링크 아이콘"
          />
          <button className={styles.addLinkButton} onClick={openModal}>
            추가하기
          </button>
          <ModalPotal>
            {(Modal as FC<ModalProps>)({
              title: "폴더에 추가",
              link: linkInput,
              list: <FolderLinks />,
              button: "추가하기",
              color: "blue",
            })}
          </ModalPotal>
        </div>
      </div>
    </div>
  );
});

export default AddLink;
