import API from 'constants/api';

export async function isUsableEmail(emailToBeChecked: string) {
  const emailData = {
    email: emailToBeChecked,
  };

  const res = await fetch(API.CHECK_EMAIL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(emailData),
  });

  const result = await res.json();
  const isUsable = !!result?.data;
  return isUsable;
}

interface userParam {
  email: string;
  password: string;
}

export async function signup(userInfo: userParam) {
  try {
    const res = await fetch(API.SIGN_UP, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userInfo),
    });
    if (res.status === 400) {
      const { error } = await res.json();
      throw new Error(error.message);
    }

    const { data } = await res.json();
    return data;
  } catch (err) {
    console.log('err', err);
  }
}

export async function signin(userInfo: userParam) {
  try {
    const res = await fetch(API.SIGN_IN, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userInfo),
    });
    if (res.status === 400) {
      const { error } = await res.json();
      throw new Error(error.message);
    }
    const { data } = await res.json();
    return data;
  } catch (err) {
    console.log('err', err);
  }
}
