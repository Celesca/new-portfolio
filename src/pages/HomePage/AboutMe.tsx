import './AboutMe.css';
import "nes.css/css/nes.min.css";

const AboutMe = () => {
  return (
    <>
        <div className="flex flex-col items-center py-24">
            <h1 className="text-white text-2xl">About me</h1>
            <div className="nes-container is-dark with-title flex justify-around w-1/2">
                <img src="https://stickershop.line-scdn.net/stickershop/v1/product/13505512/LINEStorePC/main.png?v=1" alt="homepage" width="200"></img>
                <div className="">
                    <ul className="list-disc leading-9">
                        <li className="title">Sawit Koseeyaumporn (Folk)</li>
                        <li>Computer Engineering, <span className="text-orange-500">KMUTT</span></li>
                        <li><span className="text-blue-600">Beta</span> Microsoft Learn Student Ambassador</li>
                        <li>Software Engineer</li>
                    </ul>
                    
                </div>
            </div>
        </div>
    </>
  )
}

export default AboutMe;