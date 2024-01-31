import { ENDPOINTS } from '../../../config/endpoints';
import { callApi } from '../../../utils/apiRequest';
import type { LoginApiProps } from './types';
import { loginValidation } from './validation';

export const login = (parameters: LoginApiProps) => {
  if (loginValidation(parameters) === true) {
    return callApi(ENDPOINTS.LOGIN, parameters, 'post');
  } else {
    return loginValidation(parameters);
  }
};
