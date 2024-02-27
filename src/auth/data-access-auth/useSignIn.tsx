import { axiosInstance, useAsync } from '@/src/sharing/util';
import { useCallback, useEffect } from 'react';
import { Token } from '../type';
import { useMutation } from '@tanstack/react-query';

type UseSignInParams = { email: string; password: string };

export const useSignIn = ({ email, password }: UseSignInParams) => {
  const signIn = useCallback(
    () =>
      axiosInstance.post<Token>('sign-in', {
        email,
        password,
      }),
    [email, password]
  );

  const { data, isPending, isError, mutate } = useMutation({
    mutationFn: signIn,
  });

  const accessToken = data?.data.accessToken;

  useEffect(() => {
    if (accessToken) {
      localStorage.setItem('accessToken', accessToken);
    }
  }, [accessToken]);

  return {
    mutate,
    isPending,
    isError,
    data,
  };
};
