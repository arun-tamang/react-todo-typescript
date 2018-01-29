import axios from 'axios';
import { AxiosResponse, AxiosRequestConfig } from 'axios';
import { refreshAndRepeat } from './services/appService/axiosServices';

let myAxios = axios.create({
  baseURL: 'http://localhost:8848/api'
});

console.log('now activating interceptor');
myAxios.interceptors.response.use(
  (response: AxiosResponse<any>) => {
    return response;
  },
  (error: any) => {
    if (error.response.status === 401) {
      console.log('access token has to be refreshed');
      let lastConfig: AxiosRequestConfig = error.response.config;
      return refreshAndRepeat(lastConfig);
    }
    return Promise.reject(error);
  });

export default myAxios;
