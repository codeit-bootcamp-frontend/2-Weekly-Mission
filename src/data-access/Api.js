const BASE_URL = "https://bootcamp-api.codeit.kr/api";

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
