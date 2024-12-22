import { Layout } from 'antd';
import '../HomePage/HomePage.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import FooterSection from '../../components/FooterSection';

const BookPage: React.FC = () => {
  
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


    <FooterSection />
  </Layout>
  )
}

export default BookPage