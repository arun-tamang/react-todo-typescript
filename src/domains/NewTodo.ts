import { Moment } from 'moment';

export default interface NewTodo {
  id: number;
  title: string;
  tags: string[];
  expiresAt: Moment;
}