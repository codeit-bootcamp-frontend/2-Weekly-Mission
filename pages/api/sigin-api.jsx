import axiosInstance from "../../lib/axious";

export async function signin(userData) {
  const res = await axiosInstance.post(`/sign-in`, userData);
  return res;
}
