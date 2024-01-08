import axios from '@/lib/axios.js';
import { useEffect, useState } from 'react';

export default function useGetData(url: string, dependency?: any): [boolean, string, Array<object>] {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [data, setData] = useState<object[]>([]);

  const getData = async () => {
    try {
      const res = await axios.get(url);
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

  return [loading, error, data];
}
