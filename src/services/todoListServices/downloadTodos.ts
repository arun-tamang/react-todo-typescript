import myAxios from '../../myAxios';
import { AxiosResponse } from 'axios';

export default function downloadTodos(id: number, pageNo: number) {
  let page = pageNo || 1;
  let myUrl = '/users/' + id + '/todo/' + page;

  return myAxios
    .get(myUrl)
    .then(function(response: AxiosResponse<any>) {
      return response.data;
    })
    .catch(function(error: any) {
      console.log(error);
    });
}
