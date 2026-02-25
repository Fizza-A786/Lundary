import React from "react";
import { GoDotFill } from "react-icons/go";

const VisionMission = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-30 px-5 md:px-10">

      {/* Hero Section */}
      <div className="flex flex-col justify-center items-center text-center mb-16 py-4">
        <h1 className="text-3xl md:text-5xl font-bold text-black mb-2">
          Vision & Mission
        </h1>
        <p className="text-[#d4af37] text-lg md:text-xl font-semibold mb-2">
          Akoya Premium Laundry
        </p>
        <p className="text-black italic text-lg md:text-xl font-light mt-3">
          Redefining Fabric Care and Personal Luxury in Qatar
        </p>
        <div className="bg-[#d4af37] h-1 w-25 mt-4"></div>
      </div>

      {/* Vision & Mission Section */}
      <div className="flex flex-col md:flex-row gap-8 mb-16">
        
        {/* Left Image Section */}
        <div className="md:w-1/3 flex flex-col gap-4 ">
         <div className="w-full h-[149vh] rounded-lg overflow-hidden relative   hover:shadow-2xl transition-all shadow-xl">
  <img
    src="https://lundary.vercel.app/terms/ourmission.jpeg"
    alt="Luxury Laundry"
    className="w-full h-full object-cover"
  />

  {/* Overlay text */}
  <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 w-full px-5 ">
    <div className=" bg-opacity-50 text-white p-4 rounded text-start max-w-lg mx-auto">
      <h3 className="font-bold text-2xl">Excellence in Every Detail</h3>
      <p className="text-sm mt-1">Technology, Artistry, and Care</p>
    </div>
  </div>
</div>

          {/* Overlay Text and Button */}
          <div className="flex flex-col gap-3 bg-[#d4af37] p-8 rounded-2xl   hover:shadow-2xl transition-all shadow-xl">
            <div className=" bg-opacity-50 text-white p-3 rounded">
              <h3 className="font-bold text-[22px]">Experience Excellence Today</h3>
            </div>
            <button className="bg-white cursor-pointer text-[#d4af37] px-5 py-2.5 rounded-[10px] hover:scale-105  duration-500 transition">
              Book Now
            </button>
          </div>
        </div>

        {/* Right Cards Section */}
        <div className="md:w-2/3 flex flex-col gap-6">

          {/* Vision Card */}
          <div className="flex flex-col md:flex-row h-60  hover:shadow-2xl transition-all shadow-xl duration-500 shadow-xl bg-white shadow-md rounded-lg overflow-hidden">
            <div className="md:w-1/3 bg-[#d4af37] p-5 flex items-center justify-center">
              <h2 className="text-4xl font-bold text-white text-center">Our <br /> Vision</h2>
            </div>
            <div className="md:w-2/3 p-9 text-gray-700 text-[18px]">
              To redefine fabric care and personal luxury in Qatar through innovation, fragrance, and flawless service — making Akoya Premium Laundry the symbol of elegance and trust in every home.
            </div>
          </div>

          {/* Mission Card */}
          <div className="flex flex-col h-60 md:flex-row  hover:shadow-2xl transition-all duration-500 bg-white shadow-md rounded-lg overflow-hidden">
            <div className="md:w-2/3 p-5 text-gray-700 text-[18px]">
              At Akoya Premium Laundry, we strive to offer premium laundry, delivery, and custom perfume solutions that combine technology, artistry, and care. Our mission is to transform daily routines into refined experiences through exceptional service, attention to detail, and sustainable practices.
            </div>
            <div className="md:w-1/3 bg-black p-6 flex items-center justify-center">
              <h2 className="text-4xl font-bold text-white text-center">Our <br />Mission</h2>
            </div>
          </div>

          {/* Core Values */}
       <div className="bg-white py-10 px-6 md:px-12 rounded-xl shadow-lg max-w-6xl mx-auto">
  <h2 className="text-[40px] font-bold mb-10 text-center">Our Core Values</h2>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

    {/* Excellence */}
    <div className="flex items-start gap-4 p-6 hover:shadow-2xl transition-all duration-500 border-l-4 rounded-xl shadow-md border-[#d4af37]">
      <div className="bg-[#d4af37] px-3.5 py-3.5 rounded flex items-center justify-center text-white font-bold text-2xl ">
       <GoDotFill />
      </div>
      <div>
        <h3 className="font-semibold text-lg mb-1">Excellence</h3>
        <p className="text-gray-600 text-[16px]">
          Every item, every wash, every fragrance meets the highest standards.
        </p>
      </div>
    </div>

    {/* Innovation */}
    <div className="flex items-start gap-4 p-6  hover:shadow-2xl transition-all duration-500 border-l-4 rounded-xl shadow-md border-[#d4af37]">
      <div className="bg-[#d4af37]  px-3.5 py-3.5 rounded flex items-center justify-center text-white font-bold text-lg">
        <GoDotFill />
      </div>
      <div>
        <h3 className="font-semibold text-lg mb-1">Innovation</h3>
        <p className="text-gray-600 text-[16px]">
          We use advanced systems and smart logistics to deliver faster and cleaner results.
        </p>
      </div>
    </div>

    {/* Sustainability */}
    <div className="flex items-start gap-4 hover:shadow-2xl transition-all duration-500 p-6 border-l-4 rounded-xl shadow-md border-[#d4af37]">
      <div className="bg-[#d4af37]  px-3.5 py-3.5 rounded flex items-center justify-center text-white font-bold text-lg">
       <GoDotFill />
      </div>
      <div>
        <h3 className="font-semibold text-lg mb-1">Sustainability</h3>
        <p className="text-gray-600 text-[16px]">
          We commit to eco-friendly methods and responsible operations.
        </p>
      </div>
    </div>

    {/* Customer Focus */}
    <div className="flex items-start gap-4 hover:shadow-2xl transition-all duration-500 p-6 border-l-4 rounded-xl shadow-md border-[#d4af37]">
      <div className="bg-[#d4af37]  px-3.5 py-3.5 rounded flex items-center justify-center text-white font-bold text-lg">
       <GoDotFill />
      </div>
      <div>
        <h3 className="font-semibold text-lg mb-1">Customer Focus</h3>
        <p className="text-gray-600 text-[16px]">
          Your satisfaction drives everything we do.
        </p>
      </div>
    </div>

  </div>
</div>

        </div>
      </div>
    </div>
  );
};

export default VisionMission;