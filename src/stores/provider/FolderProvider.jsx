import { createContext, useState, useEffect } from 'react';

import api from 'apis/api';
import { useAsync } from 'hooks/useAsync';

import { INITIAL_FOLDER_DATA } from 'constants/initialData';

export const FolderContext = createContext();

export const FolderProvider = ({ children }) => {
  const [storedData, setStoredData] = useState(INITIAL_FOLDER_DATA);
  const [currentId, setCurrentId] = useState(undefined);

  const params = currentId ? `?folderId=${currentId}` : '';
  const {
    data: { data: filterData },
  } = useAsync(() => api.get('/api/users/1/links' + params), INITIAL_FOLDER_DATA);

  useEffect(() => {
    if (filterData) {
      setStoredData(filterData);
    }
  }, [filterData, currentId]);

  return (
    <FolderContext.Provider
      value={{ storedData, setStoredData, currentId, setCurrentId }}
    >
      {children}
    </FolderContext.Provider>
  );
};
