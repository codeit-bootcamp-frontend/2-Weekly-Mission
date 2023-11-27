export default async function getReviews() {
  const response = await fetch("https://bootcamp-api.codeit.kr/docs/api/sample/user");
  const body = await response.json();
  return body;
}
