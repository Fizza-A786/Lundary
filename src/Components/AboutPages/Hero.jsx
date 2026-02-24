import React from "react";

const Hero = () => {
  const slide = {
    image: "https://lundary.vercel.app/home/dryCleaning.jpg",
    title: "Luxury Laundry. Reimagined",
    buttonText: "Schedule Your Pickup",
    buttonLink: "#",
  };

  return (
    <div className="h-screen w-full relative">
      {/* Background Image */}
      <div
        className="h-full w-full bg-cover bg-center relative"
        style={{ backgroundImage: `url(${slide.image})` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Content Centered Vertically & Horizontally */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white max-w-lg md:max-w-xl lg:max-w-2xl mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-light mb-4 font-monoCustom">
            {slide.title}
          </h2>

          <div className="flex items-center gap-3 mb-6 justify-center">
            <div className="h-[2px] w-16 bg-[#d4af37]  mt-4"></div>
            <span className="text-[#d4af37] font-semibold tracking-widest mt-4">
            AKOYA COLLECTION
            </span>
            <div className="h-[2px] w-16 bg-[#d4af37]  mt-4"></div>
          </div>

          <a
            href={slide.buttonLink}
            className="bg-[#d4af37] hover:bg-[#c5a22d] text-black px-6 py-3 rounded-4xl text-[15px] font-medium transition duration-300 transform hover:scale-105 hover:shadow-lg"
          >
            {slide.buttonText}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;