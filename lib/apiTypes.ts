export type Link = {
  id: string;
  created_at: string;
  updated_at: string;
  url: string;
  title: string;
  description: string;
  image_source: string;
  folder_id: string;
};

export type LinkList = Link[];

type Folder = {
  id: string;
  created_at: string;
  name: string;
  user_id: number;
  favorite: boolean;
  link: { count: number };
};

export type FolderList = Folder[];

type User = {
  id: string;
  created_at: string;
  name: string;
  image_source: string;
  email: string;
  auth_id: string;
};

export type UserData = User[];
