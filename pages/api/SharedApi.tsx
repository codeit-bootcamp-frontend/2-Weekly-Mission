import getDate from "./RequestApi";

export async function getUserData() {
  return getDate("/sample/user");
}

export async function getSharedFolderData() {
  return getDate("/sample/folder");
}
