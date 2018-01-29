import TodoMetaData from './TodoMetaData';
import TodoItem from './TodoItem';

export default interface MappedTodoProps {
  metadata: TodoMetaData;
  todos: TodoItem[];
  userId: number;
}