import api from 'apis/api';

import { handleAuthenticationError } from './auth';
import LocalStorage from './localstorage';

import { redirectToPage } from 'utils';
import { ACCESS_TOKEN, REFRESH_TOKEN, STATUS_CODE, AUTHENTICATION } from 'constants/auth';

const {
  email: { errorMessage: emailError },
  password: { errorMessage: passwordError },
} = AUTHENTICATION;

// [Signin]
export const signin = async (data, setError) => {
  try {
    const { email, password } = data;
    const {
      data: {
        data: { accessToken, refreshToken },
      },
    } = await api.post('/api/sign-in', { email, password });

    LocalStorage.setItem(ACCESS_TOKEN, accessToken);
    LocalStorage.setItem(REFRESH_TOKEN, refreshToken);

    redirectToPage('/folder');
  } catch (e) {
    setError('email', { message: emailError.check });
    setError('password', { message: passwordError.check });
    handleAuthenticationError(e);
  }
};

// [Email Check]
export const emailConflictCheck = async (data, setError) => {
  try {
    const { email } = data;
    const res = await api.post('/api/check-email', { email });
    const { CONFLICT } = STATUS_CODE;

    // [409]이메일 중복
    if (res.status === CONFLICT) {
      const conflictError = new Error(`${CONFLICT}: 이메일 중복`);
      conflictError.status = CONFLICT;
      handleAuthenticationError(conflictError);
      return false;
    }

    return true;
  } catch (e) {
    setError('email', { message: emailError.confirm });
    handleAuthenticationError(e);
    return false;
  }
};

// [Signup]
export const signup = async (data) => {
  try {
    const { email, password } = data;
    const {
      data: {
        data: { accessToken, refreshToken },
      },
    } = await api.post('/api/sign-up', { email, password });

    LocalStorage.setItem(ACCESS_TOKEN, accessToken);
    LocalStorage.setItem(REFRESH_TOKEN, refreshToken);

    redirectToPage('/folder');
  } catch (e) {
    handleAuthenticationError(e);
  }
};
