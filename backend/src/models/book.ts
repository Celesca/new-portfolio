export interface Book {
  id: number;
  title: string;
  author: string;
  description?: string;
  year?: number;
  image?: string;
  category: string;
}
