// axios를 이용해 서버와 http 통신을 하는 컴포넌트

import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://bootcamp-api.codeit.kr/api/",
});
