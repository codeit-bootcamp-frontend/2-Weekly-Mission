import requestApi from "./GetData";

const DEFAULT_USER_ID = 1;

export async function getUserData(DEFAULT_USER_ID = 1) {
  return requestApi(`/users/${DEFAULT_USER_ID}`);
}

export async function getUserFoldersData(DEFAULT_USER_ID = 1) {
  return requestApi(`/users/${DEFAULT_USER_ID}/folders`);
}

export async function getAllLinksData(DEFAULT_USER_ID = 1) {
  return requestApi(`/users/${DEFAULT_USER_ID}/links`);
}

export async function getSelectData(id: number) {
  return requestApi(`/users/1/links?folderId=${id}`);
}
