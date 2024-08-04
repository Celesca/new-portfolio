import './AboutMe.css';
import "nes.css/css/nes.min.css";

const AboutMe = () => {
  return (
    <>
        <div className="flex flex-col items-center py-24">
            <h1 className="text-white text-2xl">About me</h1>
            <div className="nes-container is-dark with-title flex justify-around w-1/2">
                <img src="https://i.redd.it/35j9y5v43ro71.png" alt="homepage" width="200"></img>
                <div className=" w-3/5">
                    <ol>
                        <p className="title">Sawit Koseeyaumporn (Folk)</p>
                        <p>Computer Engineering, KMUTT</p>
                        <p>Beta Microsoft Learn Student Ambassador</p>
                    </ol>
                    
                </div>
            </div>
        </div>
    </>
  )
}

export default AboutMe;