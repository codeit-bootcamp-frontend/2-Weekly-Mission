import axios from "axios";
import API_BASE_URL from "../../constants";

const axiosInstance = axios.create();

axiosInstance.interceptors.response.use(
  (res) => res,
  async (error) => {
    const originalRequest = error.config;
    if (error.response?.status === 401 && !originalRequest._retry) {
      await axiosInstance.post(`${API_BASE_URL}refresh-token`, {
        _retry: true
      });
      originalRequest._retry = true;
      return axiosInstance(originalRequest);
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
