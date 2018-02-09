import myAxios from '../../myAxios';
import { AxiosResponse, AxiosRequestConfig } from 'axios';
import { refreshAcsToken } from '../authServices/refreshAcsToken';

export function setTokenInHeader(token: string) {
  // console.log(token);
  myAxios.defaults.headers = {
    Authorization: token
  };
}

export const refreshAndRepeat = (lastConfig: AxiosRequestConfig, logout: () => any) => {
  console.log('inside refresh and repeat');
  return refreshAcsToken()
    .then((response) => {
      console.log('token refreshed');
      setTokenInHeader(response.data.accessToken);
      lastConfig.headers.Authorization = response.data.accessToken;
      return myAxios.request(lastConfig);
    })
    .catch((error) => {
      console.log('caught error in refresh with code', error.response.status);
      if (error.response.status === 403) {
        logout();
      }
    });
};

export function addInterceptor(logout: () => any) {
  // console.log('now activating interceptor');
  myAxios.interceptors.response.use(
    (response: AxiosResponse<any>) => {
      return response;
    },
    (error: any) => {
      if (error.response.status === 401) {
        console.log('access token has to be refreshed');
        let lastConfig: AxiosRequestConfig = error.response.config;
        return refreshAndRepeat(lastConfig, logout);
      }
      return Promise.reject(error);
    });
}
