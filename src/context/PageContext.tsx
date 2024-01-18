import { FolderItem, LinkItem } from 'constants/type';
import { createContext, useContext, useState } from 'react';
import React from 'react';

interface PageContextValue {
  folderList: FolderItem[];
  setFolderList: (value: FolderItem[]) => void;
  linkList: LinkItem[];
  setLinkList: (value: LinkItem[]) => void;
}

const initialValues = {
  folderList: [],
  setFolderList: () => {},
  linkList: [],
  setLinkList: () => {},
};

const PageContext = createContext<PageContextValue>(initialValues);

interface PageContextProviderProps {
  children: React.ReactNode;
  initialFolderList: FolderItem[];
  initialLinkList: LinkItem[];
}

const PageContextProvider = ({ children, initialFolderList, initialLinkList }: PageContextProviderProps) => {
  const [folderList, setFolderList] = useState<FolderItem[]>(initialFolderList);
  const [linkList, setLinkList] = useState<LinkItem[]>(initialLinkList);

  const contextValue: PageContextValue = {
    folderList,
    setFolderList,
    linkList,
    setLinkList,
  };

  return <PageContext.Provider value={contextValue}>{children}</PageContext.Provider>;
};

const usePageContext = () => {
  const context = useContext(PageContext);
  if (!context) throw new Error('PageContext.Provider 내부에서 사용해야합니다.');
  return context;
};

export { PageContext, PageContextProvider, usePageContext };
