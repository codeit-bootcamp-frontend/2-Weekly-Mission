import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { END_POINT } from "@/lib/constents";

export type HttpMethod = "GET" | "POST" | "PUT" | "DELETE";

export interface ServiceResponse<T> {
  data?: T | null;
  errorMessage: string | null;
}

const instance = axios.create({
  baseURL: END_POINT,
});

instance.interceptors.request.use(
  (config) => {
    // 기본 헤더 설정
    config.headers = config.headers ?? {};
    if (config.data instanceof FormData) {
      config.headers["Content-Type"] = "multipart/form-data";
    } else {
      config.headers["Content-Type"] = "application/json";
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export async function service<T, U>(
  method: HttpMethod,
  url: string,
  token?: string,
  data?: U
): Promise<ServiceResponse<T>> {
  const accessToken = token && token?.split("accessToken=")[1];
  const requestConfig: AxiosRequestConfig = {
    method,
    url,
    data,
    headers: {
      ...(token ? { Authorization: `Bearer ${accessToken}` } : {}),
    },
  };

  const response: AxiosResponse<T> = await instance(requestConfig);
  return { data: response.data, errorMessage: null };
}
