import { axiosInstance } from '@/src/commons/util/axiosInstance';
import { useAsync } from '@/src/commons/util/useAsync';

type Result = {
  isUsableNickName: string;
};

export const useCheckEmail = (email: string) => {
  const checkEmail = () =>
    axiosInstance.post<{ data: Result }>('check-email', {
      email: email,
    });

  const { execute, loading, error, data } = useAsync({
    asyncFunction: checkEmail,
    initLater: true,
  });

  return {
    execute,
    loading,
    error,
    data,
  };
};
