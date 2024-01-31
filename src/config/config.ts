let baseUrl: string = '';
let accessToken: string = '';

const setBaseUrl = (url: string) => {
  console.log('setBaseUrl called', url);
  baseUrl = url;
};

const getBaseUrl = () => {
  console.log('getbaseUrl called', baseUrl);
  return baseUrl;
};

const setAccessToken = (token: string) => {
  accessToken = token;
};

const getAccessToken = () => {
  return accessToken;
};

export { getAccessToken, getBaseUrl, setAccessToken, setBaseUrl };
