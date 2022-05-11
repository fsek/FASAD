import { User } from './user'

export interface NewsPostModel {
  id: number;
  title: string;
  content: string;
  created: Date;
  categories: string[];
  author: User;
}
