export default interface TodoItem {
  id: number;
  title: string;
  tags: string[];
  createdAt: string;
  updatedAt: string;
  completed: boolean;
}