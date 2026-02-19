import React from "react";
import { MdArrowForwardIos } from "react-icons/md";

const Garment = () => {
  return (
    <div className="bg-white py-20">

      {/* Heading Section */}
      <div className="h-[30vh] w-full flex justify-center items-center flex-col gap-5">
        <h1 className="text-2xl md:text-5xl font-bold font-monoCustom text-center">
          How Would You Like It Washed?
        </h1>

        <div className="px-3 text-lg md:text-xl font-semibold text-[#d4af37]">
          CHOOSE YOUR EXPERIENCE
        </div>
      </div>

      {/* Cards Section */}
      <div className="max-w-6xl mx-auto flex flex-wrap justify-center gap-10 px-4">

        {/* Card 1 */}
        <div className="w-[500px] h-[280px] bg-[#f5e1da] rounded-2xl shadow-lg p-8 flex flex-col justify-between hover:-translate-y-2 hover:shadow-2xl transition-all duration-500">
          <div>
            <div className="text-3xl mb-5">🧼</div>
            <h2 className="text-2xl font-semibold mb-3">Standard Wash</h2>
            <p className="text-gray-600 text-[17px] leading-relaxed">
              Our signature 48-hour service with gentle cleaning, eco-friendly detergents, and basic folding.
            </p>
          </div>
          <div className="flex justify-between items-center mt-6">
            <span className="text-lg font-semibold text-[#d4af37] uppercase tracking-wide">
              From 50 QAR
            </span>
          </div>
        </div>

        {/* Card 2 */}
        <div className="w-[500px] h-[280px] bg-[#f5e1da] rounded-2xl shadow-lg p-8 flex flex-col justify-between hover:-translate-y-2 hover:shadow-2xl transition-all duration-500">
          <div>
            <div className="text-3xl mb-5">⚡</div>
            <h2 className="text-2xl font-semibold mb-3">Express Wash</h2>
            <p className="text-gray-600 text-[17px] leading-relaxed">
              Need it fast? Get 24-hour turnaround, priority processing, and premium care.
            </p>
          </div>
          <div className="flex justify-between items-center mt-6">
            <span className="text-lg font-semibold text-[#d4af37] uppercase tracking-wide">
              From 80 QAR
            </span>
          </div>
        </div>

      </div>

      {/* View More Button */}
      <div className="flex justify-center mt-12 ">
        <button className="group bg-[#e1b933] text-black px-5 py-4 rounded-full
          flex items-center gap-2 transition-all duration-500 hover:scale-105 ">
       Continue to Garment Selection
        </button>
      </div>

    </div>
  );
};

export default Garment;