import { FaBagShopping } from "react-icons/fa6";
import { GoCheck } from "react-icons/go";

const Working = () => {
  return (
    <div className="bg-[#fefcfa] py-20">
      <div className="flex flex-col justify-center items-center gap-5 px-4 mb-16">
        <h1 className="text-2xl md:text-5xl font-light text-center">
          How It Works
        </h1>

        <div className="flex items-center gap-3">
          <div className="h-[2px] w-16 bg-[#d4af37]"></div>
          <span className="text-[#d4af37] font-semibold tracking-widest text-sm md:text-base">
            SEAMLESS PICKUP PROCESS
          </span>
          <div className="h-[2px] w-16 bg-[#d4af37]"></div>
        </div>
      </div>

      <div className="flex px-6 gap-6 justify-center relative">
        <div className="py-10 flex flex-col gap-20">
          <div className="absolute left-0 bottom-60 h-12 w-12 bg-[#d4af37] rounded-full flex items-center justify-center text-white font-bold shadow-lg text-lg">
            4
          </div>
  <div className="absolute left-0 top-120 h-12 w-12 bg-[#d4af37] rounded-full flex items-center justify-center text-white font-bold shadow-lg text-lg">
            2
          </div>
          <div className="flex flex-col items-center justify-center gap-10 px-6">
            <div className="relative w-full md:w-[500px] h-[290px] md:h-[320px] rounded-lg shadow-lg">
              <video
                src="https://lundary.vercel.app/home/Pickup.mp4"
                autoPlay
                loop
                muted
                className="w-full h-full object-cover rounded-lg"
              />
              <div className="absolute -right-5 top-1/2 h-12 w-12 bg-[#d4af37] rounded-full flex items-center justify-center text-white font-bold shadow-lg text-lg">
                1
              </div>
            </div>

            <div className="w-full md:w-[530px] bg-white shadow-md rounded-lg p-6 flex flex-col gap-4">
              <div className="flex items-center gap-4">
                <FaBagShopping className="text-[24px] text-[#d4af37] font-extrabold transition-transform duration-300 group-hover:translate-x-1" />
                <h1 className="text-2xl font-semibold">
                  Professional Collection
                </h1>
              </div>

              <p className="text-gray-700 text-sm md:text-base line-clamp-4">
                Our uniformed valets arrive in discreet luxury vehicles with
                garment bags.
              </p>
              <hr className="border-t border-gray-200" />
              <div className="flex items-center gap-2">
                <GoCheck className="text-[#d4af37] text-lg" />
                <p>Contactless pickup available</p>
              </div>
              <div className="flex items-center gap-2">
                <GoCheck className="text-[#d4af37] text-lg" />
                <p>Digital receipt provided</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center gap-10 px-4 relative">
            <div className="relative w-full md:w-[500px] h-[290px] md:h-[320px] rounded-lg shadow-lg">
              <video
                src="https://lundary.vercel.app/home/ExpertProcessing.mp4"
                autoPlay
                loop
                muted
                className="w-full h-full object-cover rounded-lg"
              />
              <div className="absolute -right-5 top-1/2 h-12 w-12 bg-[#d4af37] rounded-full flex items-center justify-center text-white font-bold shadow-lg text-lg">
                3
              </div>
            </div>

            <div className="w-full md:w-[530px] bg-white shadow-md rounded-lg p-6 flex flex-col gap-4 relative">
              <div className="flex items-center gap-4">
                <FaBagShopping className="text-[24px] text-[#d4af37] font-extrabold transition-transform duration-300 group-hover:translate-x-1" />
                <h1 className="text-2xl font-semibold">
                  Professional Collection
                </h1>
              </div>

              <p className="text-gray-700 text-sm md:text-base line-clamp-4">
                Our uniformed valets arrive in discreet luxury vehicles with
                garment bags.
              </p>
              <hr className="border-t border-gray-200" />
              <div className="flex items-center gap-2">
                <GoCheck className="text-[#d4af37] text-lg" />
                <p>Contactless pickup available</p>
              </div>
              <div className="flex items-center gap-2">
                <GoCheck className="text-[#d4af37] text-lg" />
                <p>Digital receipt provided</p>
              </div>
            </div>
          </div>
        </div>

        <div className="h-auto bg-[#d4af37] w-0.5"></div>

        <div className="py-10 flex flex-col gap-20 mt-7">
          <div className="flex flex-col items-center justify-center gap-10 px-4">
            <div className="w-full md:w-[530px] bg-white shadow-md rounded-lg p-6 flex flex-col gap-4  hover:translate-x-2 transition-all duration-500 hover:shadow-4xl">
              <div className="flex items-center gap-4">
                <FaBagShopping className="text-[24px] text-[#d4af37] font-extrabold transition-transform duration-300 group-hover:translate-x-1" />
                <h1 className="text-2xl font-semibold">
                  Professional Collection
                </h1>
              </div>

              <p className="text-gray-700 text-sm md:text-base line-clamp-4">
                Our uniformed valets arrive in discreet luxury vehicles with
                garment bags.
              </p>
              <hr className="border-t border-gray-200" />
              <div className="flex items-center gap-2">
                <GoCheck className="text-[#d4af37] text-lg" />
                <p>Contactless pickup available</p>
              </div>
              <div className="flex items-center gap-2">
                <GoCheck className="text-[#d4af37] text-lg" />
                <p>Digital receipt provided</p>
              </div>
            </div>

            <div className="w-full md:w-[500px] h-[290px] md:h-[320px] rounded-lg shadow-lg mt-8 hover:scale-105 transition-all duration-500 hover:shadow-4xl">
              <video
                src="https://lundary.vercel.app/home/professional_collection.mp4"
                autoPlay
                loop
                muted
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>

          <div className="flex flex-col items-center justify-center gap-10 px-4 relative">
            <div className="w-full md:w-[530px] bg-white shadow-md rounded-lg p-6 flex flex-col gap-4 relative mt-5  hover:translate-x-2 transition-all duration-500 hover:shadow-4xl">
              <div className="flex items-center gap-4">
                <FaBagShopping className="text-[24px] text-[#d4af37] font-extrabold transition-transform duration-300 group-hover:translate-x-1" />
                <h1 className="text-2xl font-semibold">
                  Professional Collection
                </h1>
              </div>

              <p className="text-gray-700 text-sm md:text-base line-clamp-4">
                Our uniformed valets arrive in discreet luxury vehicles with
                garment bags.
              </p>
              <hr className="border-t border-gray-200" />
              <div className="flex items-center gap-2">
                <GoCheck className="text-[#d4af37] text-lg" />
                <p>Contactless pickup available</p>
              </div>
              <div className="flex items-center gap-2">
                <GoCheck className="text-[#d4af37] text-lg" />
                <p>Digital receipt provided</p>
              </div>
            </div>

            <div className="w-full md:w-[500px] h-[290px] md:h-[320px] rounded-lg shadow-lg  mt-8  hover:scale-105 transition-all duration-500 hover:shadow-2xl ">
              <img
                src="https://lundary.vercel.app/home/luxury.jpg"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Working;