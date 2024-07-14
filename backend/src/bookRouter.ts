import { pool } from 'db/connection';
import { Router, Request, Response } from 'express';
import { Book } from 'models/book';

export const bookRouter = Router();

const books: Book[] = [
  {
    id: 1,
    title: 'AI and Machine Learning for Coders เส้นทางและหลักการสู่การโค้ด AI',
    author: 'Laurence Moroney',
    description: 'เรียนรู้การเขียนโค้ด AI และ Machine Learning ในภาษา Python จากผู้เชี่ยวชาญ',
    image: 'https://bci.kinokuniya.com/jsp/images/book-img/97861/97861682/9786168282281.JPG',
  },
  {
    id: 2,
    title: 'การพัฒนาแอพพลิเคชัน Machine Learning',
    author: 'Emmanuel Ameisen',
    description: 'เริ่มจากแนวคิดสู่ตัวผลิตภัณฑ์ เรียบเรียงด้วยสำนวนไทย อ่านเข้าใจง่าย',
    image:
      'https://images-se-ed.com/ws/Storage/Originals/978616/828/9786168282182L.jpg?h=49d6d0999791ec37bbf607d9ae295ae5',
  },
];

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
  books.push(newBook);
  res.status(201).json(newBook);
});
