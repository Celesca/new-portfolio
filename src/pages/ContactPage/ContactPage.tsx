import { Layout } from 'antd';
import { Footer } from 'antd/es/layout/layout';

const ContactPage: React.FC = () => {
  
  return (
    <Layout>
      <div className="flex flex-col items-center p-16">
        <img src="https://i.redd.it/35j9y5v43ro71.png" alt="homepage" 
        className="homepage-image rounded-full w-64"/>

        <h1 className="text-xl my-4">Hello. My name is Celesca.</h1>
        <h2 className="text-lg my-4">I love to do some researching about programming and others</h2>
      </div>
    <Footer style={{ textAlign: 'center' }}>
      Ant Design ©{new Date().getFullYear()} Created by Ant UED
    </Footer>
  </Layout>
  )
}

export default ContactPage