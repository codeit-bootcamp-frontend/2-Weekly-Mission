import clsx from 'clsx';
import { FolderItem } from 'constants/type';
import { useSearchContext } from 'context/SearchContext';
import React from 'react';

import styles from './FolderButton.module.css';

interface FolderButtonProps {
  isFolderChosen: boolean;
  folderInfo: FolderItem;
}

export default function FolderButton({ isFolderChosen, folderInfo }: FolderButtonProps) {
  const { setSelectedFolder } = useSearchContext();

  function handleSetFolder(e: React.MouseEvent<HTMLElement>) {
    const { currentTarget } = e;

    const id = +(currentTarget.dataset.key ?? 0);
    const name = currentTarget.dataset.name ?? '';
    setSelectedFolder({ id, name });
  }
  return (
    <button
      data-key={folderInfo.id}
      data-name={folderInfo.name}
      onClick={handleSetFolder}
      className={clsx(styles.folderButton, isFolderChosen ? styles.chosenFolderButton : '')}
    >
      {folderInfo.name}
    </button>
  );
}
