import axios from "axios";

const baseURL = "https://bootcamp-api.codeit.kr/api";

export async function signIn(email, password, setError) {
  try {
    const res = await axios.post(`${baseURL}/sign-in`, {
      email,
      password,
    });
    if (res.status === 200) {
      const accessToken = res.config.data;
      localStorage.setItem("signInAccessToken", accessToken);
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

export async function signUp(email, password) {
  try {
    const res = await axios.post(`${baseURL}/sign-up`, { email, password });
    if (res.status === 200) {
      const accessToken = res.config.data;
      localStorage.setItem("signUpAccessToken", accessToken);
      window.location.href = "/folder";
    }
  } catch (error) {
    console.error(error);
  }
}

export async function checkEmail(email, setError) {
  try {
    const res = await axios.post(`${baseURL}/check-email`, { email });
    if (res?.status === 200) {
      return true;
    }
  } catch (error) {
    setError("email", {
      message: "이미 사용중인 이메일입니다.",
    });
  }
}