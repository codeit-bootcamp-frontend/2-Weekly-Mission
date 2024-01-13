import Image from 'next/image';
import React from 'react';
import styles from './SharedHeader.module.css';
import useGetData from '@/lib/useGetData';

interface Props {
  userId: string | undefined;
  folderId: string | string[] | undefined;
}

type UserData = {
  id: string;
  created_at: string;
  name: string;
  image_source: string;
  email: string;
  auth_id: string;
};

type FolderData = {
  id: string;
  created_at: string;
  name: string;
  user_id: string;
  favorite: boolean;
};

type UserDataList = UserData[];

type FolderDataList = FolderData[];

export default function SharedHeader({ userId, folderId }: Props) {
  const [userLoading, userError, userData] = useGetData<UserDataList>(`/user/${userId}`, userId);
  const [folderLoading, folderError, folderData] = useGetData<FolderDataList>(`/folders/${folderId}`, folderId);

  if (userLoading) return;
  if (userError) return;
  if (folderLoading) return;
  if (folderError) return;

  // navBar와 비슷한 고민?
  const { name: userName, image_source: imageSource } = userData[0];
  const { name: folderName } = folderData[0];

  return (
    <div className={styles.profile}>
      <Image className={styles.profileImage} src={imageSource} alt='사용자 프로필' width={60} height={60} />
      <p className={styles.userName}>{userName}</p>
      <p className={styles.folderName}>{folderName}</p>
    </div>
  );
}
