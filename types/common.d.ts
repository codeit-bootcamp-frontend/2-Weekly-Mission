export interface Link {
  id: number;
  url: string;
  title: string;
  description?: string;
  image_source: string;
  created_at: string;
}

export interface PageUserInfo {
  id: number;
  created_at: string;
  name: string;
  image_source: string;
  email: string;
  auth_id: string;
}

export interface PageFolderInfo {
  id: number;
  created_at: string;
  name: string;
  user_id: number;
  favorite: boolean;
}

export interface Modal {
  name: string;
  isOpen: boolean;
}

export interface ModalControl {
  openModal: (text: string) => void;
  closeModal?: () => void;
}
