import { FaBagShopping } from "react-icons/fa6";
import { GoCheck } from "react-icons/go";
import { CiCalendar } from "react-icons/ci";
import { AiOutlineThunderbolt } from "react-icons/ai";
import { HiOutlineCheck } from "react-icons/hi";
import { FaPlus } from "react-icons/fa6";

const Working = () => {
  return (
    <div className="bg-[#fefcfa] py-14 md:py-20">
      {/* Heading */}
      <div className="flex flex-col justify-center items-center gap-5 px-4 mb-12 md:mb-16">
        <h1 className="text-2xl md:text-5xl font-light text-center">
          How It Works
        </h1>

        <div className="flex items-center gap-3">
          <div className="h-[2px] w-10 md:w-16 bg-[#d4af37]"></div>
          <span className="text-[#d4af37] font-semibold tracking-widest text-xs md:text-base text-center">
            SEAMLESS PICKUP PROCESS
          </span>
          <div className="h-[2px] w-10 md:w-16 bg-[#d4af37]"></div>
        </div>
      </div>

      {/* Main Section */}
      <div className="flex flex-col md:flex-row px-4 md:px-6 gap-10 md:gap-6 justify-center relative">

        {/* LEFT SIDE */}
        <div className="relative py-6 md:py-10 flex flex-col gap-14 md:gap-20">

          {/* Circle 2 */}
          <div className="absolute -left-4 md:-left-9 top-[410px] md:top-[510px] h-10 w-10 md:h-12 md:w-12 bg-[#d4af37] rounded-full flex items-center justify-center text-white font-bold shadow-lg text-sm md:text-lg">
            2
          </div>

          {/* Circle 4 */}
          <div className="absolute -left-4 md:-left-9 bottom-[100px] md:bottom-[150px] h-10 w-10 md:h-12 md:w-12 bg-[#d4af37] rounded-full flex items-center justify-center text-white font-bold shadow-lg text-sm md:text-lg">
            4
          </div>

          {/* Step 1 */}
          <div className="flex flex-col items-center justify-center gap-8 md:gap-10 px-2 md:px-6">
            <div className="relative w-full md:w-[500px] h-[250px] md:h-[320px] rounded-lg shadow-lg hover:scale-105 transition-all duration-500">
              <video
                src="https://lundary.vercel.app/home/Pickup.mp4"
                autoPlay
                loop
                muted
                className="w-full h-full object-cover rounded-lg"
              />
              <div className="absolute -right-4 top-1/2 h-10 w-10 md:h-12 md:w-12 bg-[#d4af37] rounded-full flex items-center justify-center text-white font-bold shadow-lg text-sm md:text-lg">
                1
              </div>
            </div>

            <div className="w-full md:w-[530px] bg-white shadow-md rounded-lg p-5 md:p-6 flex flex-col gap-4 hover:translate-x-2 transition-all duration-500">
              <div className="flex items-center gap-4">
                <FaBagShopping className="text-xl md:text-2xl text-[#d4af37]" />
                <h1 className="text-xl md:text-2xl font-semibold">
                  Professional Collection
                </h1>
              </div>

              <p className="text-gray-700 text-sm md:text-base">
                Our uniformed valets arrive in discreet luxury vehicles with garment bags.
              </p>

              <hr />

              <div className="flex items-center gap-2">
                <GoCheck className="text-[#d4af37]" />
                <p>Contactless pickup available</p>
              </div>
              <div className="flex items-center gap-2">
                <GoCheck className="text-[#d4af37]" />
                <p>Digital receipt provided</p>
              </div>
            </div>
          </div>

          {/* Step 3 */}
          <div className="flex flex-col items-center justify-center gap-8 md:gap-10 px-2 md:px-6">
            <div className="relative w-full md:w-[500px] h-[250px] md:h-[320px] rounded-lg shadow-lg hover:scale-105 transition-all duration-500">
              <video
                src="https://lundary.vercel.app/home/ExpertProcessing.mp4"
                autoPlay
                loop
                muted
                className="w-full h-full object-cover rounded-lg"
              />
              <div className="absolute -right-4 top-1/2 h-10 w-10 md:h-12 md:w-12 bg-[#d4af37] rounded-full flex items-center justify-center text-white font-bold shadow-lg text-sm md:text-lg">
                3
              </div>
            </div>

            <div className="w-full md:w-[530px] bg-white shadow-md rounded-lg p-5 md:p-6 flex flex-col gap-4 hover:translate-x-2 transition-all duration-500">
              <div className="flex items-center gap-4">
                <HiOutlineCheck className="text-xl md:text-2xl text-[#d4af37]" />
                <h1 className="text-xl md:text-2xl font-semibold">
                  Luxury Delivery
                </h1>
              </div>

              <p className="text-gray-700 text-sm md:text-base">
                Impeccably packaged garments returned at your preferred time.
              </p>

              <hr />

              <div className="flex items-center gap-2">
                <GoCheck className="text-[#d4af37]" />
                <p>Same-day delivery available</p>
              </div>
              <div className="flex items-center gap-2">
                <GoCheck className="text-[#d4af37]" />
                <p>Hanger-ready with protective covers</p>
              </div>
            </div>
          </div>
        </div>

        {/* YELLOW LINE */}
        <div className="hidden md:block h-auto bg-[#d4af37] w-0.5"></div>

        {/* RIGHT SIDE */}
        <div className="py-6 md:py-10 flex flex-col gap-14 md:gap-20">

          {/* Step 2 */}
          <div className="flex flex-col items-center justify-center gap-8 md:gap-10 px-2 md:px-4">
            <div className="w-full md:w-[530px] bg-white shadow-md rounded-lg p-5 md:p-6 flex flex-col gap-4 hover:translate-x-2 transition-all duration-500">
              <div className="flex items-center gap-4">
                <CiCalendar className="text-xl md:text-2xl text-[#d4af37]" />
                <h1 className="text-xl md:text-2xl font-semibold">
                  Schedule Your Pickup
                </h1>
              </div>

              <p className="text-gray-700 text-sm md:text-base">
                Book through our app, WhatsApp, or website. We offer flexible 2-hour pickup windows.
              </p>

              <hr />

              <div className="flex items-center gap-2">
                <GoCheck className="text-[#d4af37]" />
                <p>24/7 booking availability</p>
              </div>
              <div className="flex items-center gap-2">
                <GoCheck className="text-[#d4af37]" />
                <p>Recurring pickup scheduling available</p>
              </div>
            </div>

            <div className="w-full md:w-[500px] h-[250px] md:h-[320px] rounded-lg shadow-lg hover:scale-105 transition-all duration-500">
              <video
                src="https://lundary.vercel.app/home/professional_collection.mp4"
                autoPlay
                loop
                muted
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>

          {/* Step 4 */}
          <div className="flex flex-col items-center justify-center gap-8 md:gap-10 px-2 md:px-4">
            <div className="w-full md:w-[530px] bg-white shadow-md rounded-lg p-5 md:p-6 flex flex-col gap-4 hover:translate-x-2 transition-all duration-500">
              <div className="flex items-center gap-4">
                <AiOutlineThunderbolt className="text-xl md:text-2xl text-[#d4af37]" />
                <h1 className="text-xl md:text-2xl font-semibold">
                  Expert Processing
                </h1>
              </div>

              <p className="text-gray-700 text-sm md:text-base">
                Your garments receive specialized care at our state-of-the-art facility.
              </p>

              <hr />

              <div className="flex items-center gap-2">
                <GoCheck className="text-[#d4af37]" />
                <p>Individual garment tracking</p>
              </div>
              <div className="flex items-center gap-2">
                <GoCheck className="text-[#d4af37]" />
                <p>Quality control at every stage</p>
              </div>
            </div>

            <div className="w-full md:w-[500px] h-[250px] md:h-[320px] rounded-lg shadow-lg hover:scale-105 transition-all duration-500">
              <img
                src="https://lundary.vercel.app/home/luxury.jpg"
                alt="Luxury"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>

      {/* CENTER BUTTON */}
      <div className="w-full flex justify-center mt-16">
        <button className="bg-black text-white px-8 md:px-8 py-3 md:py-4 rounded-full text-sm md:text-[15px] font-semibold tracking-wide hover:scale-105 hover:shadow-xl transition-all duration-500 flex justify-center items-center gap-2 cursor-pointer" >
          Schedule Your Pickup
          <FaPlus />
        </button>
      </div>

    </div>
  );
};

export default Working;