import { Link } from "./commons";

export interface Folder {
  id: number;
  name: string;
  owner: {
    id: number;
    name: string;
    profileImageSource: string;
  };
  links: Link[];
}
