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

interface FolderData {
  id: number;
  created_at: string;
  name: string;
  user_id: number;
  favorite: boolean;
  link_count: number;
}

interface FolderResponse {
  ok: boolean;
  folder: FolderData[];
}

interface LinksResponse {
  ok: boolean;
  links: FolderLinks[];
}

export type { FolderLinks, LinkData, FolderData, FolderResponse, LinksResponse };
