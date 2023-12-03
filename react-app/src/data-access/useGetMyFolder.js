import { useAsync } from "../util/useAsync";
import { axiosInstance } from "util/axiosInstance";

export const useGetMyFolder = () => {
  const getUser = () => axiosInstance.get("users/1/folders");
  const { loading, error, data } = useAsync(getUser);
  return { loading, error, data };
};
