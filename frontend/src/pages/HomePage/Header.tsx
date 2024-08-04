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
    <div className="flex header-container pt-16">
    <div className="flex flex-col items-center p-16 w-full">
      <img src="https://i.redd.it/35j9y5v43ro71.png" alt="homepage" 
      className="homepage-image rounded-full w-64"/>
    </div>
    <div className="w-full">
      <div className="text-container flex flex-col mt-32">
        <img src="love-always-wins.png" width="50"></img>
        <h1 className="text-xl text-white my-4" data-aos="fade-up">Hello. I'm <span className="font-bold">Celesca. </span> </h1>
        <h2 className="text-md text-white mt-4 mb-8" data-aos="fade-up" data-aos-duration="700">Computer Engineering, KMUTT</h2>
        <button type="button" data-aos="fade-up"
            data-aos-duration="900" className="nes-btn is-primary w-48"
            onClick={downloadClick}
            >Download CV</button>
      </div>
    </div>
  </div>
  )
}

export default Header