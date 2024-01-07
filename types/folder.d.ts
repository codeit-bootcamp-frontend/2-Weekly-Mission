import { Link } from "./commons";

export interface Folder {
  id: number;
  favorite: boolean;
  name: string;
  user_id: number;
  links: Link[];
}
