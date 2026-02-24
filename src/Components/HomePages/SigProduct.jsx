import { MdArrowForwardIos } from "react-icons/md";
import { IoArrowForward } from "react-icons/io5";
import { FaArrowRightLong } from "react-icons/fa6";

const cards = [
  {
    id: 1,
    title: "Premium Product",
    description:
      "Our highest tier service for your most precious garments. Hand-washed, steamed, and wrapped in protective tissue.",
    icon: "✨",
    image: "https://lundary.vercel.app/home/platinumCare.jpg",
    buttonText: "Discover",
  },
  {
    id: 2,
    title: "Exclusive Collection",
    description:
      "Precision care for business attire. Perfect creases, stain removal, and fabric revitalization for your professional image.",
    icon: "👔",
    image: "https://lundary.vercel.app/home/exectiveCollection.jpg",
    buttonText: "Discover",
  },
  {
    id: 3,
    title: "Couture Preservation",
    description:
      "Specialized care for designer pieces and delicate fabrics. Museum-quality cleaning to maintain texture and color integrity.",
    icon: "🧵",
    image: "https://lundary.vercel.app/home/professionalCollection.jpg",
    buttonText: "Discover",
  },
];

const SigProduct = () => {
  return (
    <div className="w-full py-16 bg-[#fefcfa] flex justify-center">
      
      {/* Column Wrapper */}
      <div className="max-w-6xl w-full flex flex-col items-center px-4">
        
        {/* Cards Grid */}
        <div className="w-full grid md:grid-cols-3 gap-8">
          {cards.map((card) => (
            <div
              key={card.id}
              className="relative group rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 min-h-[340px]"
            >
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{
                  backgroundImage: `url(${card.image})`,
                }}
              ></div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/50 group-hover:bg-black/40 transition-all duration-500"></div>

              {/* Content */}
              <div className="relative z-10 p-6 flex flex-col justify-between h-full text-white">
                
                <div>
                  <div className="bg-[#d4af37] h-14 w-14 rounded-full flex justify-center items-center text-2xl">
                    {card.icon}
                  </div>

                  <h2 className="text-2xl font-semibold mt-5">
                    {card.title}
                  </h2>

                  <p className="text-sm mt-3 leading-relaxed">
                    {card.description}
                  </p>
                </div>

                <button
                  className="group mt-6 bg-[#d4af37] text-black py-2 px-7 rounded-full 
                  hover:bg-black hover:text-amber-400
                  transition-all duration-500 flex items-center gap-2 w-fit  cursor-pointer"
                >
                  {card.buttonText}
                  <MdArrowForwardIos className="text-xs transition-transform duration-300 group-hover:translate-x-1" />
                </button>

              </div>
            </div>
          ))}
        </div>

        {/* Bottom Section Button */}
       <button
  className="group mt-12  bg-[#fefcfa] text-black px-10 py-3 rounded-full border
  hover:bg-black hover:text-white
  transition-all duration-500 flex items-center justify-center gap-2  cursor-pointer"
>
  <span>View All Services</span>
  
  <FaArrowRightLong
    className="text-sm transition-transform duration-300 group-hover:translate-x-1 mt-1"
  />
</button>

      </div>
    </div>
  );
};

export default SigProduct;