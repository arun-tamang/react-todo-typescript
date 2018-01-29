import myAxios from '../../myAxios';
import { AxiosResponse } from 'axios';

export default function downloadTodos(id: number, pageNo: number) {
  // console.log(myAxios.defaults.headers);
  let page = pageNo || 1;
  let myUrl = '/users/' + id + '/todo/' + page;

  return myAxios
    .get(myUrl)
    .then((response: AxiosResponse<any>) => {
      return response.data;
    })
    .catch((error: any) => {
      console.log(error);
    });
}
