export interface FormValues {
  email: string;
  password: string;
  doubleCheckPassword: string;
}

export type validation = {
  required: '이메일을 입력해주세요.' | '비밀번호를 입력해주세요.';
  pattern?: {
    value: RegExp;
    message: '올바른 이메일 주소가 아닙니다.' | '비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.';
  };
  validate?: {
    check: (val: string) => string | undefined;
  };
};
