import myAxios from '../../myAxios';
import { AxiosRequestConfig } from 'axios';
import { refreshAcsToken } from '../authServices/refreshAcsToken';
import { forcedLogout } from '../../actions/appActionCreators';
import store from '../../store';

export function setTokenInHeader(token: string) {
  // console.log(token);
  myAxios.defaults.headers = {
    Authorization: token
  };
}

export const refreshAndRepeat = (lastConfig: AxiosRequestConfig) => {
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
      if (error.response.status === 404) {
        store.dispatch(forcedLogout());
      }
    });
};
