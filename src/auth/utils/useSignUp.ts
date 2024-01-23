import { axiosInstance } from '@/src/commons/util/axiosInstance';
import { useAsync } from '@/src/commons/util/useAsync';
import { Token } from '../type';

export const useSignUp = (email: string, password: string) => {
  const signUp = () =>
    axiosInstance.post<{ data: Token }>('sign-up', {
      email,
      password,
    });

  const { execute, loading, error, data } = useAsync({
    asyncFunction: signUp,
    initLater: true,
  });

  return {
    execute,
    loading,
    error,
    data,
  };
};
