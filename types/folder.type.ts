import { Links } from "./global.type";

interface FolderLinks extends Links {
  folderId: number;
}

interface LinkData {
  id: number;
  folder_id: number;
  url: string;
  title: string;
  description: string;
  image_source: string;
  created_at: string;
  update_at: string;
}

interface Folder {
  name: string;
  links: FolderLinks[];
}

export type { FolderLinks, LinkData, Folder };
