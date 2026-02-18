import React from "react";
import { FaStar, FaHeart, FaBolt } from "react-icons/fa";

const cards = [
  {
    id: 1,
    title: "Premium Product",
    description:
      "Our highest tier service for your most precious garments. Hand-washed, steamed, and wrapped in protective tissue..",
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
    <div className="w-full py-15 bg-white flex justify-center">
      <div className="max-w-5xl w-full grid md:grid-cols-3 gap-8 px-4 py-7">
        {cards.map((card) => (
          <div
            key={card.id}
            className="relative flex flex-col justify-between rounded-xl overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300 h-84"
            style={{
              backgroundImage: `url(${card.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="bg-black/50 p-6 flex flex-col h-full justify-between text-white">
              <div>
                <div className="bg-[#d4af37] h-15 w-15 p-3 rounded-full flex justify-center items-center text-3xl">
                  {card.icon}
                </div>

                <h2 className="text-2xl font-semibold mt-5">{card.title}</h2>
                <p className="text-[15px] mt-3">{card.description}</p>
              </div>
              <button className="mt-2 bg-[#d4af37] text-black py-2 px-4 rounded-full hover:scale-105 transition">
                {card.buttonText}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SigProduct;
