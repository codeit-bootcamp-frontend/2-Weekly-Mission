import axios from 'axios';

// axios 인스턴스(베이스 URL)
export const axiosInstance = axios.create({
  baseURL: 'https://bootcamp-api.codeit.kr/api/',
});

// 인터셉터
axiosInstance.interceptors.request.use((config) => {
  const accessToken = localStorage.getItem('accessToken');
  if (accessToken) {
    config.headers['Authorization'] = `Bearer ${accessToken}`;
  }
  return config;
});
