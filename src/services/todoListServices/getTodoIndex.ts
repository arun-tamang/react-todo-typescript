import TodoItem from '../../domains/TodoItem';

export default function getTodoIndex(id: number, todos: TodoItem[]) {
  for (let i = 0; i < todos.length; i++) {
    if (todos[i].id === id) {
      return i;
    }
  }
  return -2;
}