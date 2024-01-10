import { fetchData } from "../utils/fetchData";

export async function getShareCardData() {
  try {
    return await fetchData("https://bootcamp-api.codeit.kr/api/sample/folder");
  } catch (e) {
    console.log(e);
  }
}
