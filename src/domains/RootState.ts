
import LocalUser from './LocalUser';
import TodoList from './TodoList';
import LogInDetails from './LogInDetails';
import RegisterDetails from './RegisterDetails';

export default interface RootState {
  todoList: TodoList;
  user: LocalUser;
  logInDetails: LogInDetails;
  registerDetails: RegisterDetails;
}
