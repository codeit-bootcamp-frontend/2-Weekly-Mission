import getDate from "./GetData";

export async function getUserData() {
  return getDate("/sample/user");
}

export async function getSharedFolder() {
  return getDate("/sample/folder");
}
