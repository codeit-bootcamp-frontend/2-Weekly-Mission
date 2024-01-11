import { axiosInstance } from '@/src/commons/util/axiosInstance';
import { useAsync } from '@/src/commons/util/useAsync';

type Token = {
  accessToken: string;
  refreshToken: string;
};

export const useSignIn = (email: string, password: string) => {
  const signIn = () =>
    axiosInstance.post<{ data: Token }>('sign-in', {
      email: email,
      password: password,
    });

  const { execute, loading, error, data } = useAsync(signIn, true);

  return {
    execute,
    loading,
    error,
    data,
  };
};
