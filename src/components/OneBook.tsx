// Props Data Interface

import { Book } from "../models/Book"
import { Card } from "antd";

const { Meta } = Card;

interface OneBookProps {
  book: Book;
}

const OneBook: React.FC<OneBookProps> = ({ book }) => {
  const { title, author, image } = book;
  return (
    <Card
    hoverable
    className="w-64"
    cover={<img alt="example" src={image} className="p-4" />}
  >
    <Meta title={title} description={author} />
  </Card>
  )
}

export default OneBook