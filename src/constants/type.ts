export interface folderItem {
  id: number | undefined;
  name: string;
  created_at?: string;
  user_id?: number;
  favorite?: boolean;
  link?: {
    count: number;
  };
}

export interface linkItem {
  id: number;
  created_at: string;
  updated_at: null | string;
  url: string;
  title: null | string;
  description: null | string;
  image_source: null | string;
  folder_id: null | undefined | number;
}

export interface UserLinkItem {
  id: number;
  createdAt: string;
  updatedAt: null | string;
  url: string;
  title: null | string;
  description: null | string;
  imageSource: null | string;
  folderId: null | undefined | number;
}

export interface SampleUser {
  id: number;
  createdAt: string;
  url: string;
  title: null | string;
  description: null | string;
  imageSource: null | string;
}

export interface SampleUserFolder {
  id: number;
  name: string;
  owner: {
    id: number;
    name: string;
    profileImageSource: string;
  };
  links: UserLinkItem[];
}
