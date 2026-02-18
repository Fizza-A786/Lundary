import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";


// Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import './swiper-custom.css';

const HomePage = () => {
  const slides = [
    {
      id: 1,
      image: "https://lundary.vercel.app/home/platinumCare.jpg",
      title: "Premium Garment Care",
      description: "Expert cleaning for your most delicate fabrics",
      buttonText: "Schedule Pickup",
      buttonLink: "#",
    },
    {
      id: 2,
      image: "https://lundary.vercel.app/home/eco.jpg",
      title: "Eco-Conscious Cleaning",
      description: "Sustainable methods without compromising quality",
      buttonText: "Schedule Pickup",
      buttonLink: "#",
    },
    {
      id: 3,
      image: "https://lundary.vercel.app/home/pressing.jpg",
      title: "Precision Pressing",
      description: "Impeccable finishes for business and formalwear",
      buttonText: "Schedule Pickup",
      buttonLink: "#",
    },
  ];

  return (
    <div className="h-screen w-full relative">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000 }}
        loop={true}
        className="h-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div
              className="h-full w-full bg-cover bg-center relative"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="absolute inset-0 bg-black/40"></div>
              <div className="absolute top-1/2 left-14 md:left-10 lg:left-20 transform -translate-y-1/2 text-left text-white max-w-lg md:max-w-xl lg:max-w-2xl">
                <h2 className="text-3xl md:text-5xl font-light mb-4 font-monoCustom">
                  {slide.title}
                </h2>
                <p className="text-lg md:text-2xl mb-6 font-monoCustom text-[#d4af37]">{slide.description}</p>
                <a
                  href={slide.buttonLink}
                  className="bg-[#d4af37] hover:bg-[#c5a22d] text-black px-6 py-3 rounded-4xl text-[15px] font-medium transition duration-300 transform hover:scale-105 hover:shadow-lg"
                >
                  {slide.buttonText}
                </a>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HomePage;