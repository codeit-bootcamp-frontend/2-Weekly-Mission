const BASE_URL = "https://bootcamp-api.codeit.kr/api";

export const postSignIn = async (data) => {
  const response = await fetch(`${BASE_URL}/sign-in`, {
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify(data),
  });
  const body = await response.json();
  return body;
};

export const postSignUp = async (data) => {
  const response = await fetch(`${BASE_URL}/sign-up`, {
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify(data),
  });
  const body = await response.json();
  body.isUsableEmail = await checkIfUsable({ email: data.email });
  return body;
};

const checkIfUsable = async (email) => {
  const response = await fetch(`${BASE_URL}/check-email`, {
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify(email),
  });
  return response.ok ? true : false;
};
