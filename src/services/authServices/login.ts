import { AxiosResponse } from 'axios';
import myAxios from '../../myAxios';
import LoginDetails from '../../domains/LogInDetails';
import LogInResponseData from '../../domains/LogInResponseData';

export default function login (userInfo: LoginDetails) {
  return myAxios.post('/admin/login', userInfo)
  .then((response: AxiosResponse<LogInResponseData>) => {
    // console.log(response);
    return response;
  })
  .catch((error: any) => {
    console.log(error);
  });
}
