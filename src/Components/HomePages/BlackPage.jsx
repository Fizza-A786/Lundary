import { FaCheck, FaPlus } from "react-icons/fa6";
import { IoInformationCircleOutline } from "react-icons/io5";
import { HiOutlineSparkles } from "react-icons/hi";

const BlackPage = () => {
  return (
    <div className="w-full bg-[#151515] flex flex-col">

      {/* Gradient Top Border */}
      <div className="h-1 w-full bg-gradient-to-r from-black via-yellow-500 to-black"></div>

      {/* Content Area */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 px-6 py-16">

        {/* Image with Exclusive Button */}
        <div className="relative w-[380px] h-[360px] md:w-[500px] md:h-[500px]">
          <img
            src="https://lundary.vercel.app/home/aquaClub.jpg"
            alt="Aqua Club"
            className="w-full h-full object-cover rounded-lg shadow-lg"
          />

          {/* Bottom Blackish Gradient */}
          <div className="absolute bottom-0 left-0 w-full h-1/3 rounded-b-lg bg-gradient-to-t from-black/70 to-transparent"></div>

          {/* Exclusive Button */}
          <div className="absolute -top-5 -right-2">
            <span className="bg-[#d4af37] text-black font-bold text-xs md:text-sm px-5 py-3 rounded-full shadow-lg flex justify-center items-center gap-2">
             <HiOutlineSparkles className="text-xl"/> EXCLUSIVE
            </span>
          </div>
        </div>

        {/* Text Section */}
        <div className="text-center md:text-left max-w-lg">
          <h1 className="text-[#d4af37] text-2xl md:text-3xl lg:text-4xl font-light mb-4">
            Akoya Club
          </h1>
          <h3 className="text-white text-xl md:text-xl lg:text-xl font-medium mt-4">
            FOR THE FEW WHO KNOW
          </h3>
          <div className="bg-[#d4af37] w-20 h-[2px] mt-5 mx-auto md:mx-0"></div>

          <p className="text-white text-sm md:text-base mt-6">
            Our invitation-only membership program offers unparalleled benefits
            for those who demand the absolute best in garment care and
            convenience.
          </p>

          {/* Features List */}
          <div className="flex flex-col gap-4 mt-4">
            {[
              "Priority scheduling with 2-hour pickup windows",
              "Dedicated garment concierge",
              "Complimentary fragrance infusion",
              "Luxury packaging as standard",
              "Bi-annual complimentary couture care",
              "Exclusive seasonal offers"
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-4">
                <FaCheck className="text-[#d4af37] font-extrabold" />
                <p className="text-white">{item}</p>
              </div>
            ))}
          </div>

          {/* Buttons */}
          <div className="gap-4 mt-9 flex flex-col sm:flex-row justify-center md:justify-start items-center">
            <button className="border-[#d4af37] border-2 text-[#d4af37] rounded-4xl hover:bg-[#d4af37] py-2 px-4 font-medium flex gap-2 justify-center items-center hover:text-black hover:shadow-2xl shadow-amber-300 transition-all duration-500  cursor-pointer">
              Request Invitation <FaPlus />
            </button>
            <button className="bg-[#d4af37] py-2.5 px-5 rounded-4xl font-medium flex gap-2 justify-center items-center transition-all duration-500 hover:bg-amber-300 hover:shadow-2xl shadow-amber-300  cursor-pointer">
              Learn More <IoInformationCircleOutline className="font-medium text-xl mt-1"/>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlackPage;