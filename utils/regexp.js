export const errorMessages = {
  emailEmpty: "이메일을 입력해 주세요.",
  emailValid: "올바른 이메일 주소가 아닙니다.",
  emailUsed: "이미 사용 중인 이메일입니다.",
  passwordEmpty: "비밀번호를 입력해 주세요.",
  passwordValid: "비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.",
  passwordNotCorrect: "비밀번호가 일치하지 않아요.",
};

export const emailRegex =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

export const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
