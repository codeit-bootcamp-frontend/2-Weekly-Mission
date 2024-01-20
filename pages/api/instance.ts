import { END_POINT } from "@/lib/constents";
import axios from "axios";

const apiClient = axios.create({
  baseURL: END_POINT,
  headers: {
    "Content-Type": "application/json",
  },
});

const setAuthToken = (token: string | undefined) => {
  if (token) {
    apiClient.defaults.headers.common["Authorization"] = `${token}`;
  } else {
    delete apiClient.defaults.headers.common["Authorization"];
  }
};

export { apiClient, setAuthToken };
