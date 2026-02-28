// src/Components/Services/Products.jsx
import React, { useState } from "react";
import { GoPlus } from "react-icons/go";
import { useNavigate } from "react-router-dom";

const Products = () => {
  const navigate = useNavigate();

  const filters = [
    "All",
    "Dry Cleaning",
    "Pressing",
    "Specialty",
    "Traditional",
    "Express",
    "Add-on",
  ];

  const products = [
    { id: 1, category: "Dry Cleaning", title: "Premium Suit Care", description: "Eco-friendly dry cleaning for suits & jackets", price: "6 QAR", image: "https://lundary.vercel.app/home/dryCleaning.jpg" },
    { id: 2, category: "Dry Cleaning", title: "Silk Shirt Wash", description: "Gentle cleaning for delicate silk shirts", price: "5 QAR", image: "https://lundary.vercel.app/home/exectivePressing.jpg" },
    { id: 3, category: "Pressing", title: "Executive Pressing", description: "Crisp finishes for business attire", price: "3 QAR", image: "https://lundary.vercel.app/home/care.jpg" },
    { id: 4, category: "Pressing", title: "Couture Care", description: "Hand-cleaning for designer garments and delicate fabrics", price: "From 7 QAR", image: "https://lundary.vercel.app/home/resturation.jpg" },
    { id: 5, category: "Specialty", title: "Bisht Restoration", description: "3-hour turnaround for urgent garment needs", price: "+30% Premium", image: "https://lundary.vercel.app/home/sehedulePickup.jpg" },
    { id: 6, category: "Specialty", title: "Fragrance Infusion", description: "Luxury scent options for your garments", price: "10 QAR", image: "https://lundary.vercel.app/home/fragrance.jpg" },
    { id: 7, category: "Traditional", title: "Dishdasha", description: "Professional care for men's traditional Qatari garment", price: "From 4 QAR", image: "https://lundary.vercel.app/services/dishdasha.webp" },
    { id: 8, category: "Traditional", title: "Child Dishdasha", description: "Specialized care for children's traditional garments", price: "From 3 QAR", image: "https://lundary.vercel.app/services/child_dishdasha.jpg" },
    { id: 9, category: "Express", title: "Bisht", description: "Premium care for ceremonial cloak with gold detailing", price: "From 25 QAR", image: "https://lundary.vercel.app/services/bisht.jpg" },
    { id: 10, category: "Express", title: "Ghutra", description: "Gentle cleaning for traditional headwear", price: "From 3 QAR", image: "https://lundary.vercel.app/services/ghutra.jpg" },
    // Add more products if needed
  ];

  const [activeFilter, setActiveFilter] = useState("All");

  const displayedProducts =
    activeFilter === "All"
      ? products
      : products.filter((p) => p.category === activeFilter);
  const handleOrderClick = (product) => {
    navigate("/BookingDashboard", { state: { product } });
  };

  return (
    <div className="bg-[#fdf8f4] min-h-screen py-14">
      {/* Header */}
      <div className="text-center px-4 mb-12">
        <h1 className="text-4xl font-bold text-gray-800">Our Services</h1>
        <p className="text-gray-600 mt-3">Luxury laundry and garment care services</p>

        {/* Filters */}
        <div className="flex justify-center gap-3 flex-wrap mt-8">
          {filters.map((filter, idx) => (
            <button
              key={idx}
              onClick={() => setActiveFilter(filter)}
              className={`text-sm font-semibold px-5 py-2 rounded-full cursor-pointer transition-all duration-300 ${
                activeFilter === filter
                  ? "bg-black text-white shadow-md"
                  : "bg-white text-gray-800 shadow hover:bg-gray-100"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      {/* Products Grid */}
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {displayedProducts.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-2xl shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 overflow-hidden group flex flex-col"
          >
            {/* Image */}
            <div className="overflow-hidden">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-56 object-cover transform transition-transform duration-500 ease-in-out group-hover:scale-110"
              />
            </div>

            {/* Content */}
            <div className="p-6 flex flex-col flex-grow justify-between">
              <div>
                <div className="flex justify-between items-start">
                  <h3 className="text-lg font-semibold text-gray-800 leading-snug">{product.title}</h3>
                  <span className="text-[#d4af37] font-bold text-sm whitespace-nowrap">{product.price}</span>
                </div>

                <p className="text-gray-600 text-sm mt-3 leading-relaxed">{product.description}</p>
              </div>

              <button
                onClick={() => handleOrderClick(product)}
                className="mt-6 w-full bg-[#d4af37] py-3 rounded-lg text-sm font-semibold text-black hover:bg-black hover:text-[#d4af37] transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
              >
                Order <GoPlus />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;