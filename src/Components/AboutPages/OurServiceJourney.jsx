import React from 'react';
import { FaTshirt, FaBoxOpen, FaPumpSoap, FaBox, FaWhatsapp, FaRobot } from "react-icons/fa";
import { GiDelicatePerfume } from "react-icons/gi";
import { IoIosGift } from "react-icons/io";

const OurServiceJourney = () => {
  const steps = [
    { id: 1, icon: <FaTshirt size={30} className="text-yellow-500" />, title: "Select Wash Type", description: "Standard or Express wash options to suit your needs" },
    { id: 2, icon: <FaBoxOpen size={30} className="text-yellow-500" />, title: "Choose Garments", description: "From daily wear to delicate couture - we handle all" },
    { id: 3, icon: <FaPumpSoap size={30} className="text-yellow-500" />, title: "Steam Finishing", description: "Professional pressing for impeccable results" },
    { id: 4, icon: <GiDelicatePerfume size={30} className="text-yellow-500" />, title: "Fragrance Infusion", description: "Luxury scents for men and women" },
    { id: 5, icon: <FaBox size={30} className="text-yellow-500" />, title: "Packaging", description: "Choose from our premium wrapping options" },
    { id: 6, icon: <IoIosGift size={30} className="text-yellow-500" />, title: "Personalization", description: "Add a custom card for gifts" },
    { id: 7, icon: <FaWhatsapp size={30} className="text-yellow-500" />, title: "WhatsApp Checkout", description: "Easy confirmation via WhatsApp" },
    { id: 8, icon: <FaRobot size={30} className="text-yellow-500" />, title: "AI Assistance", description: "3D avatars guide you in Arabic & English" },
  ];

  return (
    <div className="py-16 px-4 bg-[#f8f5f2] ">
      <h2 className="text-3xl md:text-4xl text-center mb-12">
        Our Service Journey
      </h2>
      <div className="flex flex-wrap justify-center items-start gap-6">
        {steps.map((step) => (
          <div
            key={step.id}
            className="bg-white shadow-lg rounded-2xl p-6 w-64 min-h-50 text-center flex flex-col justify-start items-center hover:scale-105 transition-all duration-300"
          >
            <div className="mb-4 justify-self-start">{step.icon}</div>
            <h3 className="text-[16px] font-semibold mb-2">{step.id}. {step.title}</h3>
            <p className="text-gray-600 text-[15px]">{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurServiceJourney;