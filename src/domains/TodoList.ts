import SearchValue from './SearchValue';
import TodoProps from './TodoProps';
import TagItem from './TagItem';
import TodoMetaData from './TodoMetaData';
import TodoToAdd from './TodoToAdd';

export default interface TodoList {
  showPopUp: boolean;
  title: string;
  todoProps: TodoProps[];
  popUpEditTitle: string;
  todoToEdit: number;
  searchValue: SearchValue;
  addFormHeight: number;
  todoToAdd: TodoToAdd;
  availableTags: TagItem[];
  metadata: TodoMetaData;
}