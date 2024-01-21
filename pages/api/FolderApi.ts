import requestApi from "./RequestApi";

const DEFAULT_USER_ID = "1";

export async function getUserData(userId = DEFAULT_USER_ID) {
  return requestApi(`users/${userId}`);
}

export async function getUserFoldersData(userId = DEFAULT_USER_ID) {
  return requestApi(`users/${userId}/folders`);
}

export async function getAllLinksData(userId = DEFAULT_USER_ID) {
  return requestApi(`users/${userId}/links`);
}

export async function getSelectData(folderId: string) {
  return requestApi(`links?folderId=${folderId}`);
}
