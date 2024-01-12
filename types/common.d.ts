export interface Link {
  id: number;
  url: string;
  title: string;
  description?: string;
  image_source: string;
  created_at: string;
}

export interface UserInfo {
  id: number;
  name: string;
  email: string;
  profileImageSource: string;
}

export interface Modal {
  name: string;
  isOpen: boolean;
}

export interface OpenModal {
  openModal: (text: string) => void;
}
export interface CloseModal {
  closeModal: () => void;
}

export interface FolderPageData {
  id: number;
  favorite: boolean;
  name: string;
  user_id: number;
  links: Link[];
}

export interface SharedPageData {
  id: number;
  name: string;
  owner: {
    id: number;
    name: string;
    profileImageSource: string;
  };
  links: Link[];
}
