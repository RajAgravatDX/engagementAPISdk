import { ENDPOINTS } from '../../../config/endpoints';
import { callApi } from '../../../utils/apiRequest';
import type { GetAvailableClassesProps } from './types';

export const getAvailableClasses = (parameters: GetAvailableClassesProps) => {
  console.log('getAvailableClasses_api_function_called');
  return callApi(ENDPOINTS.GET_AVAILABLE_CLASSES, parameters, 'post');
};
