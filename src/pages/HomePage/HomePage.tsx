import { Layout } from 'antd';
import './HomePage.css';
import { Footer } from 'antd/es/layout/layout';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import Header from './Header';
import AboutMe from './AboutMe';

const HomePage: React.FC = () => {
  
  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <Layout className="homepage-container">

    <div className="night" >
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
    </div>


      
      <Header />
      <AboutMe />
      
    <Footer style={{ textAlign: 'center', backgroundColor:'none'}}>
     © {new Date().getFullYear()}   Created by Celesca
    </Footer>
  </Layout>
  )
}

export default HomePage