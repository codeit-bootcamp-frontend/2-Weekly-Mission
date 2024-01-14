import type { FolderHeaderT,UserFolderT, UserHeaderT,FolderButtonsT, FolderLinksT  } from "../src/apiType"

const USER_URL = 'https://bootcamp-api.codeit.kr/api/sample/';
const FOLDER_URL = 'https://bootcamp-api.codeit.kr/api/users/1';


export async function HeaderApi(): Promise<UserHeaderT> {
  const query = await fetch(`${USER_URL}user`);
  const response = await query.json();
  return response;
}

export async function LoginProfile() : Promise<UserFolderT>{
  const query = await fetch(`${USER_URL}folder`);
  const response = await query.json();
  return response;
}

export async function FolderHeaderApi() : Promise<FolderHeaderT>{
  const query = await fetch(`${FOLDER_URL}`);
  const response = await query.json();
  return response;
}

export async function FolderButtonApi() : Promise<FolderButtonsT>{
  const query = await fetch(`${FOLDER_URL}/folders`);
  const response = await query.json();
  return response;
}

export async function FolderLoginProfile() : Promise<FolderLinksT> {
  const query = await fetch(`${FOLDER_URL}/links`);
  const response = await query.json();
  return response;
}
