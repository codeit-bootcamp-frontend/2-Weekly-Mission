import { useAsync } from '../commons/util/useAsync';
import { axiosInstance } from '../commons/util/axiosInstance';
import { UserRawData } from './type';

export const useGetCurrentUser = () => {
  const getCurrentUser = () =>
    axiosInstance.get<{ data: UserRawData[] }>('users');
  const { loading, error, data } = useAsync({
    asyncFunction: getCurrentUser,
  });

  const currentUserResponse = data?.data?.[0];

  const currentUserData = currentUserResponse
    ? {
        id: currentUserResponse.id,
        createdAt: currentUserResponse.created_at,
        ownerName: currentUserResponse.name,
        email: currentUserResponse.email,
        profileImage: currentUserResponse.image_source,
        authId: currentUserResponse.auth_id,
      }
    : null;

  return { loading, error, data: currentUserData };
};
