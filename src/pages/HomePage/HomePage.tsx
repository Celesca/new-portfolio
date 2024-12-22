import { Layout } from 'antd';
import './HomePage.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import Header from './Header';
import AboutMe from './AboutMe';
import Work from './Work';
import FooterSection from '../../components/FooterSection';

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
      <Work />
      
    <FooterSection />
  </Layout>
  )
}

export default HomePage