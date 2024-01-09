import { SampleFolderRawData } from '../type';
import { useAsync } from '@/src/commons/util/useAsync';
import { axiosInstance } from '@/src/commons/util/axiosInstance';
import { mapFolderData } from './map/mapFolderData';

// 샘플 폴더 데이터를 가져오는 커스텀 훅
export const useGetFolder = () => {
  // 샘플 폴더 데이터 불러오는 함수
  const getFolder = () =>
    axiosInstance.get<{ folder: SampleFolderRawData }>('sample/folder');
  const { loading, error, data } = useAsync(getFolder); // useAsync 훅을 이용해 getFolder 함수 실행

  //   폴더 데이터 매칭시킴
  const folderData = mapFolderData(data?.folder);

  return { loading, error, data: folderData };
};
