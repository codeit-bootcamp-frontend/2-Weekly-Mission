import { FolderRawData } from '@/src/folder/type';
import { mapFoldersData } from '@/src/folder/util-map';
import { axiosInstance } from '@/src/sharing/util';
import { useQuery } from '@tanstack/react-query';

export const useGetFolders = () => {
  const getFolders = () =>
    axiosInstance.get<{ folder: FolderRawData[] }>('folders');
  const { isPending, isError, data } = useQuery({
    queryKey: ['folders'],
    queryFn: getFolders,
  });

  const folders = mapFoldersData(data?.data?.folder);
  const sortedFolders = folders.sort((a, b) => a?.id - b?.id);

  return { isPending, isError, data: sortedFolders };
};
