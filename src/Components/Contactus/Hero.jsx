import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

// Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import './swiper-custom.css';

const Hero = () => {
  const slides = [
    {
      id: 1,
      image: "https://lundary.vercel.app/home/eco.jpg",
      title: "Contact Akoya Laundry",
      description: "Luxury laundry services tailored to your needs in Doha, Qatar",
      buttonText: "Book a Collection",
      buttonLink: "#",
    },
    {
      id: 2,
      image: "https://lundary.vercel.app/home/exectiveCollection.jpg",
      title: "Professional Care",
      description: "Expert fabric handling with eco-friendly detergents",
      buttonText: "Book a Collection",
      buttonLink: "#",
    },
    {
      id: 3,
      image: "https://lundary.vercel.app/home/eco.jpg",
      title: "Express Service",
      description: "Quick turnaround without compromising quality",
      buttonText: "Book a Collection",
      buttonLink: "#",
    },
  ];

  return (
    <div className="h-screen w-full relative">
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop={true}
        className="h-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div
              className="h-full w-full bg-cover bg-center relative flex items-center justify-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40"></div>

              {/* Content */}
              <div className="relative text-center px-6 md:px-10 max-w-xl md:max-w-2xl lg:max-w-3xl flex flex-col items-center justify-center">
                <h2 className="text-3xl md:text-5xl font-light mb-3 font-monoCustom text-white">
                  {slide.title}
                </h2>
                <div className="flex items-center gap-3 ">

               
               
                <p className="text-lg md:text-[18px] mb-5 font-monoCustom text-[#d4af37]">
                  {slide.description}
                </p>
                 
                   </div>
                    <div className="h-px w-25 bg-[#d4af37] mt-4 "></div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Hero;