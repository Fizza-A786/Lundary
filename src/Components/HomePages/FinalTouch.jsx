import React, { useState } from "react";
import { IoCheckmarkSharp } from "react-icons/io5";
import { FaArrowRightLong } from "react-icons/fa6";
import { BsHandbagFill } from "react-icons/bs";

const FinalTouch = () => {
  const [activeCard, setActiveCard] = useState(null);

  const services = [
    {
      id: 1,
      title: "Plastic Wrap",
      description:
        "Crystal-clear protective wrapping with our embossed gold seal for discreet luxury.",
      price: "Included",
      image: "https://lundary.vercel.app/suit-plastic.jpeg",
      features: [
        "Medical-grade transparency",
        "Anti-static interior",
        "Recyclable material",
        "Tamper-evident closure",
      ],
    },
    {
      id: 2,
      title: "Luxury Fabric Wrap",
      description:
        "Cashmere-lined protective casing with magnetic closure and monogram option.",
      price: "+10 QAR",
      image: "https://lundary.vercel.app/home/package.jpg",
      features: [
        "Italian wool exterior",
        "Silk-lined interior",
        "Magnetic seal",
        "Reusable design",
      ],
    },
    {
      id: 3,
      title: "Premium Gift Box",
      description:
        "Handcrafted wooden presentation case with velvet interior and scent capsule.",
      price: "+4 QAR",
      image: "https://lundary.vercel.app/home/BOX.jpeg",
      features: [
        "Sandalwood construction",
        "French velvet lining",
        "Integrated scent capsule",
        "Heirloom quality",
      ],
    },
  ];

  return (
    <div className="bg-[#fefcfa] py-20">
      {/* Heading */}
      <div className="h-[30vh] w-full flex flex-col justify-center items-center bg-[#fefcfa] gap-5 px-4">
        <h1 className="text-2xl md:text-5xl font-light text-center">
          The Final Touch
        </h1>

        <div className="flex items-center gap-3">
          <div className="h-[2px] w-16 bg-[#d4af37]"></div>
          <span className="text-[#d4af37] font-semibold tracking-widest">
            PACKAGING OPTIONS
          </span>
          <div className="h-[2px] w-16 bg-[#d4af37]"></div>
        </div>
      </div>

      {/* Cards */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 px-6 mt-16">
        {services.map((service) => (
          <div
            key={service.id}
            onClick={() => setActiveCard(service.id)}
            className={`max-w-sm mx-auto bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 overflow-hidden group hover:scale-105 cursor-pointer
            ${
              activeCard === service.id
                ? "border-4 border-[#d4af37]"
                : "border-4 border-transparent"
            }`}
          >
            {/* Image */}
            <div className="relative h-72 bg-gray-100 flex items-center justify-center">
              <img
                src={service.image}
                alt={service.title}
                className="h-full w-full object-contain"
              />

              <button className="absolute bottom-4 left-4 py-1 px-4 bg-[#e5be3c] text-black rounded-full font-semibold hover:bg-[#d4af37] transition-all duration-300">
                {service.price}
              </button>
            </div>

            {/* Content */}
            <div className="p-5 flex flex-col gap-4">
              <h2 className="text-2xl font-semibold">{service.title}</h2>

              <p className="text-gray-600 text-sm">{service.description}</p>

              <ul className="flex flex-col gap-2 mt-2">
                {service.features.map((feature, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-2 text-sm text-gray-700"
                  >
                    <IoCheckmarkSharp className="text-[#d4af37] text-sm" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      {/* Center Button */}
      <div className="flex justify-center">
        <button
          className="group mt-12 bg-black text-white px-10 py-3 rounded-full border
          hover:shadow-amber-100 shadow-2xl hover:scale-105
          transition-all duration-500 flex items-center justify-center gap-2 cursor-pointer"
        >
          <span>Book Your Order</span>
          <BsHandbagFill
            className="text-[18px] transition-transform duration-300 group-hover:translate-x-1"
          />
        </button>
      </div>
    </div>
  );
};

export default FinalTouch;