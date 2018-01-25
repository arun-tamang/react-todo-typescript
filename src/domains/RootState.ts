
import LocalUser from './LocalUser';
import TodoList from './TodoList';
import LogInDetails from './LogInDetails';

export default interface RootState {
  todoList: TodoList;
  user: LocalUser;
  logInDetails: LogInDetails;
}
