import coverImg0 from '../assets/image1.jpg'
import coverImg1 from '../assets/image6.jpg'
import coverImg2 from '../assets/image3.jpg'
import coverImg3 from '../assets/image4.jpg'
import coverImg4 from '../assets/image0.jpg'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';

const HomeSlider = () => {
  const slides = [
    {coverImg0},{coverImg1},{coverImg2},{coverImg3},{coverImg4}
    ]

  return (
    <div className="w-full mx-auto">
      <Swiper
        modules={[Autoplay, Navigation]}
        spaceBetween={0}
        slidesPerView={1}
        navigation
        autoplay={{
          delay: 2000,
          disableOnInteraction: false
        }}
        loop={true}
        className="hero-swiper"
      >
        {slides.map((slide, index) => {

          return (
            <SwiperSlide key={index}>
              <div className="w-full h-[calc(100vh-82px)] aspect-video">
                <img 
                loading='lazy'
                  src={slide[`coverImg${index}`]} 
                  alt=''
                  className="w-full h-full object-center"
                />
              </div>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </div>
  );
};

export default HomeSlider;
