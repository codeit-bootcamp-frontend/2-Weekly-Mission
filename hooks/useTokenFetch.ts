import { useState, useEffect, useCallback } from "react";

function useTokenFetch<T>(url: string): { data: T | null; loading: boolean } {
  const [fetchData, setFetchData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const fetching = useCallback(
    async (token: string, controller: AbortController) => {
      setLoading(true);
      try {
        const response = await fetch(url, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          signal: controller.signal,
        });

        const data = (await response.json()) as T;
        setFetchData(data);
      } catch (error) {
        console.error(error);
        setFetchData(null);
      } finally {
        setLoading(false);
      }
    },
    [url]
  );

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    const controller = new AbortController();

    if (token) {
      fetching(token, controller);
    } else {
      setLoading(false);
    }

    return () => {
      controller.abort();
    };
  }, [fetching]);

  return { data: fetchData, loading };
}

export default useTokenFetch;
