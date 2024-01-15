import requestApi from "./RequestApi";

export async function getUserData() {
  return requestApi("/sample/user");
}

export async function getSharedFolderData() {
  return requestApi("/sample/folder");
}
