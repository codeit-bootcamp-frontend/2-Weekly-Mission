export const QUERY_KEYS = {
  folder: ["folder"],
  selectedFolder: (id: string) => ["folder", id],
  links: ["links"],
  selectedFolderLinks: (id: string) => ["selectedFolder", id],
  user: ["user"],
};
