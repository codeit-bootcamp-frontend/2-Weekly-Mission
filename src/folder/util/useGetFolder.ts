import { FolderRawData } from '../type';
import { useAsync } from '@/src/commons/util/useAsync';
import { axiosInstance } from '@/src/commons/util/axiosInstance';

// 샘플 폴더 데이터를 가져오는 커스텀 훅
export const useGetFolder = (folderId: string) => {
  // 샘플 폴더 데이터 불러오는 함수
  const getFolder = () =>
    axiosInstance.get<{ data: FolderRawData[] }>(`folders/${folderId}`);
  const { loading, error, data } = useAsync({
    asyncFunction: getFolder,
    reload: !!folderId,
  }); // 처음에 useRouter에서 params를 못가져와서 새로고침용 reload

  const folderResponse = data?.data?.[0];

  const folderData = folderResponse
    ? {
        folderId: folderResponse.id,
        userId: folderResponse.user_id,
        name: folderResponse.name,
      }
    : {
        folderId: 0,
        userId: 0,
        name: '',
      };

  return { loading, error, data: folderData };
};
