export type UserHeaderT = {
  id: number;
  name: string;
  email: string;
  profileImageSource: string;
  (prevState: undefined): undefined;
};

export type UserFolderT = {
  folder: UserFolderT;
  id: number;
  name: string;
  owner: Owner;
  links: Link[];
  count: number;
  (prevState: null): null;
};

type Link = {
  id: number;
  createdAt: string;
  url: string;
  title: string;
  description: string;
  imageSource: string;
};

type Owner = {
  id: number;
  name: string;
  profileImageSource: string;
};

export type FolderHeaderT = {
  data: FolderHeaderT[];
  id: number;
  created_at: string;
  name: string;
  image_source: string;
  email: string;
  auth_id: string;
};

export type FolderButtonsT = {
  data: FolderButtonsT[];
  id: number;
  created_at: string;
  name: string;
  user_id: string;
  favorite: boolean;
  link: FolderButtonLinkT;
};

type FolderButtonLinkT = {
  count: number;
};

export type FolderLinksT = {
  data: FolderLinksT[];
  id: number;
  created_at: string;
  updated_at: string | null;
  url: string;
  title: string | null;
  description: string | null;
  image_source: string | null;
  folder_id: number | null;
};
