import React, { useState } from 'react';
import './App.css';
import {
  BookOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Layout, Menu } from 'antd';
import HomePage from './HomePage/HomePage';
import BookPage from './BookPage/BookPage';

const { Sider } = Layout;

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem('Home', '1', <PieChartOutlined />),
  getItem('Books', '2', <BookOutlined />),
  getItem('User', 'sub1', <UserOutlined />, [
    getItem('Tom', '3'),
    getItem('Bill', '4'),
    getItem('Alex', '5'),
  ]),
  getItem('Team', 'sub2', <TeamOutlined />, [getItem('Team 1', '6'), getItem('Team 2', '8')]),
  getItem('Files', '9', <FileOutlined />),
];

const App: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [selectedKeys, setSelectedKeys] = useState(['1']);

  const handleMenuClick: MenuProps['onClick'] = (e) => {
    setSelectedKeys([e.key]);
  };

  const renderContent = () => {
    switch (selectedKeys[0]) {
      case '1':
        return <HomePage />;
      case '2':
        return <BookPage />;
      case '3':
        return <div>Tom's Content</div>;
      case '4':
        return <div>Bill is a cat.</div>;
      case '5':
        return <div>Alex's Content</div>;
      case '6':
        return <div>Team 1 Content</div>;
      case '8':
        return <div>Team 2 Content</div>;
      case '9':
        return <div>Files Content</div>;
      default:
        return <div>Default Content</div>;
    }
  };

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        <div className="demo-logo-vertical" />
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} onClick={handleMenuClick} />
      </Sider>
      <Layout className="site-layout">
        <Layout.Header className="site-layout-background" style={{ padding: 0 }} />
        <Layout.Content style={{ margin: '0 16px' }}>
          <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
            {renderContent()}
          </div>
        </Layout.Content>
      </Layout>
    </Layout>
  );
};

export default App;