import NetInfo from '@react-native-community/netinfo';
import axios from 'axios';
import { getAccessToken, getBaseUrl } from '../config/config';

axios.interceptors.request.use(
  async function (config) {
    let bearerToken = '';
    bearerToken = getAccessToken();
    console.log('bearerToken_inSDK->', bearerToken);
    if (
      bearerToken !== undefined &&
      bearerToken !== null &&
      bearerToken !== ''
    ) {
      config.headers.Authorization = `Bearer ${bearerToken}`;
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  async function (response) {
    return response;
  },
  function (error) {
    return error;
  }
);

export const callApi = async (path: string, parameters: {}, method: string) => {
  const netInfoState = await NetInfo.fetch();

  console.log('isConnected->', netInfoState.isConnected);

  if (netInfoState.isConnected) {
    const url = [getBaseUrl(), path].join('');

    console.log('api_url=>', url);

    switch (method) {
      case 'get':
        return axios.get(url, parameters);

      case 'post':
        return axios.post(url, parameters);

      case 'put':
        return axios.put(url, parameters);

      case 'delete':
        return axios.delete(url, parameters);

      default:
        return { message: 'please select valid mothod' };
    }
  } else {
    return {
      status: 'error',
      message: 'Please check your internet connection',
      code: 503,
    };
  }
};
