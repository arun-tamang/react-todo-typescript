interface TagInTodos {
  id: number;
  name: string;
  _pivot_todo_id: number;
  _pivot_tag_id: number;
}

export default interface FetchedTodoItem {
  id: number;
  userId: number;
  name: string;
  tags: TagInTodos[];
  createdAt: string;
  updatedAt: string;
  expiresAt: string;
  completed: false;
}