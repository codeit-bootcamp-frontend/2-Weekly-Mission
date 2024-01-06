import { FolderRawData } from '../type';
import { mapFoldersData } from './map/mapFoldersData';
import { axiosInstance } from '@/src/commons/util/axiosInstance';
import { useAsync } from '@/src/commons/util/useAsync';

// 폴더 제목들을 가져오는 커스텀 훅
export const useGetFolders = () => {
  const getFolders = () =>
    axiosInstance.get<{ data: FolderRawData[] }>('users/1/folders');
  const { loading, error, data } = useAsync(getFolders);

  const folders = mapFoldersData(data?.data);
  const sortedFolders = folders.sort((a, b) => a?.id - b?.id);

  return { loading, error, data: sortedFolders };
};
