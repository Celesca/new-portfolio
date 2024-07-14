import { pool } from './db/connection';
import { Router, Request, Response } from 'express';
import { Book } from 'models/book';

export const bookRouter = Router();

bookRouter.get('/books', (req: Request, res: Response) => {
  pool.query('SELECT * FROM books', (error, result) => {
    if (error) {
      res.status(500).send(error.message);
      return;
    }
    res.status(200).json(result.rows);
  });
});

bookRouter.post('/books', (req: Request, res: Response) => {
  const newBook: Book = req.body;
  pool.query(
    'INSERT INTO books (title, author, description, image, year, category) VALUES ($1, $2, $3, $4, $5, $6)',
    [newBook.title, newBook.author, newBook.description, newBook.image, newBook.year, newBook.category],
    (error) => {
      if (error) {
        res.status(500).send(error.message);
        return;
      }
      res.status(201).send('Book added!');
    },
  );
});
