export default interface TodoPropsItem {
  id: number;
  title: string;
  tags: string[];
  createdAt: string;
  updatedAt: string;
  completed: boolean;
}