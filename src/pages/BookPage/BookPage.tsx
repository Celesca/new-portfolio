import { Layout } from 'antd';
import '../HomePage/HomePage.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import FooterSection from '../../components/FooterSection';
import OneBook from '../../components/OneBook';

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

    <div className="mt-24 flex flex-col items-center justify-center">
        <h1 className="text-white text-4xl mt-12"
        data-aos="fade-up"
        data-aos-duration="1000">My Books</h1>
    

      <div className="mt-12 p-20 bg-gray-200/[.80] w-full">

        <h1 className="text-2xl text-start pb-12">Artificial Intelligence</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <OneBook title="AI for Everyone" author="Andrew Ng" image="ai-for-everyone.jpg" />
        </div>
      </div>

    </div>


    <FooterSection />
  </Layout>
  )
}

export default BookPage