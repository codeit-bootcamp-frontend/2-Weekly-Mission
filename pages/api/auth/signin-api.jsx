import { BASE_URL } from "../../../lib/axios";
import axios from "axios";
export async function loginUser(email, password) {
  try {
    const response = await axios.post(`${BASE_URL}/auth/sign-in`, {
      email,
      password,
    });

    // 응답 객체가 존재하고, data 속성이 있는지 확인
    if (response && response.data) {
      return response.data;
    } else {
      throw new Error("응답 데이터가 유효하지 않습니다.");
    }
  } catch (error) {
    // 응답이 오류인 경우
    throw new Error(
      error.response?.data?.message || "로그인 중 오류가 발생했습니다."
    );
  }
}
