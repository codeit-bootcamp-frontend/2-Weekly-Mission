import { BASE_URL } from "../../../lib/axios";
import axios from "axios";

export async function registerUser(email, password) {
  try {
    const response = await axios.post(`${BASE_URL}/auth/sign-up`, {
      email,
      password,
    });
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
}

export async function AvailableEmail(email) {
  try {
    const response = await axios.post(`${BASE_URL}/users/check-email`, {
      email,
    });
    return response; // 응답 전체를 반환하도록 수정
  } catch (error) {
    throw new Error(error.response.data.message);
  }
}
