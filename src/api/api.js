import axios from "./axios";

export async function getSampleUserProfile() {
  const res = await axios.get("sample/user");
  const sampleUserProfile = res.data;
  return sampleUserProfile;
}

export async function getSampleFolder() {
  const res = await axios.get("sample/folder");
  const sampleFolderData = res.data;
  return sampleFolderData;
}

export async function getUserProfile(userId) {
  const res = await axios.get(`/users/${userId}`);
  const UserProfile = res.data;
  return UserProfile;
}

export async function getUserLinks(userId, folderId = "") {
  const query = `?folderId=${folderId === 0 ? "" : folderId}`;
  const res = await axios.get(`users/${userId}/links${query}`);
  const userLinks = res.data;
  return userLinks;
}

export async function getUserFolders(userId) {
  const res = await axios.get(`users/${userId}/folders`);
  const userFolders = res.data;
  return userFolders;
}
