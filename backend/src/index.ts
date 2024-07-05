import bodyParser from 'body-parser';
import { bookRouter } from './bookRouter';
import express, { Request, Response, Application } from 'express';
import morgan from 'morgan';

const app: Application = express();
const port: number = 3000;

app.use(bodyParser.json());
app.use(morgan('dev'));

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

app.use('/api', bookRouter);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
