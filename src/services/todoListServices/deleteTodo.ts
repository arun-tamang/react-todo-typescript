import { AxiosResponse } from 'axios';
import myAxios from '../../myAxios';

function deleteTodo(userId: number, id: number) {
  console.log('USERID', userId);
  let myUrl = '/users/' + userId + '/todo/' + id;
  return myAxios.delete(myUrl)
    .then((response: AxiosResponse<any>) => {
      return response;
    })
    .catch(function (error: any) {
      console.log(error);
    });
}

export default deleteTodo;
