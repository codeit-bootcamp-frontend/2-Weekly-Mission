const BASE_URL = "https://bootcamp-api.codeit.kr/";

export async function getFolder() {
  const response = await fetch(`${BASE_URL}api/sample/folder`);
  const folderType = await response.json();
  return folderType;
}

export async function getProfile() {
  const response = await fetch(`${BASE_URL}api/sample/user`);
  const userType = await response.json();
  return userType;
}

export async function getFolderList() {
  const response = await fetch(`${BASE_URL}api/users/1/folders`);
  const folderList = await response.json();
  return folderList;
}

export async function getFolderPageUsers() {
  const response = await fetch(`${BASE_URL}api/users/1`);
  const FolderPageUsers = await response.json();
  return FolderPageUsers;
}

export async function getFolderListAllMenu() {
  const response = await fetch(`${BASE_URL}api/users/1/links`);
  const FolderListAllMenu = await response.json();
  return FolderListAllMenu;
}
