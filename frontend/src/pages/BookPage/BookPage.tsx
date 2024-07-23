import { Button, Layout, List, Modal, theme } from "antd";
import { Content, Footer, Header } from "antd/es/layout/layout";
import { BookOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";
import axios, { AxiosResponse } from "axios";
import { Book } from "../../models/Book";
import OneBook from "../../components/OneBook";

const BookPage: React.FC = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const [improvedBooks, setImprovedBooks] = useState<Book[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

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

  const handleOk = () => {
    setIsModalOpen(false);
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
              <input type="text" name="title" className="mb-4 py-2 px-2 outline-black rounded-lg border-2 border-black" id="title" placeholder="Ex. Software" />
          </div>
          <div className="flex flex-col">
            <label htmlFor="author" className="mb-4">Author</label>
            <input type="text" name="author" className="mb-4 py-2 px-2 outline-black rounded-lg border-2 border-black" id="author" placeholder="Ex. John Carter"/>
          </div>
          <div className="flex flex-col">
            <label htmlFor="description">Description</label>
            <textarea name="description" className="mb-4 py-2 px-2 outline-black rounded-lg border-2 border-black" id="description" placeholder="Ex. The book that" />
          </div>
          <div className="flex flex-col">
            <label htmlFor="cover">Cover URL</label>
            <input type="text" name="cover" className="mb-4 py-2 px-2 outline-black rounded-lg border-2 border-black" id="cover" placeholder="Ex. https://ImageURL.com"/>
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
