/** PersonalData의 공통된 부분 */
export interface IPersonalData {
  id?: number;
  created_at?: Date;
}

/** PersonalLinkData의 정보를 다루는 interface */
export interface IPCardData extends IPersonalData {
  // PersonalLinkData
  url?: string;
  title?: string;
  description?: string;
  image_source?: string;
  folder_id?: number;
}

/** PersonalFolderData의 정보를 다루는 interface */
export interface IPFolderData extends IPersonalData {
  // PersonalFolderData
  name?: string | undefined;
  user_id?: number;
  favorite?: boolean;
  link?: {
    count: number;
  };
}

/** Transfrom 된 Card정보를 다루는 interface */
export interface ITransformCardData {
  id: number;
  createdAt: Date;
  url: string;
  title: string;
  description: string;
  img?: string;
  folderId?: number;
}

/** UserData */
export interface IUserData extends IPersonalData {
  name?: string;
  image_source?: string;
  email?: string;
  auth_id?: string;
}

/** UserFolderData */
export interface IUserFolderData {
  id: number;
  name: string;
  owner: {
    id: number;
    name: string;
    profileImageSource: string;
  };
}

/** ModalData */
export interface IModalData {
  title?: string;
  sideTitle?: string;
  input?: HTMLInputElement;
  addLinkList?: any;
  button?: HTMLButtonElement;
  img?: HTMLImageElement;
}

/** Shared page CardData */
export interface ISharedPageCardData {
  id: string;
  createdAt: Date;
  url: string;
  title: string;
  description: string;
  imageSource: string;
}
