import axios from 'axios';

const baseURL = axios.create({
  baseURL: 'https://bootcamp-api.codeit.kr/api',
});

export default baseURL;
