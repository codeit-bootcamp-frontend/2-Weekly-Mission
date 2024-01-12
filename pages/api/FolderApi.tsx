import requestApi from "./GetData";

export async function getFolderUserData() {
  return requestApi("/users/1");
}

export async function getFoldersData() {
  return requestApi("/users/1/folders");
}

export async function getAllLinksData() {
  return requestApi("/users/1/links");
}

export async function getSelectData(id: number) {
  return requestApi(`/users/1/links?folderId=${id}`);
}
