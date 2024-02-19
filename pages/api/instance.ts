import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { END_POINT } from "@/lib/constents";

export type HttpMethod = "GET" | "POST" | "PUT" | "DELETE";

export interface ServiceResponse<T> {
  data?: T | null;
  errorMessage: string | null;
}

const instance = axios.create({
  baseURL: END_POINT,
  timeout: 10000,
});

instance.interceptors.request.use(
  (config) => {
    config.headers = config.headers ?? {};
    if (config.data instanceof FormData) {
      config.headers["Content-Type"] = "multipart/form-data";
    } else {
      config.headers["Content-Type"] = "application/json";
    }

    return config;
  },
  (error) => Promise.reject(error)
);

export async function service<T, U>(
  method: HttpMethod,
  url: string,
  token?: string,
  data?: U
): Promise<ServiceResponse<T>> {
  try {
    const accessToken = token ? token.split("accessToken=")[1] : undefined;
    const requestConfig: AxiosRequestConfig = {
      method,
      url,
      data,
      headers: {
        ...(accessToken ? { Authorization: `Bearer ${accessToken}` } : {}),
      },
    };
    const response: AxiosResponse<T> = await instance(requestConfig);

    return { data: response.data, errorMessage: null };
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return { errorMessage: error.message };
    } else {
      return { errorMessage: "알수 없는 에러 발생" };
    }
  }
}
