import 'nes.css/css/nes.min.css';
import './Header.css';
import './HomePage.css'

const Header = () => {

  const downloadClick = () => {
    const pdfUrl = 'resume.pdf';
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "Sawit Koseeyaumporn Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
  return (
    <div className="flex flex-col lg:flex-row  mt-8 pt-16">
    <div className="flex justify-center p-16 w-full">
      <img src="https://i.redd.it/35j9y5v43ro71.png" alt="homepage" 
      className="homepage-image rounded-full w-64"/>
    </div>
    <div className="w-full">
      <div className="flex flex-col items-center lg:items-start lg:mt-32">
        <img src="love-always-wins.png" data-aos="fade-up" width="50"></img>
        <h1 className="md:text-xl sm:text-md text-white my-4" data-aos="fade-up" data-aos-duration="700">Hello. I'm <span className="font-bold text-green-400">Celesca. </span> </h1>
        <h2 className="md:text-md sm:text-sm text-white mt-4 mb-8" data-aos="fade-up" data-aos-duration="1000">Computer Engineering, <span className="font-bold text-orange-500">KMUTT</span></h2>
          <button type="button" data-aos="fade-up"
              data-aos-duration="1300" className="nes-btn is-primary w-48"
              onClick={downloadClick}
              >Download CV</button>
      </div>
    </div>
  </div>
  )
}

export default Header