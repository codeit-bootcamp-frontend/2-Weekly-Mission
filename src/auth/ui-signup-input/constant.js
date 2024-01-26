export const EYEOFF_IMAGE = "../images/eye-off.svg";
export const EYEON_IMAGE = "../images/eye-on.svg";

export const EMAIL_REGEX = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i;
export const PASSWORD_REGEX = /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,25}$/;

export const ERROR_MESSAGE = {
  emailRequired: "이메일을 입력해 주세요",
  emailInvalid: "올바른 이메일 주소가 아닙니다",
  emailAlreadyExist: "이미 사용 중인 이메일입니다",
  passwordRequired: "비밀번호를 입력해 주세요",
  passwordInvalid: "비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요",
  confirmedPasswordNotMatch: "비밀번호가 일치하지 않아요",
};
