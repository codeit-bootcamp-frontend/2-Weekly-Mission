import { useEffect, useState } from 'react';
import { AxiosResponse } from 'axios';

type UseAsyncParams<T> = {
  asyncFunction: () => Promise<AxiosResponse<T>>;
  initLater?: boolean;
  reload?: boolean; // 새로고침용
};

// 비동기 처리 커스텀 훅
export const useAsync = <T>({
  asyncFunction,
  initLater = false,
  reload = true,
}: UseAsyncParams<T>) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<null | any>(null);
  const [data, setData] = useState<null | T>(null);

  //   비동기 호출
  const execute = async () => {
    setLoading(true);
    setError(null);
    setData(null);
    try {
      const response = await asyncFunction();
      setData(response?.data ?? null);
      return response;
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (reload && !initLater) {
      execute();
    }
  }, [reload, initLater]);

  //   로딩, 에러, 데이터 반환
  return { execute, loading, error, data };
};
