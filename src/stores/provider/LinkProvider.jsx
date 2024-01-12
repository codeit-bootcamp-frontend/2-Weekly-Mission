import { createContext, useState, useEffect } from 'react';

import api from 'apis/api';
import { useAsync } from 'hooks/useAsync';

import { INITIAL_LINK_DATA } from 'constants/initialData';

export const LinkContext = createContext();

export const LinkProvider = ({ children }) => {
  const [storedData, setStoredData] = useState(INITIAL_LINK_DATA);

  const { data } = useAsync(() => api.get('/api/sample/folder', INITIAL_LINK_DATA));

  useEffect(() => {
    if (data) {
      setStoredData(data.folder);
    }
  }, [data]);

  return (
    <LinkContext.Provider value={{ storedData, setStoredData }}>
      {children}
    </LinkContext.Provider>
  );
};
