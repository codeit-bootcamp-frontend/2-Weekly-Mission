const validateEmail = (email: string) => {
  const result = { hasError: false, errorMessage: '' };
  if (!email.length) {
    result.hasError = true;
    result.errorMessage = '이메일을 입력해 주세요.';
  }
  return result;
};

export default validateEmail;
