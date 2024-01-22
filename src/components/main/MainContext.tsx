import { createContext } from 'react';

export interface Folder {
  id: string;
  name: string;
  user_id?: number;
  link?: {
    count: number;
  };
}

export interface Card {
  id: string;
  title: string;
  url: string;
  description: string;
  image_source: string;
  created_at: string;
}

interface MainContext {
  selectedMenu: string;
  title: string;
  buttonOption: boolean;
  folderList: Folder[];
  cardList: Card[];
  searchKeyword: string;
  searchResult: Card[];
  cardUrl: string;
  userId: string;
  handleClickMenu: (folder: Folder) => void;
  handleChangeSearch: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const MainContext = createContext<MainContext>({
  selectedMenu: '',
  title: '',
  buttonOption: false,
  folderList: [],
  cardList: [],
  searchKeyword: '',
  searchResult: [],
  cardUrl: '',
  userId: '',
  handleClickMenu: () => {},
  handleChangeSearch: () => {},
});
export default MainContext;
