import { AxiosResponse } from 'axios';
import myAxios from '../../myAxios';

function addTodo(userId: number, title: string, tags: number[], expiresAt: string) {
  let myUrl = '/users/' + userId + '/todo';
  // let tagIds = tags.replace(' ', '').split(',');

  return myAxios
    .put(myUrl, { name: title, tagIds: tags })
    .then((response: AxiosResponse<any>) => {
      return response;
    })
    .catch(function(error: any) {
      console.log(error);
    });
}

export default addTodo;
