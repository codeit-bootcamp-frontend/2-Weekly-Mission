import { axiosInstance } from '@/src/commons/util/axiosInstance';
import { useAsync } from '@/src/commons/util/useAsync';
import { Token } from '../type';

export const useSignIn = (email: string, password: string) => {
  const signIn = () =>
    axiosInstance.post<{ data: Token }>('sign-in', {
      email,
      password,
    });

  const { execute, loading, error, data } = useAsync({
    asyncFunction: signIn,
    initLater: true,
  });

  return {
    execute,
    loading,
    error,
    data,
  };
};
