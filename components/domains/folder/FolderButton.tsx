import styles from "./FolderButton.module.css";
// import { Link } from "react-router-dom";
import Link from "next/link";

interface FolderButtonProps {
  folderName: string;
  folderId?: any;
  onFolderClick: (folder: { folderId: number | null; folderName: string }) => void;
  isActive?: boolean;
}

function FolderButton({ folderId, folderName, onFolderClick }: FolderButtonProps) {
  const handleFolderClick = () => {
    onFolderClick({ folderId, folderName });
  };

  return (
    <Link href={`/folder/${folderId || ""}`}>
      <button className={styles.folderButton} onClick={handleFolderClick}>
        {folderName}
      </button>
    </Link>
  );
}

export default FolderButton;
