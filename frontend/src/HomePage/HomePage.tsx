import { Layout, theme } from 'antd';
import './HomePage.css';
import { Content, Footer, Header } from 'antd/es/layout/layout';
import { UsbFilled } from '@ant-design/icons';

const HomePage: React.FC = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  
  return (
    <Layout>
    <Header className="text-2xl pl-4 pt-6 font-bold text-amber-400 bg-gray-300">
    <div>
      <UsbFilled className="pr-4"/>
        <span>Hello World</span>
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
      >
        Bill is a cat.
      </div>
    </Content>
    <Footer style={{ textAlign: 'center' }}>
      Ant Design ©{new Date().getFullYear()} Created by Ant UED
    </Footer>
  </Layout>
  )
}

export default HomePage