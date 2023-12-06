export async function fetchProfile() {
  const response = await fetch(
    "https://bootcamp-api.codeit.kr/api/sample/user"
  );
  const result = await response.json();
  return result;
}

export async function fetchLinks() {
  const response = await fetch(
    "https://bootcamp-api.codeit.kr/api/sample/folder"
  );
  const result = await response.json();
  return result;
}

