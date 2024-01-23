import { SampleLinkRawData } from "@/src/link/type";

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

export type FolderRawData = {
  id: number;
  created_at: string;
  name: string;
  user_id: number;
  link: {
    count: number;
  };
};

export type Folder = {
  id: number;
  created_at: string;
  name: string;
  user_id: number;
};

export type SelectedFolderId = number | "all";
