export const getUserQueryKey = () => ['user'];

export const getFolderListQueryKey = () => ['folderList'];

export const getFolderQueryKey = (folderId: string | string[] | undefined) => [
  'folder',
  folderId,
];

export const getLinkListQueryKey = (
  folderId: string | string[] | undefined | number
) => (folderId ? ['linkList', folderId] : ['linkList']);
