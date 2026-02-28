// src/Components/BookingDashboard.jsx
import React from "react";
import { useLocation } from "react-router-dom";

const BookingDashboard = () => {
  // Get product passed from Products page
  const location = useLocation();
  const product = location.state?.product;

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#5c461b] via-[#8c6d2e] to-[#e9dfc8] py-12 px-6">

      {/* Main Container */}
      <div className="max-w-7xl mt-10 mx-auto flex flex-col lg:flex-row gap-8">

        {/* LEFT SIDE (80%) */}
        <div className="bg-white rounded-2xl shadow-xl w-full lg:w-[75%] overflow-hidden">

          {/* Top Header */}
          <div className="bg-gradient-to-r from-[#3d2f0f] to-[#7a5c1e] text-white p-6">
            <h2 className="text-2xl font-semibold">AKOYA PREMIUM LAUNDRY</h2>
            <p className="text-sm mt-1 opacity-80">Step 1 of 6</p>
          </div>

          {/* Content */}
          <div className="p-10">
            <h3 className="text-gray-700 text-lg mb-8">Choose Service Type:</h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Card 1 */}
              <div className="border rounded-xl p-6 text-center hover:shadow-lg hover:border-[#d4af37] transition-all duration-300 cursor-pointer">
                <div className="text-3xl mb-4">👕</div>
                <h4 className="font-semibold text-gray-800">Washing & Ironing</h4>
                <p className="text-sm text-gray-500 mt-2">Complete washing with ironing</p>
              </div>

              {/* Card 2 */}
              <div className="border rounded-xl p-6 text-center hover:shadow-lg hover:border-[#d4af37] transition-all duration-300 cursor-pointer">
                <div className="text-3xl mb-4">✨</div>
                <h4 className="font-semibold text-gray-800">Washing, Ironing & Perfume</h4>
                <p className="text-sm text-gray-500 mt-2">Complete washing with ironing & perfume</p>
              </div>

              {/* Card 3 */}
              <div className="border rounded-xl p-6 text-center hover:shadow-lg hover:border-[#d4af37] transition-all duration-300 cursor-pointer">
                <div className="text-3xl mb-4">🧥</div>
                <h4 className="font-semibold text-gray-800">Dry Clean</h4>
                <p className="text-sm text-gray-500 mt-2">Professional dry cleaning</p>
              </div>
            </div>
          </div>

          {/* Bottom Button */}
          <div className="p-6 flex justify-end bg-gray-50">
            <button className="bg-gray-300 px-8 py-3 rounded-lg text-gray-600 font-semibold">
              Next
            </button>
          </div>
        </div>

        {/* RIGHT SIDE (Order Summary 20%) */}
        <div className="bg-white rounded-2xl shadow-xl w-full lg:w-[25%] h-fit">

          <div className="p-6 border-b">
            <h3 className="text-lg font-semibold text-gray-800">Order Summary</h3>
          </div>

          <div className="p-6 space-y-6">
            {product ? (
              <div className="flex flex-col gap-2">
                <img src={product.image} alt={product.title} className="w-full h-32 object-cover rounded-lg" />
                <h4 className="font-semibold text-gray-800">{product.title}</h4>
                <span className="text-[#d4af37] font-bold">{product.price}</span>
              </div>
            ) : (
              <p className="text-gray-600 text-sm">No product selected yet.</p>
            )}

            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Enter coupon code"
                className="border rounded-lg px-3 py-2 w-full text-sm"
              />
              <button className="bg-[#d4af37] text-white px-3 rounded-lg text-sm">Apply</button>
            </div>

            <div className="flex justify-between font-semibold text-gray-800">
              <span>Final Price</span>
              <span className="text-[#d4af37]">{product?.price || "0 QAR"}</span>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default BookingDashboard;