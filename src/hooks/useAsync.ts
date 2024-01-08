import { useState, useEffect } from 'react';
import { AxiosResponse } from 'axios';

interface UseAsyncProps<T> {
  asyncFunction: () => Promise<AxiosResponse<T>>;
  initialData: T;
  initialExecution?: boolean;
}

export const useAsync = <T>({
  asyncFunction,
  initialData,
  initialExecution = true,
}: UseAsyncProps<T>) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState<null | any>(null);
  const [data, setData] = useState<T>(initialData);

  const execute = async () => {
    setIsLoading(true);
    setIsError(false);

    try {
      const res = await asyncFunction();
      setData(res.data);
    } catch (error) {
      setIsError(true);
      setError(error);
      console.error('[API ERROR] NOT FOUND FETCH DATA', error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (!initialExecution) return;
    execute();
  }, []);

  return { isLoading, isError, data, error, execute };
};
