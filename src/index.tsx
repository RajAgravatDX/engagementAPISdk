import { setAccessToken, setBaseUrl } from './config/config';
import { login } from './modules/auth/login';
import { getAvailableClasses } from './modules/classes/getAvailableClasses';

export { getAvailableClasses, login, setAccessToken, setBaseUrl };
