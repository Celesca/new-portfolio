import bodyParser from 'body-parser';
import { bookRouter } from './bookRouter';
import express, { Request, Response, Application } from 'express';
import morgan from 'morgan';
import cors from 'cors';

const app: Application = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(morgan('dev'));
app.use(cors());

app.get('/health', (req: Request, res: Response) => {
  res.send('Health check!');
});

app.use('/api', bookRouter);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
