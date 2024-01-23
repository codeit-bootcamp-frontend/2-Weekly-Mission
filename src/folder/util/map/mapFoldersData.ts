import { Folder, FolderRawData } from '../../type';

// 폴더 제목 목록 데이터를 매핑하는 함수
export const mapFoldersData = (folders?: FolderRawData[]): Folder[] => {
  if (!folders) return [];

  return folders.map((folder) => {
    const { id, created_at, name, user_id, link } = folder;

    return {
      id,
      createdAt: created_at,
      name,
      userId: user_id,
      linkCount: link?.count || 0,
    };
  });
};
