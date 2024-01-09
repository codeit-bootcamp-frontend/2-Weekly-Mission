import IconEyeOn from 'assets/svgs/eye-on.svg';
import IconEyeOff from 'assets/svgs/eye-off.svg';

export const ACCESS_TOKEN = 'accessToken';
export const REFRESH_TOKEN = 'refreshToken';
export const AUTHORIZATION = 'Authorization';
export const REFRESH_TOKEN_URL = '/api/refresh-token';

export const STATUS_CODE = {
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  CONFLICT_EMAIL: 409,
  SERVER_ERROR: 500,
  SUCCESS: 200,
};

export const REGEX = {
  email: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
  password: /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,15}$/,
};

export const AUTH_DATA = {
  email: process.env.USER_EMAIL,
  password: process.env.USER_PASSWORD,
};

export const ERROR_MSG = {
  email: {
    empty: '이메일을 입력해주세요.',
    invalid: '올바른 이메일 주소가 아닙니다.',
    check: '이메일을 확인해주세요.',
    confirm: '이미 사용 중인 이메일입니다.',
  },
  password: {
    empty: '비밀번호를 입력해주세요.',
    invalid: '비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.',
    check: '비밀번호를 확인해주세요.',
    confirm: '비밀번호가 일치하지 않아요.',
  },
};

export const PASSWORD_SHOW_MODE = {
  on: {
    iconEye: IconEyeOn,
    inputType: 'email',
    label: '비밀번호 보기',
  },
  off: {
    iconEye: IconEyeOff,
    inputType: 'password',
    label: '비밀번호 숨기기',
  },
};
