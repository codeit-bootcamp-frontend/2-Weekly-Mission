import axiosInstance from "axios";
import API_BASE_URL from "../../constants";
import axios from "axios";

export async function signUp(email: string, password: string) {
  try {
    const response = await axiosInstance.post(`${API_BASE_URL}sign-up`, {
      email,
      password
    });

    if (response.status === 200) {
      const data = response.data;
      localStorage.setItem("signUpAccessToken", data.data.accessToken);
      window.location.href = "../folder";
    }
  } catch (error) {
    console.log(error);
  }
}

export async function isDuplicateEmail(email: string) {
  try {
    const response = await axiosInstance.post(`${API_BASE_URL}check-email`, {
      email
    });
    if (response?.status === 200) {
      return true;
    }
  } catch (error) {
    console.error(error);
    return "이미 사용중인 이메일입니다.";
  }
}

export async function signIn(
  email: string,
  password: string,
  setError: (inputName: string, { message }: { message: string }) => void
) {
  try {
    const response = await axiosInstance.post(`${API_BASE_URL}sign-in`, {
      email,
      password
    });

    if (response.status === 200) {
      localStorage.setItem("accessToken", response.data.data.accessToken);
      window.location.href = "../folder";
    }
  } catch (error) {
    setError("password", {
      message: "비밀번호를 확인해주세요."
    });
    setError("email", {
      message: "이메일을 확인해주세요."
    });
  }
}
