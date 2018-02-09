import { AxiosResponse } from 'axios';
import myAxios from '../../myAxios';
import TodoToAdd from '../../domains/TodoToAdd';

function addTodo(userId: number, todo: TodoToAdd) {
  let myUrl = '/users/' + userId + '/todo';
  // let tagIds = tags.replace(' ', '').split(',');

  return myAxios
    .post(myUrl, { name: todo.title, tagIds: todo.tagIds, completed: false, categoryId: 1 })
    .then((response: AxiosResponse<any>) => {
      return response;
    })
    .catch(function(error: any) {
      console.log(error);
    });
}

export default addTodo;
