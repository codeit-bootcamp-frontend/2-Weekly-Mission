import axios from 'axios';

// axios 인스턴스(베이스 URL)
export const axiosInstance = axios.create({
  baseURL: 'https://bootcamp-api.codeit.kr/api/',
});
