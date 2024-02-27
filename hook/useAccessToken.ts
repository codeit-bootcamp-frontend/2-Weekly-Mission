import { useState, useEffect } from "react";

export function useAccessToken() {
  const [accessToken, setAccessToken] = useState<string | null>(null);

  useEffect(() => {
    const storedToken = localStorage.getItem("accessToken");
    setAccessToken(storedToken);
  }, []);

  const saveAccessToken = (token: string) => {
    localStorage.setItem("accessToken", token);
    setAccessToken(token);
  };

  const removeAccessToken = () => {
    localStorage.removeItem("accessToken");
    setAccessToken(null);
  };

  return { accessToken, saveAccessToken, removeAccessToken };
}
