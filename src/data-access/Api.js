const BASE_URL = "https://bootcamp-api.codeit.kr/api";

// 유저 데이터 받아오기
export async function getUserData() {
  const response = await fetch(`${BASE_URL}/users/1`);
  if (!response.ok) {
    throw new Error("유저 데이터를 불러오는데 실패했습니다.");
  }

  const result = await response.json();
  const { data } = result;
  const userData = data[0];
  return userData;
}

// 폴더 '전체' 링크 받아오기
export async function getFolderLink() {
  const response = await fetch(`${BASE_URL}/users/1/links`);
  if (!response.ok) {
    throw new Error("폴더 링크 데이터를 불러오는데 실패했습니다.");
  }

  const result = await response.json();
  const { data } = result;
  return data;
}
