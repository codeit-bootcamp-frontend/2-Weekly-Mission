import axios from "axios";
import { BASE_URL } from "../../../lib/axios";
import { parseCookies } from "nookies";

export async function fetchUserProfile() {
  // const { accessToken } = parseCookies();
  const { accessToken } =
    "eyJhbGciOiJIUzI1NiIsImtpZCI6IktLNE05TGFmMXkzWEI0M0kiLCJ0eXAiOiJKV1QifQ.eyJhdWQiOiJhdXRoZW50aWNhdGVkIiwiZXhwIjoxNzA5NDU5MTc1LCJpYXQiOjE3MDg4NTQzNzUsImlzcyI6Imh0dHBzOi8vanB2ZG9weWdibHJlZnpvbmV2ZnEuc3VwYWJhc2UuY28vYXV0aC92MSIsInN1YiI6ImRmNmZhYWEzLWI4MjItNDU2YS1iYzM4LTUzNDQ1ZDczODI1MyIsImVtYWlsIjoianNvNDA5M0BuYXZlci5jb20iLCJwaG9uZSI6IiIsImFwcF9tZXRhZGF0YSI6eyJwcm92aWRlciI6ImVtYWlsIiwicHJvdmlkZXJzIjpbImVtYWlsIl19LCJ1c2VyX21ldGFkYXRhIjp7fSwicm9sZSI6ImF1dGhlbnRpY2F0ZWQiLCJhYWwiOiJhYWwxIiwiYW1yIjpbeyJtZXRob2QiOiJwYXNzd29yZCIsInRpbWVzdGFtcCI6MTcwODg1NDM3NX1dLCJzZXNzaW9uX2lkIjoiNTgyNTE1NjMtN2EzNi00MmY2LWFiZDktZjljOGVmNGFmYzY4In0.SRLLJtMF9RZPUyWnlmdc30mdvBGz0MpptG5ABLw70SI";
  console.log("accessToken:", accessToken); // accessToken 확인

  try {
    if (!accessToken) {
      throw new Error("인증 토큰이 없습니다.");
    }

    const config = {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    };

    console.log("config:", config); // config 확인

    const response = await axios.get(`${BASE_URL}/users/{userId}`, config);
    console.log("response:", response); // response 확인

    return response.data;
  } catch (error) {
    console.error("fetchUserProfile 오류:", error); // 오류 확인
    throw new Error(
      error.response?.data?.message ||
        "사용자 프로필을 가져오는 중 오류가 발생했습니다."
    );
  }
}
