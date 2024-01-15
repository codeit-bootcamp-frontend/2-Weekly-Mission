import { emailConflictCheck } from './api';
import { AUTHENTICATION } from 'constants/auth';

const {
  passwordConfirm: { errorMessage: passwordConfirmError },
} = AUTHENTICATION;

export const handleValidation = async (data, setError) => {
  const isPasswordConfirm = handlePasswordConfirm(data, setError);
  if (!isPasswordConfirm) return false;

  const isEmailConflitCheck = await emailConflictCheck(data, setError);
  if (!isEmailConflitCheck) return false;
};

export const handlePasswordConfirm = (data, setError) => {
  if (data.password !== data.passwordConfirm) {
    setError('passwordConfirm', { message: passwordConfirmError.confirm });
    return false;
  }
  return true;
};

export const handleAuthenticationError = (e) => {
  console.error(`Request Error: ${e.message}`);
};
