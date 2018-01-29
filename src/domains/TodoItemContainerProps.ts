import * as ActionTypes from '../domains/ActionTypes';
import TodoItem from './TodoItem';
import Metadata from './TodoMetaData';

export default interface TodoItemContainerProps {
  userId: number;
  id: number;
  title: string;
  tags: string[];
  todos: TodoItem[];
  metadata: Metadata;
  fetchTodos(userId: number, pageNo: number): Promise<void>;
  removeTodo(index: number): ActionTypes.RemoveTodo;
  togglePopUp(): ActionTypes.TogglePopUp;
  setPopUpEditTitle(title: string): ActionTypes.SetPopUpEditTitle;
  setTodoToEdit(todoId: number): ActionTypes.SetTodoToEdit;
}