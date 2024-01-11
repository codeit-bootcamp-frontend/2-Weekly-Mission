import axios from '@/lib/axios.js';
import { useEffect, useState } from 'react';

interface Response<T> {
  data: T;
}

export default function useGetData<T>(url: string, dependency?: any) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [data, setData] = useState<T | null>(null);

  const getData = async () => {
    try {
      const res = await axios.get<Response<T>>(url);
      const data = res.data.data;
      setData(data);
    } catch (error) {
      setError('error');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, [dependency]);

  return [loading, error, data] as const;
}
