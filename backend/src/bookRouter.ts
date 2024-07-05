import { Router, Request, Response } from 'express';
import { Book } from 'models/book';

export const bookRouter = Router();

const books: Book[] = [
  {
    id: 1,
    title: 'Book 1',
    author: 'Author 1',
    description: 'Description 1',
  },
  {
    id: 2,
    title: 'Book 2',
    author: 'Author 2',
    description: 'Description 2',
  },
];

bookRouter.get('/books', (req: Request, res: Response) => {
  res.json(books);
});
