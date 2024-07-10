import { Layout, List, theme } from 'antd';
import { Content, Footer, Header } from 'antd/es/layout/layout';
import { BookOutlined } from '@ant-design/icons';
import { useEffect, useState } from 'react';
import axios, { AxiosResponse } from 'axios';
import { Book } from '../../models/Book';
import OneBook from '../../components/OneBook';

const BookPage: React.FC = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const [improvedBooks , setImprovedBooks] = useState<Book[]>([])

  const fetchBooks = async () => {
    const response: AxiosResponse<Book[]> = await axios.get('http://localhost:3000/api/books/')
    console.log(response)
    if (response.status !== 200) {
      console.error('Failed to fetch books')
      return
    }
    console.log(response.data)
    setImprovedBooks(response.data)
  }

    useEffect(() => {
        fetchBooks()
    }, [])
  
  return (

    <Layout>
    <Header className="text-2xl pl-4 pt-6 font-bold text-black bg-gray-300">
    <div>
    <BookOutlined className="pr-4" />
        <span> Books</span>
      </div>
      </Header>

    <Content style={{ margin: '0 16px' }}>
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
            <h1 className="text-2xl pl-4 underline font-semibold">หนังสือพัฒนาตนเอง</h1>
            <div>
                {!improvedBooks?.length ? (
                    <div>No content</div>
                ) : (

                  <List
                  grid={{ gutter: 16, column: 4 }}
                  dataSource={improvedBooks}
                  renderItem={(book: Book, index) => (
                    <List.Item>
                      <OneBook key={index} book={book} />
                    </List.Item>
                  )}
                /> )
                }
                
            </div>
        </div>
        
      </div>
    </Content>
    <Footer style={{ textAlign: 'center' }}>
      Ant Design ©{new Date().getFullYear()} Created by Ant UED
    </Footer>
  </Layout>
  )
}

export default BookPage