export default interface TodoProps {
  title: string;
  tags: string[];
  id: number;
  handleEdit(title: string, id: number): void;
  handleDelete(id: number): void;
}