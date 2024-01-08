import { folderItem, linkItem } from 'constants/type';
import { createContext, useContext, useState } from 'react';
import React from 'react';

interface folderInfo {
  id: number;
  name: string;
}

interface SearchContextValue {
  searchValue: string;
  setSearchValue: (value: string) => void;
  selectedFolder: folderInfo;
  setSelectedFolder: (value: folderInfo) => void;
  folderList: folderItem[];
  setFolderList: (value: folderItem[]) => void;
  linkList: linkItem[];
  setLinkList: (value: linkItem[]) => void;
}

const initialValues = {
  searchValue: '',
  setSearchValue: () => {},
  selectedFolder: { id: 0, name: '' },
  setSelectedFolder: () => {},
  folderList: [],
  setFolderList: () => {},
  linkList: [],
  setLinkList: () => {},
};

const SearchContext = createContext<SearchContextValue>(initialValues);

const SearchContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [searchValue, setSearchValue] = useState<string>(initialValues.searchValue);
  const [selectedFolder, setSelectedFolder] = useState<folderInfo>(initialValues.selectedFolder);
  const [folderList, setFolderList] = useState<folderItem[]>(initialValues.folderList);
  const [linkList, setLinkList] = useState<linkItem[]>(initialValues.linkList);

  const contextValue: SearchContextValue = {
    searchValue,
    setSearchValue,
    selectedFolder,
    setSelectedFolder,
    folderList,
    setFolderList,
    linkList,
    setLinkList,
  };

  return <SearchContext.Provider value={contextValue}>{children}</SearchContext.Provider>;
};

const useSearchContext = () => {
  const context = useContext(SearchContext);
  if (!context) throw new Error('SearchContext.Provider 내부에서 사용해야합니다.');
  return context;
};

export { SearchContext, SearchContextProvider, useSearchContext };
