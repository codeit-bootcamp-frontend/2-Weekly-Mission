import React from 'react';
import EditFeatures from '../EditFeatures/EditFeatures';
import EmptyCardList from '../EmptyCardList/EmptyCardList';
import CardList from '../CardList/CardList';
import useGetData from '@/lib/useGetData';
import styles from './SelectedCardList.module.css';

interface Props {
  selectedFolder: { id: string; name: string };
  searchValue: string;
}

export default function SelectedCardList({ selectedFolder, searchValue }: Props) {
  const { id: folderId, name: folderName } = selectedFolder;
  const query = folderId ? `?folderId=${folderId}` : '';

  const [loading, error, links] = useGetData(`users/1/links${query}`, selectedFolder);

  if (loading) return;
  if (error) return;

  const selectedLinks = searchValue
    ? links.filter(({ url, title, description }) =>
        [url, title, description].some((key) => key?.toUpperCase().includes(searchValue.toUpperCase()))
      ) ?? []
    : links;

  return (
    <div>
      <div className={styles.nameContainer}>
        <h2 className={styles.name}>{folderName}</h2>
        {folderId && <EditFeatures folderId={folderId} folderName={folderName} />}
      </div>
      {selectedLinks.length === 0 ? <EmptyCardList /> : <CardList links={selectedLinks} />}
    </div>
  );
}
