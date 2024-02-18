import { Links } from "./global.type";

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
  links: Links[];
}

export type { LinkData, FolderData, FolderResponse, LinksResponse };
