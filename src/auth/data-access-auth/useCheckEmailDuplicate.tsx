import { axiosInstance, useAsync } from '@/src/sharing/util';
import { useMutation } from '@tanstack/react-query';
import { useCallback } from 'react';

export const useCheckEmailDuplicate = (email: string) => {
  const checkEmailDuplicate = useCallback(
    () =>
      axiosInstance.post<{ isUsableNickname: boolean }>('users/check-email', {
        email,
      }),
    [email]
  );

  const { data, isPending, isError, mutate } = useMutation({
    mutationFn: checkEmailDuplicate,
  });

  return {
    mutate,
    isPending,
    isError,
    data,
  };
};
