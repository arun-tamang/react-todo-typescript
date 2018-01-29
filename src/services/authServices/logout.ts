import { AxiosResponse } from 'axios';
import LogoutResponseData from '../../domains/LogoutResponseData';
import myAxios from '../../myAxios';

export default function logout () {
  let { refreshToken } = JSON.parse(localStorage.currentUser);
  myAxios.defaults.headers = {
    Authorization: refreshToken,
  };
  return myAxios.delete('/admin/logout')
  .then((response:  AxiosResponse<LogoutResponseData>) => {
    return {response};
  })
  .catch(function (error: any) {
    console.log(error);
  });
}