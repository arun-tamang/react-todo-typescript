import myAxios from '../../myAxios';
import LoginDetails from '../../domains/LogInDetails';
import { AxiosResponse } from 'axios';

export default function login (userInfo: LoginDetails) {
  return myAxios.post('/admin/login', userInfo)
  .then((response: AxiosResponse<any>) => {
    // console.log(response);
    return response;
  })
  .catch((error: any) => {
    console.log(error);
  });
}
