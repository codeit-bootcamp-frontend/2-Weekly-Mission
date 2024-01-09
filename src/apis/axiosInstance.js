import axios from 'axios';
import {
  ACCESS_TOKEN,
  REFRESH_TOKEN,
  AUTHORIZATION,
  REFRESH_TOKEN_URL,
  STATUS_CODE,
} from 'stores/auth';

const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  },
});

instance.interceptors.request.use(
  (config) => {
    const accessToken = localStorage.getItem(ACCESS_TOKEN);

    if (!accessToken) {
      return config;
    } else {
      config.headers['Content-Type'] = 'application/json';
      config.headers[AUTHORIZATION] = `${accessToken}`;
    }

    return config;
  },
  (error) => {
    console.error(error);
    return Promise.reject(error.response);
  }
);

instance.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    // 엑세스 토큰 만료
    const { UNAUTHORIZED } = STATUS_CODE;

    // [401]
    if (error.response?.status === UNAUTHORIZED) {
      // 토큰 갱신
      const response = await postRefreshToken();

      if (response) {
        localStorage.setItem(ACCESS_TOKEN, response.accessToken);
        localStorage.setItem(REFRESH_TOKEN, response.refreshToken);
        error.config.headers[AUTHORIZATION] = `Bearer ${response.accessToken}`;

        const originalResponse = await axios.request(error.config);
        return originalResponse;
      } else {
        localStorage.clear();
        redirectToPage();
      }
    }
    return Promise.reject(error);
  }
);

async function postRefreshToken() {
  try {
    // 리프레시 토큰으로 엑세스 토큰 갱신
    const refreshToken = localStorage.getItem(REFRESH_TOKEN);

    const headers = {
      'Content-Type': 'application/json',
      refresh_token: refreshToken,
    };

    const { data } = await instance.post(REFRESH_TOKEN_URL, {}, { headers });

    return refreshResponse(data);
  } catch (e) {
    console.error(e);
  }
}

// 서버 응답
function refreshResponse(data) {
  return data.flag === 'success' ? data.data[0] : false;
}

export default instance;
