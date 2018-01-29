import TodoListContainerProps from './TodoListContainerProps';

export default interface TodoListProps extends TodoListContainerProps {
  userId: number;
  closePopUp(title: string): void;
  handleAdd(): void;
  handleSearch(): void;
}