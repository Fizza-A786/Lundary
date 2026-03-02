// src/Pages/ClothesSelection.jsx
import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const ClothesSelection = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const selectedService = location.state?.service;

  // Redirect back if no service selected
  useEffect(() => {
    if (!selectedService) navigate("/BookingDashboard");
  }, [selectedService, navigate]);

  const mens = [
    { id: 1, name: "Thobe", icon: "👕", price: 10 },
    { id: 2, name: "Bisht", icon: "🧥", price: 15 },
    { id: 3, name: "Men's Suit", icon: "🤵", price: 20 },
    { id: 4, name: "Ghutra", icon: "🧕", price: 5 }
  ];

  const womens = [
    { id: 5, name: "Abaya", icon: "🧕", price: 12 },
    { id: 6, name: "Long Dress", icon: "👗", price: 15 },
    { id: 7, name: "Short Dress", icon: "👗", price: 10 },
    { id: 8, name: "Jalabiya", icon: "👚", price: 13 }
  ];

  const [items, setItems] = useState({});

  // Add item
  const addItem = (item) => {
    setItems((prev) => ({
      ...prev,
      [item.name]: {
        price: item.price,
        qty: (prev[item.name]?.qty || 0) + 1
      }
    }));
  };

  // Remove item
  const removeItem = (name) => {
    setItems((prev) => {
      const updated = { ...prev };
      if (updated[name].qty === 1) {
        delete updated[name];
      } else {
        updated[name].qty -= 1;
      }
      return updated;
    });
  };

  // Total price
  const total = Object.values(items).reduce(
    (acc, item) => acc + item.price * item.qty,
    0
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#5c461b] via-[#8c6d2e] to-[#e9dfc8] py-12 px-6">
      <div className="max-w-7xl mt-10 mx-auto flex gap-8">

        {/* LEFT SIDE */}
        <div className="bg-white rounded-2xl shadow-xl w-[75%] overflow-hidden">

          {/* progress */}
          <div className="w-full h-2 bg-gray-200">
            <div className="h-2 bg-[#d4af37]" style={{ width: "32%" }}></div>
          </div>

          {/* header */}
          <div className="bg-gradient-to-r from-[#3d2f0f] to-[#7a5c1e] text-white p-6">
            <h2 className="text-2xl font-semibold">AKOYA PREMIUM LAUNDRY</h2>
            <p className="text-sm opacity-80">Step 2 of 6</p>
          </div>

          <div className="p-10">

            <h3 className="text-xl mb-8 text-gray-700">
              What clothes are you sending us?
            </h3>

            <div className="grid grid-cols-2 gap-10">

              {/* Mens */}
              <div>
                <h4 className="font-semibold mb-4">Men's</h4>
                {mens.map((item) => (
                  <div
                    key={item.id}
                    className="flex justify-between items-center border rounded-lg p-4 mb-4"
                  >
                    <span className="flex gap-2">
                      {item.icon} {item.name} ({item.price} QAR)
                    </span>
                    <button
                      onClick={() => addItem(item)}
                      className="text-[#d4af37] text-xl px-3 py-1  rounded"
                    >
                      +
                    </button>
                  </div>
                ))}
              </div>

              {/* Womens */}
              <div>
                <h4 className="font-semibold mb-4">Women's</h4>
                {womens.map((item) => (
                  <div
                    key={item.id}
                    className="flex justify-between items-center border rounded-lg p-4 mb-4"
                  >
                    <span className="flex gap-2">
                      {item.icon} {item.name} ({item.price} QAR)
                    </span>
                    <button
                      onClick={() => addItem(item)}
                      className="text-[#d4af37] text-xl px-3 py-1  rounded"
                    >
                      +
                    </button>
                  </div>
                ))}
              </div>

            </div>
          </div>

          {/* footer buttons */}
          <div className="p-6 flex justify-between bg-gray-50">
            <button
              onClick={() => navigate(-1)}
              className="px-8 py-3 bg-gray-300 rounded-lg"
            >
              Back
            </button>

            <button
              onClick={() =>
                navigate("/next-step", { state: { service: selectedService, items } })
              }
              className="px-8 py-3 bg-[#d4af37] text-white rounded-lg"
              disabled={Object.keys(items).length === 0}
            >
              Next
            </button>
          </div>

        </div>

        {/* RIGHT SIDE ORDER SUMMARY */}
        <div className="bg-white rounded-2xl shadow-xl w-[25%] h-fit">
          <div className="p-6 border-b">
            <h3 className="text-lg font-semibold">Order Summary</h3>
          </div>

          <div className="p-6 space-y-6">

            {/* Service */}
            <div className="flex justify-between border-b pb-2">
              <span className="flex gap-2 text-sm">
                {selectedService?.icon} {selectedService?.title}
              </span>
              <span
                onClick={() => navigate("/BookingDashboard")}
                className="text-red-500 cursor-pointer"
              >
                ✕
              </span>
            </div>

            {/* Selected Items */}
            {Object.keys(items).length === 0 ? (
              <p className="text-sm text-gray-500">No items added</p>
            ) : (
              Object.entries(items).map(([name, data]) => (
                <div key={name} className="border-b pb-3">
                  <p className="text-sm font-medium">{name}</p>
                  <div className="flex justify-between items-center mt-2">
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => removeItem(name)}
                        className="px-2 border rounded"
                      >
                        -
                      </button>
                      <span>{data.qty}</span>
                      <button
                        onClick={() => addItem({ name, price: data.price })}
                        className="px-2 border rounded"
                      >
                        +
                      </button>
                    </div>
                    <span className="text-sm">{data.price * data.qty} QAR</span>
                  </div>
                </div>
              ))
            )}

            {/* Final Price */}
            <div className="flex justify-between font-semibold">
              <span>Final Price</span>
              <span className="text-[#d4af37]">{total} QAR</span>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

export default ClothesSelection;