import Carousel from "../../components/Carousel"

const Work = () => {

    return (
        

    <div className="mt-48 mb-24 flex flex-col items-center justify-center">
        <h1 className="text-white text-4xl my-24"
        data-aos="fade-up"
        data-aos-duration="1000">My Works</h1>

        <Carousel images={['kbtg.png', 'scgjwd.jpg', 'r2m.jpg', 'abu.jpg', 'microsoft.jpg']} />
       

    </div>
    )
}

export default Work