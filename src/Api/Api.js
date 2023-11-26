const API_URL = "https://bootcamp-api.codeit.kr/api";

export function getUserInfo(setUserInfo) {
  fetch(`${API_URL}/sample/user`)
    .then((response) => {
      if (!response.ok) throw new Error("유저 정보를 받는데 실패하였습니다.");
      return response.json();
    })
    .then((result) => {
      setUserInfo(result);
    });
}

export async function getFolderData(setFolderData) {
  const response = await fetch(`${API_URL}/sample/folder`);
  if (!response.ok) throw new Error("폴더 정보를 받는데 실패하였습니다.");

  const result = await response.json();
  await setFolderData(result.folder);
}
