import { useAsync } from '@/src/commons/util/useAsync';
import { axiosInstance } from '@/src/commons/util/axiosInstance';
import { UserRawData } from './type';

// 유저 데이터를 불러오는 커스텀 훅
export const useGetUser = (userId: number) => {
  const getUser = () =>
    axiosInstance.get<{ data: UserRawData[] }>(`users/${userId}`);
  const { loading, error, data } = useAsync({
    asyncFunction: getUser,
    reload: !!userId,
  });
  const userResponse = data?.data?.[0];

  const userData = userResponse
    ? {
        id: userResponse.id,
        createdAt: userResponse.created_at,
        ownerName: userResponse.name,
        email: userResponse.email,
        profileImage: userResponse.image_source,
        authId: userResponse.auth_id,
      }
    : {
        id: 0,
        createdAt: '',
        ownerName: '',
        email: '',
        profileImage: '',
        authId: '',
      };
  return { loading, error, data: userData };
};
