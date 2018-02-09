import { Moment } from 'moment';

export default interface TodoToAdd {
  title: string;
  tagIds: number[];
  tagNames: string[];
  expiresAt: Moment;
}