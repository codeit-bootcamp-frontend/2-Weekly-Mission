import { Folder, FolderShown } from "@/src/folder/type";

export const mapFoldersData = (folders?: Folder[]): FolderShown[] => {
  if (!folders) return [];

  return folders.map((folder) => {
    const { id, created_at, name, user_id, favorite } = folder;

    return {
      id,
      createdAt: created_at,
      name,
      userId: user_id,
      favorite,
      linkCount: link.count,
    };
  });
};
