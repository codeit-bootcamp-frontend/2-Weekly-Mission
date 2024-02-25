import instance from './axiosInstance';
import LocalStorage from 'services/localstorage';
import { ACCESS_TOKEN, REFRESH_TOKEN, STATUS_CODE } from 'constants/auth';
import { redirectToPage } from 'utils';

const Auth = {
  signin: async (authData) => {
    try {
      const {
        data: { accessToken, refreshToken },
      } = await instance.post('/auth/sign-in', authData);

      LocalStorage.setItem(ACCESS_TOKEN, accessToken);
      LocalStorage.setItem(REFRESH_TOKEN, refreshToken);
    } catch (e) {
      console.error(e);
      throw e;
    }
  },
  signup: async (authData) => {
    try {
      const res = await instance.post('/auth/sign-up', authData);
      if (res.status === 200) {
        redirectToPage('/signin');
      }
    } catch (e) {
      if (e.response.status === 400) {
        console.error(e);
        throw e;
      }
    }
  },
  checkEmail: async (authData) => {
    const { email } = authData;
    const { CONFLICT } = STATUS_CODE;
    try {
      const res = await instance.post('/users/check-email', email);

      if (res.status === CONFLICT) {
        const conflictError = new Error(`${CONFLICT}: 이메일 중복`);
        conflictError.status = CONFLICT;
        console.error(conflictError);
      }
    } catch (e) {
      console.error(e);
      throw e;
    }
  },
};

export default Auth;
