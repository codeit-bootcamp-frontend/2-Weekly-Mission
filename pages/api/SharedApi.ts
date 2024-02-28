import requestApi from "./RequestApi";

export async function getFolderData(folderId: string) {
  return requestApi(`folders/${folderId}`);
}

export async function getOwnerData(userId: number) {
  return requestApi(`users/${userId}`);
}
export async function getLinkData(folderId: string) {
  return requestApi(`folders/${folderId}/links`);
}
