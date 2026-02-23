import React from "react";
import { FaRegCommentDots } from "react-icons/fa";

const Discription = () => {
  return (
    <section className="bg-[#151515]  py-20 px-6">
      <div className="max-w-5xl mx-auto text-center flex flex-col items-center">


        {/* Heading */}
        <h1 className="text-2xl sm:text-2xl md:text-3xl font-light text-[#d4af37] leading-tight max-w-3xl">
          Need Personalized Service?
        </h1>

        {/* Description */}
        <p className="text-gray-300 mt-6 text-sm sm:text-base md:text-[16px] max-w-2xl leading-relaxed">
          Our VIP concierge team is available 24/7 to handle special requests,
          delicate items, or bulk orders for businesses and residences.
        </p>

        {/* Button */}
        <button className="mt-10 bg-[#d4af37] text-black font-semibold px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 shadow-lg gap-2 flex justify-center items-center">
          Contact Concierge <FaRegCommentDots className="text-[19px]"/>
        </button>

      </div>
    </section>
  );
};

export default Discription;