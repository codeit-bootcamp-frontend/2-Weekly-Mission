const BASE_URL = "https://bootcamp-api.codeit.kr/api/sample";

export async function getLinksData() {
  const response = await fetch(`${BASE_URL}/folder`);
  if (!response.ok) {
    throw new Error("데이터를 불러오는데 실패했습니다.");
  }

  const result = await response.json();
  const { folder } = result;
  return folder;
}
