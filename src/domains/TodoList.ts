import SearchValue from './SearchValue';
import TodoItem from './TodoItem';
import TagItem from './TagItem';
import TodoMetaData from './TodoMetaData';
import TodoToAdd from './TodoToAdd';

export default interface TodoList {
  showPopUp: boolean;
  title: string;
  todos: TodoItem[];
  popUpEditTitle: string;
  todoToEdit: number;
  searchValue: SearchValue;
  addFormHeight: number;
  todoToAdd: TodoToAdd;
  availableTags: TagItem[];
  metadata: TodoMetaData;
}