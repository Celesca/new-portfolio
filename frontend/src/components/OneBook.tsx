// Props Data Interface

import { Book } from "../models/Book"

interface OneBookProps {
  book: Book;
}

const OneBook = ({ book } : OneBookProps) => {
  const { title, author, description } = book;
  return (
    <div>
      <h2>{title}</h2>
      <h3>{author}</h3>
      <p>{description}</p>
    </div>
  )
}

export default OneBook