import TodoList from './TodoList';
import * as ActionTypes from '../domains/ActionTypes';
import TodoItem from '../domains/TodoItem';
import TodoMetaData from '../domains/TodoMetaData';
import SearchValue from '../domains/SearchValue';
import TagItem from '../domains/TagItem';
import NewTodo from './NewTodo';

export default interface TodoListContainerProps extends TodoList {
  userId: number;
  addTodo(newTodo: NewTodo): ActionTypes.AddTodo;
  editTodo(title: string, index: number): ActionTypes.EditTodo;
  fetchTodos(userId: number, pageNo: number): Promise<void>;
  fetchTags(userId: number): Promise<void>;
  removeTodo(index: number): ActionTypes.RemoveTodo;
  resetTodoToAdd(): ActionTypes.ResetTodoToAdd;
  searchTodos(searchValue: SearchValue, userId: number): Promise<void>;
  setExpDateToAdd(date: string): ActionTypes.SetExpDateToAdd;
  setPopUpEditTitle(title: string): ActionTypes.SetPopUpEditTitle;
  setSearchKeywords(keywords: string): ActionTypes.SetSearchKeywords;
  setSearchTags(newTag: string): ActionTypes.SetSearchTags;
  setTagIdsToAdd(id: number): ActionTypes.SetTagIdsToAdd;
  setTagNamesToAdd(name: string): ActionTypes.SetTagNamesToAdd;
  setTags(tags: TagItem[]): ActionTypes.SetTags;
  setTitleToAdd(title: string): ActionTypes.SetTitleToAdd;
  setTodoMetaData(metadata: TodoMetaData): ActionTypes.SetTodoMetadata;
  setTodoProps(todos: TodoItem[]): ActionTypes.SetTodoProps;
  setTodoToEdit(todoId: number): ActionTypes.SetTodoToEdit;
  toggleAddForm(): ActionTypes.ToggleAddForm;
  togglePopUp(): ActionTypes.TogglePopUp;
}