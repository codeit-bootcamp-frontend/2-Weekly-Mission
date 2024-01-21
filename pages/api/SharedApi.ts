import requestApi from "./RequestApi";

export async function getFolderData(folderId: string) {
  return requestApi(`folders/${folderId}`);
}

export async function getOwnerData(userId: string) {
  return requestApi(`users/${userId}`);
}
export async function getLinkData(userId: string, folderId: string) {
  return requestApi(`users/${userId}/links?folderId=${folderId}`);
}
