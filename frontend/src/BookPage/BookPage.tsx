import { Layout, theme } from 'antd';
import { Content, Footer, Header } from 'antd/es/layout/layout';
import { BookOutlined } from '@ant-design/icons';

const BookPage: React.FC = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  
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