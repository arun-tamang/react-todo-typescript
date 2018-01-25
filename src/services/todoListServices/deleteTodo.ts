import myAxios from '../../myAxios';
// import { getTodoIndex } from './todoService';

function deleteTodo (userId: number, id: number) {
  console.log('USERID', userId);
  let myUrl = '/users/' + userId + '/todo/' + id;
  return myAxios.delete(myUrl)
    .then((response) => {
      return response;
    })
    .catch(function (error: any) {
      console.log(error);
    });
}

export default deleteTodo;
