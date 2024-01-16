import axios from "axios";

const API_ENDPOINT = "https://bootcamp-api.codeit.kr/api";

export async function signUp(email: string, password: string) {
  try {
    const res = await axios.post(`${API_ENDPOINT}/sign-up`, { email, password });

    if (res.status === 200) {
      const data = res.data;
      localStorage.setItem("signUpAccessToken", JSON.stringify(data.accessToken));
      window.location.href = "/folder";
    }
  } catch (error) {
    console.error(error);
  }
}

export async function checkDuplicateEmail(email: string) {
  try {
    const res = await axios.post(`${API_ENDPOINT}/check-email`, { email });
    if (res?.status === 200) {
      return true;
    }
  } catch (error) {
    console.error(error);
    return "이미 사용중인 이메일입니다.";
  }
}

export async function signIn(email: string, password: string, setError: any) {
  try {
    const res = await axios.post(`${API_ENDPOINT}/sign-in`, { email, password });
    if (res.status === 200) {
      localStorage.setItem("signInAccessToken", JSON.stringify(res.data.accessToken));
      window.location.href = "/folder";
    }
  } catch (error) {
    setError("password", {
      message: "비밀번호를 확인해주세요.",
    });
    setError("email", {
      message: "이메일을 확인해주세요.",
    });
  }
}
