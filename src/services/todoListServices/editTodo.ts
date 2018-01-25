import myAxios from '../../myAxios';

function editTodo(newName: string, id: number, userId: number) {
  let myUrl = '/users/' + userId + '/todo/' + id;

  return myAxios.put(myUrl, { name: newName }).then(response => {
    return response;
  });
}

export default editTodo;
