import { Link } from "./common";

export interface Folder {
  id: number;
  favorite: boolean;
  name: string;
  user_id: number;
  links: Link[];
}
