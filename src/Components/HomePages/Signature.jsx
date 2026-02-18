import React from "react";

const Signature = () => {
  return (
    <div className="h-[30vh] w-full flex justify-center items-center bg-white flex-col gap-5">
      <h1 className="text-2xl md:text-5xl font-light font-monoCustom text-center">
        Signature Lines
      </h1>

      <div className="flex items-center gap-0">
        <div className="flex-1 h-0.5 bg-[#d4af37] w-20"></div>
        <div className="px-3 text-lg md:text-xl font-semibold  text-[#d4af37] ">THE AKOYA COLLECTION</div>
        <div className="flex-1 h-0.5 bg-[#d4af37] w-20"></div>
      </div>
    </div>
  );
};

export default Signature;