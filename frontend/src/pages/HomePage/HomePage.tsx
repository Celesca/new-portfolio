import { Layout } from 'antd';
import './HomePage.css';
import { Footer } from 'antd/es/layout/layout';

const HomePage: React.FC = () => {
  
  return (
    <Layout className="homepage-container">
      <div className="flex header-container">
        <div className="flex flex-col items-center p-16 w-full">
          <img src="https://i.redd.it/35j9y5v43ro71.png" alt="homepage" 
          className="homepage-image rounded-full w-64"/>
        </div>
        <div className="w-full">
          <div className="text-container flex flex-col mt-12">
            <h1 className="text-4xl my-4" data-aos="fade-up">Hello. I'm Celesca.</h1>
            <h2 className="text-lg my-4">I love to do some researching about programming and others</h2>
          </div>
        </div>
      </div>
    <Footer style={{ textAlign: 'center', backgroundColor: 'green' }}>
      Ant Design ©{new Date().getFullYear()} Created by Celesca
    </Footer>
  </Layout>
  )
}

export default HomePage