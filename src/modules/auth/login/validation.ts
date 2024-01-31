import { EMAIL_REGEX } from '../../../config/regex';
import type { LoginApiProps } from './types';

const validatePassword = (password: string) => {
  return password.length >= 8;
};

const validateEmail = (email: string) => {
  return EMAIL_REGEX.test(email);
};

export const loginValidation = (parameters: LoginApiProps) => {
  if (!validateEmail(parameters.email)) {
    return {
      status: 'error',
      message: 'Invalid email',
      code: 400,
    };
  }
  if (!validatePassword(parameters.password)) {
    return {
      status: 'error',
      message: 'Password must be at least 8 characters',
      code: 400,
    };
  }
  return true;
};
