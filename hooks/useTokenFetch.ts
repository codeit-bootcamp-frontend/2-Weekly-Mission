import { useState, useEffect, useCallback } from "react";

function useTokenFetch<T>(url: string): T | null {
  const [fetchData, setFetchData] = useState<T | null>(null);

  const fetching = useCallback(
    async (token: string, controller: AbortController) => {
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
      }
    },
    [url]
  );

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    const controller = new AbortController();

    if (token) {
      fetching(token, controller);
    }

    return () => {
      controller.abort();
    };
  }, [fetching]);

  return fetchData;
}

export default useTokenFetch;
