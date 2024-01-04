import { SampleLinkRawData } from '../link/type';

// 샘플 폴더 미가공 데이터 타입 선언
export type SampleFolderRawData = {
  id: number;
  name: string;
  owner: {
    id: number;
    name: string;
    profileImageSource: string;
  };
  links: SampleLinkRawData[];
};

// 폴더 미가공 데이터 타입 선언
export type FolderRawData = {
  id: number;
  created_at: string;
  name: string;
  user_id: number;
  link: {
    count: number;
  };
};

// 폴더 데이터 선언
export type Folder = {
  id: number;
  createdAt: string;
  name: string;
  userId: number;
  linkCount: number;
};

// 탭에서 선택된 폴더 아이디 타입 선언
export type SelectedFolderId = number | 'all';
