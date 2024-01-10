import Image from "next/image";
import styles from "./FolderAddButton.module.css";
import React from "react";

function FolderAddButton() {
  return (
    <button className={styles.folderAddButton}>
      <Image src="/images/folder/FAB.png" width={127} height={35} alt="FAB" />
    </button>
  );
}

export default FolderAddButton;
