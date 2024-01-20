import axios from "axios";
import { END_POINT } from "@/lib/constents";

const instance = axios.create({
  baseURL: END_POINT,
});

// next.js node 서버에서 사용될 토큰
const setAuthToken = (token: string | undefined) => {
  if (token) {
    instance.defaults.headers.common["Authorization"] = `${token}`;
  } else {
    delete instance.defaults.headers.common["Authorization"];
  }
};

export { instance, setAuthToken };
