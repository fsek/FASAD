export interface NewsPostModel {
  id: number;
  title: string;
  content: string;
  created: Date;
  categories: string[];
  user: {
    name: string
  }
}
