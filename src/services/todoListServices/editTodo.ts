import myAxios from '../../myAxios';
import { AxiosResponse } from 'axios';

function editTodo(newName: string, id: number, userId: number) {
  let myUrl = '/users/' + userId + '/todo/' + id;

  return myAxios.put(myUrl, { name: newName }).then((response: AxiosResponse<any>) => {
    return response;
  });
}

export default editTodo;
