import { useAsync } from '@/src/commons/util/useAsync';
import { axiosInstance } from '@/src/commons/util/axiosInstance';
import { UserRawData } from './type';

// 유저 데이터를 불러오는 커스텀 훅
export const useGetUser = () => {
  const getUser = () => axiosInstance.get<{ data: UserRawData }>('sample/user');
  const { loading, error, data } = useAsync(getUser);
  return { loading, error, data: data?.data ?? null };
};
