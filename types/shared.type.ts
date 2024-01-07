import { Links } from "./global.type";

interface SharedData {
  id: number;
  name: string;
  owner: {
    id: number;
    name?: string;
    profileImageSource?: string;
  };
  links: Links[];
}

interface Shared {
  ok: boolean;
  folder: SharedData;
}

export type { Shared, SharedData };
