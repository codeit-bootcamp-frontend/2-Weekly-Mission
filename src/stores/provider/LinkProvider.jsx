import { createContext, useState, useEffect } from 'react';

import Api from 'apis/apiCall';
import { useAsync } from 'hooks/useAsync';

import { INITIAL_SHARED_DATA, INITIAL_LINK_DATA } from 'constants/initialData';

export const LinkContext = createContext();

export const LinkProvider = ({ children }) => {
  const [storedData, setStoredData] = useState(INITIAL_LINK_DATA);
  const {
    data: { folder },
  } = useAsync(() => Api.getSharedData(), INITIAL_SHARED_DATA);

  useEffect(() => {
    if (folder) {
      setStoredData(folder);
    }
  }, [folder]);

  return (
    <LinkContext.Provider value={{ storedData, setStoredData }}>
      {children}
    </LinkContext.Provider>
  );
};
