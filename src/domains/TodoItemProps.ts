import ButtonStyle from '../domains/ButtonStyle';

export default interface TodoItemProps {
  id: number;
  title: string;
  tags: string[];
  buttonStyle: ButtonStyle;
  handleEdit(): void;
  handleDelete(): void;
}