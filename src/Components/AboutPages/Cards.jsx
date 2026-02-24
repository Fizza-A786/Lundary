import React from "react";
import { FaShippingFast, FaHands, FaLeaf } from "react-icons/fa";
import { MdSecurity } from "react-icons/md";
import { RiContactsFill } from "react-icons/ri";
import { FaClock } from "react-icons/fa";

const Cards = () => {
  const cardData = [
    {
      icon: <MdSecurity className="text-4xl text-[#d4af37] mb-4" />,
      title: "Premium Quality",
      description: "We use only the finest eco-friendly detergents and state-of-the-art equipment",
    },
    {
      icon: <RiContactsFill className="text-4xl text-[#d4af37] mb-4" />,
      title: "Personalized Service",
      description: "Tailored solutions for each garment with our expert fabric specialists",
    },
    {
      icon: <FaClock  className="text-4xl text-[#d4af37] mb-4" />,
      title: "Convenience",
      description: "24/7 booking with flexible pickup and delivery options",
    },
  ];

  return (
    <div className="py-20 bg-white">
      {/* Top Heading */}
      <h2 className="text-3xl md:text-4xl text-center mb-12 font-monoCustom">
       Why Choose Akoya
      </h2>

      {/* Cards */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
        {cardData.map((card, index) => (
          <div
            key={index}
            className="bg-[#f8f5f2] p-8 rounded-2xl flex flex-col items-center text-center transition-transform hover:scale-105 duration-300"
          >
            {card.icon}
            <h3 className="text-xl font-semibold mb-3">{card.title}</h3>
            <p className="text-gray-600">{card.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;