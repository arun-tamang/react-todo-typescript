import * as ActionTypes from './ActionTypes';

export default interface MappedTodoActions {
  fetchTodos(userId: number, pageNo: number): ActionTypes.FetchTodosReturnType;
  removeTodo(index: number): ActionTypes.RemoveTodo;
  togglePopUp(): ActionTypes.TogglePopUp;
  setPopUpEditTitle(title: string): ActionTypes.SetPopUpEditTitle;
  setTodoToEdit(todoId: number): ActionTypes.SetTodoToEdit;
}