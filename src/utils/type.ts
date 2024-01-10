/** PersonalData의 공통된 부분 */
export interface IPersonalData {
  id?: number;
  created_at?: Date;
}

/** PersonalLinkData의 정보를 다루는 interface */
export interface IPLinkdata extends IPersonalData {
  // PersonalLinkData
  updated_at?: null | Date;
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

/** Filter 된 Card의 핸들링을 위해 Transfrom 된 Card정보를 다루는 interface */
export interface ITransformData {
  id: number;
  createdAt: Date;
  url: string;
  title: string;
  description: string;
  img: string;
  folderId?: number;
}

/** UserData */
export interface UserData extends IPersonalData {
  name?: string;
  image_source?: string;
  email?: string;
  auth_id?: string;
}

/** UserFolderData */
export interface IUserFolderData {
  id?: number;
  name?: string;
  owner?: {
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
