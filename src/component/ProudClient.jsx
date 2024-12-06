import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"; 
import img1 from '../assets/download (1).jpg'
import img2 from '../assets/download (1).png'
import img3 from '../assets/download (2).png'
import img4 from '../assets/download (3).png'
import img5 from '../assets/download8.png'
import img6 from '../assets/download9.jpg'
import img7 from '../assets/corporate0.jpg'
import img8 from '../assets/corporate1.png'
import img9 from '../assets/corporate2.jpg'
import img10 from '../assets/corporate3.jpg'

const ProudClient = () => {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 4,
         className: "center px-10",
        slidesToScroll: 1,
        autoplay: true,
        speed: 3000,
        autoplaySpeed: 2000,
        cssEase: "linear"
      };
      return (
       <>
        <h2 className="text-3xl font-bold text-center mb-5 mt-10">OUR PROUD CLIENTS</h2>
       {/* Government Sector */}
         <div className="slider-container py-10">
            <h2 className="text-2xl font-bold ml-10 pb-10">Government Sector</h2>
          <Slider {...settings}>
            <div>
             <img src={img1} alt="" className="md:w-32 md:h-32"/>
            </div>
            <div>
            <img src={img2} alt="" className="md:w-32 md:h-32"/>
            </div>
            <div>
            <img src={img3} alt="" className="md:w-32 md:h-32"/>
            </div>
            <div>
            <img src={img4} alt="" className="md:w-32 md:h-32"/>
            </div>
            <div>
            <img src={img5} alt="" className="md:w-32 md:h-32"/>
            </div>
            <div>
            <img src={img6} alt="" className="md:w-32 md:h-32"/>
            </div>
          </Slider>
         </div>

       {/* Corporate Clients */}
         <div className="slider-container py-10">
            <h2 className="text-2xl font-bold ml-10 pb-10">Corporate Clients</h2>
          <Slider {...settings}>
            <div>
             <img src={img7} alt="" className="md:w-36 md:h-36"/>
            </div>
            <div>
            <img src={img8} alt="" className="md:w-36 md:h-36"/>
            </div>
            <div>
            <img src={img9} alt="" className="md:w-36 md:h-36"/>
            </div>
            <div>
            <img src={img10} alt="" className="md:w-36 md:h-36"/>
            </div>
          </Slider>
         </div>
       </>
      );
};

export default ProudClient;