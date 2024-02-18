import axios from "axios";
import { API_PATH } from "./constents";
import { FieldValues } from "react-hook-form";

export const postAuth = async (type: string, data: FieldValues) => {
  const response = await axios.post(API_PATH.POST_AUTH(type), data);
  return response.data;
};

export const checkedEmail = async (email: string) => {
  try {
    await axios.post(API_PATH.POST_CHECKEMAIL, { email });
    return true;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return "이미 사용중인 이메일입니다.";
    }
    throw error;
  }
};
export const fetchFolder = async () => {
  const { data } = await axios.get(API_PATH.FOLDER);
  return data;
};

export async function putFolder({ id, ...data }: { id: string; name: string }) {
  const response = await axios.put(API_PATH.SELECTED_FOLDER(id), data);
  return response.data;
}

export async function deleteFolder(id: string) {
  const response = await axios.delete(API_PATH.SELECTED_FOLDER(id), { params: id });
  return response.data;
}

export const postFolder = async (data: FieldValues) => {
  const response = await axios.post(API_PATH.FOLDER, data);
  return response.data;
};

export const fetchSelectedLinks = async (id: string) => {
  const { data } = await axios.get(API_PATH.SELECTED_FOLDER_LINKS(id));
  return data;
};
export const fetchLinks = async () => {
  const { data } = await axios.get(API_PATH.LINKS);
  return data;
};

export const postLink = async ({ id, ...data }: { id: string; url: string }) => {
  const response = await axios.post(API_PATH.SELECTED_FOLDER_LINKS(id), data);
  return response.data;
};

export const deleteLink = async (id: string) => {
  const response = await axios.delete(API_PATH.SELECTED_FOLDER_LINKS(id));
  return response.data;
};

export const fetchUser = async () => {
  const { data } = await axios.get(API_PATH.USER);
  return data[0];
};
