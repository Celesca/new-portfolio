import './AboutMe.css';
import "nes.css/css/nes.min.css";

const AboutMe = () => {
  return (
    <>
        <div className="flex flex-col items-center py-24">
            <h1 className="text-white text-4xl my-24">About me</h1>
            <div className="nes-container is-dark with-title flex flex-col lg:flex-row justify-between items-center lg:justify-around w-4/6">
                <img src="https://stickershop.line-scdn.net/stickershop/v1/product/13505512/LINEStorePC/main.png?v=1" alt="homepage" className="w-1/2 h-1/3 lg:w-1/4 lg:h-1/3"></img>
                <div className="lists lg:w-1/2">
                    <ul className="list-disc leading-9">
                        <li className="title">Sawit Koseeyaumporn (Folk)</li>
                        <li>Computer Engineering, <span className="text-orange-500">KMUTT</span></li>
                        <li><span className="text-blue-600">Beta</span> Microsoft Learn Student Ambassador</li>
                        <li><span className="text-green-400">KBTG</span> ClassNest Java Software Engineer 2</li>
                        <li><span className="text-yellow-200">CAICamp</span> Gen 7</li>
                    </ul>
                    
                </div>
            </div>
        </div>
    </>
  )
}

export default AboutMe;