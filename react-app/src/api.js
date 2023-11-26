const getUserData = async () => {
  try {
    const response = await fetch("https://bootcamp-api.codeit.kr/api/sample/user");
    const user = await response.json();
    return user;
  } catch {
    console.log("err");
  }
};

export const getUserEmail = async () => {
  const userData = await getUserData();
  return userData.email;
};

export const getUserProfileImg = async () => {
  const userData = await getUserData();
  return userData.profileImageSource;
};

const getFolderData = async () => {
  const response = await fetch("https://bootcamp-api.codeit.kr/api/sample/folder");
  const folder = await response.json();
  return folder;
};
export const getFolderUserImg = async () => {
  const folderData = await getFolderData();
  const userImg = folderData.folder.owner?.profileImageSource;
  return userImg;
};

export const getFolderUserName = async () => {
  const folderData = await getFolderData();
  const userName = folderData.folder.owner?.name;
  return userName;
};

export const getFolderName = async () => {
  const folderData = await getFolderData();
  const folderName = folderData.folder.name;
  return folderName;
};

export const getFolderCardData = async () => {
  const folderData = await getFolderData();
  const cardData = folderData.folder.links;
  return cardData;
};
