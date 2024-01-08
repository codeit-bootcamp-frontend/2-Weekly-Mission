import axios from "./axios";

export async function getSampleUserProfile() {
  const res = await axios.get("sample/user");
  const samplerUserProfile = res.data;
  return samplerUserProfile;
}

export async function getSampleFolder() {
  const res = await axios.get("sample/folder");
  const samplerFolderData = res.data;
  return samplerFolderData;
}
