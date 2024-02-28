import requestApi from "./RequestApi";

export async function getAllLinkData() {
  return requestApi(`links`);
}

export async function getUserData() {
  return requestApi(`users`);
}

export async function getAllFolderData() {
  return requestApi(`folders`);
}

export async function getSelectData(folderId: string) {
  return requestApi(`links?folderId=${+folderId}`);
}

export async function getLinkData(folderId: string) {
  return requestApi(`folders/${+folderId}/links`);
}
