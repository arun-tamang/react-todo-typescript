import myAxios from '../../myAxios';
import RegisterDetails from '../../domains/RegisterDetails';
import { AxiosResponse } from 'axios';

export default function register (newUserInfo: RegisterDetails) {
  return myAxios.post('/admin/register', newUserInfo)
  .then((response: AxiosResponse<any>) => {
    // console.log(response);
    return {data: response.data, success: true};
  })
  .catch(function (error: any) {
    console.log(error);
  });
}
