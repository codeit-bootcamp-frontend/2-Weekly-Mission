import { useAsync } from "../util/useAsync";
import { axiosInstance } from "util/axiosInstance";

export const useGetMyLinks = () => {
  const getUser = () => axiosInstance.get("/users/1/links");
  const { loading, error, data } = useAsync(getUser);
  return { loading, error, data };
};
