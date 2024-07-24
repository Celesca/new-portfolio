import { Button, Layout, List, Modal, theme } from "antd";
import { Content, Footer, Header } from "antd/es/layout/layout";
import { BookOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";
import axios, { AxiosResponse } from "axios";
import { Book } from "../../models/Book";
import OneBook from "../../components/OneBook";
import Swal from "sweetalert2";

const BookPage: React.FC = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const [improvedBooks, setImprovedBooks] = useState<Book[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [description, setDescription] = useState("");
  const [cover, setCover] = useState("");
  const [year, setYear] = useState<string>("");
  const [category, setCategory] = useState<string>("");

  const fetchBooks = async () => {
    const response: AxiosResponse<Book[]> = await axios.get(
      "http://localhost:3000/api/books/"
    );
    console.log(response);

    if (response.status !== 200) {
      console.error("Failed to fetch books");
      return;
    }
    console.log(response.data);
    setImprovedBooks(response.data);
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  const showModal = () => {
    setIsModalOpen(true);
  }

  const clearForm = () => {
    setTitle("");
    setAuthor("");
    setDescription("");
    setCover("");
    setYear("");
    setCategory("");
  }

  const handleOk = async () => {
    const newBook: Book = {
      title,
      author,
      description,
      image: cover,
      year: year,
      category
    }

    try {
      if (!title || !author || !description || !cover || !year || !category) {
        Swal.fire("Error", "Please fill all fields", "error");
        return;
      } 
      const response = await axios.post("http://localhost:3000/api/books/", newBook, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.status === 201) {
        Swal.fire("Success", "Book added!", "success");
        setIsModalOpen(false);
        fetchBooks();
        clearForm();
      }
    }

    catch (error) {
      Swal.fire("Error", "Failed to add book", "error");
      console.log(error);
  }
}

  const handleCancel = () => {
    setIsModalOpen(false);
  }

  return (
    <Layout>
      <Header className="text-2xl pl-4 pt-6 font-bold text-black bg-white">
        <div>
          <BookOutlined className="pr-4 pl-12" />
          <span> Books</span>
        </div>
      </Header>

      <div className="flex justify-end pr-16 pt-8">
        <Button type="primary" onClick={showModal}>เพิ่มหนังสือใหม่</Button>
      </div>

      <Modal title="Add new book" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <form>
          <div className="flex flex-col">
            <label htmlFor="title" className="mb-4">Title</label>
              <input type="text" name="title" className="mb-4 py-2 px-2 outline-black rounded-lg border-2 border-gray-500" id="title" 
              placeholder="Ex. Software" 
              onChange={(e) => setTitle(e.target.value)}
              value={title}
              />
          </div>
          <div className="flex flex-col">
            <label htmlFor="author" className="mb-4">Author</label>
            <input type="text" name="author" className="mb-4 py-2 px-2 outline-black rounded-lg border-2 border-gray-500" id="author" 
            placeholder="Ex. John Carter"
            onChange={(e) => setAuthor(e.target.value)}
            value={author}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="description">Description</label>
            <textarea name="description" className="mb-4 py-2 px-2 outline-black rounded-lg border-2 border-gray-500" id="description" 
            placeholder="Ex. The book that" 
            onChange={(e) => setDescription(e.target.value)}
            value={description}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="cover">Cover URL</label>
            <input type="text" name="cover" className="mb-4 py-2 px-2 outline-black rounded-lg border-2 border-gray-500" id="cover" 
            placeholder="Ex. https://ImageURL.com"
            onChange={(e) => setCover(e.target.value)}
            value={cover}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="year">Year</label>
            <input type="text" name="year" className="mb-4 py-2 px-2 outline-black rounded-lg border-2 border-gray-500" id="year" 
            placeholder="Ex. 2024"
            onChange={(e) => setYear(e.target.value)}
            value={year}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="category">Category</label>
            <input type="text" name="category" className="mb-4 py-2 px-2 outline-black rounded-lg border-2 border-gray-500" id="category" 
            placeholder="Ex. AI"
            onChange={(e) => setCategory(e.target.value)}
            value={category}
            />
          </div>
        </form>
      </Modal>

      <Content style={{ margin: "0 16px" }}>
        <div
          style={{
            padding: 24,
            minHeight: 360,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
          className="mt-12"
        >
          <div>
            <h1 className="text-2xl pl-4 underline font-semibold">
              หนังสือทั้งหมด
            </h1>
            <div>
              {!improvedBooks?.length ? (
                <div>No content</div>
              ) : (
                <List
                  grid={{ gutter: 16, column: 5 }}
                  dataSource={improvedBooks}
                  renderItem={(book: Book, index) => (
                    <List.Item>
                      <OneBook key={index} book={book} />
                    </List.Item>
                  )}
                />
              )}
            </div>
          </div>
        </div>
      </Content>
      <Footer style={{ textAlign: "center" }}>
        Celescadev ©{new Date().getFullYear()}
      </Footer>
    </Layout>
  );
};

export default BookPage;
