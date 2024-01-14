import { createContext, useState, useEffect } from 'react';

import Api from 'apis/apiCall';
import { useAsync } from 'hooks/useAsync';

import { INITIAL_FOLDER_DATA } from 'constants/initialData';

export const FolderContext = createContext();

export const FolderProvider = ({ children }) => {
  const [storedData, setStoredData] = useState(INITIAL_FOLDER_DATA);
  const [currentId, setCurrentId] = useState(undefined);

  const {
    data: { data: filterData },
  } = useAsync(() => Api.getTargetFolder(currentId), INITIAL_FOLDER_DATA);

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
