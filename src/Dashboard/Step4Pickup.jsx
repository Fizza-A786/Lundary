// src/Pages/Step4Pickup.jsx
import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const Step4Pickup = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { service, items, steam, oud, perfume } = location.state || {};

  // Redirect back if previous data missing
  useEffect(() => {
    if (!service || !items) navigate("/clothes-selection");
  }, [service, items, navigate]);

  const [pickupDate, setPickupDate] = useState("");
  const [pickupTime, setPickupTime] = useState("");
  const [perfumeChoice, setPerfumeChoice] = useState(perfume || null);

  // Prices
  const itemsTotal = Object.values(items).reduce(
    (acc, item) => acc + item.price * item.qty,
    0
  );
  const steamPrice = steam === "Yes" ? 5 : 0;
  const oudPrice = oud === "Yes" ? 10 : 0;
  const perfumePrice = perfumeChoice === "Yes" ? 8 : 0;
  const totalPrice = itemsTotal + steamPrice + oudPrice + perfumePrice;

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#5c461b] via-[#8c6d2e] to-[#e9dfc8] py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8 mt-8">

        {/* LEFT SIDE */}
        <div className="bg-white rounded-2xl shadow-xl w-full lg:w-[75%] overflow-hidden">

          {/* progress */}
          <div className="w-full h-2 bg-gray-200">
            <div className="h-2 bg-[#d4af37]" style={{ width: "80%" }}></div>
          </div>

          {/* header */}
          <div className="bg-gradient-to-r from-[#3d2f0f] to-[#7a5c1e] text-white p-6">
            <h2 className="text-2xl font-semibold">AKOYA PREMIUM LAUNDRY</h2>
            <p className="text-sm opacity-80">Step 4 of 6</p>
          </div>

          <div className="p-10 space-y-8">

            {/* Perfume option */}
            <div>
              <h3 className="text-lg font-semibold mb-4">
                Would you like your clothes to be perfumed?
              </h3>
              <div className="flex gap-6">
                {["Yes", "No"].map(opt => (
                  <button
                    key={opt}
                    onClick={() => setPerfumeChoice(opt)}
                    className={`flex-1 py-4 rounded-lg font-medium border transition text-center text-lg
                      ${perfumeChoice === opt
                        ? "bg-[#d4af37] text-white border-[#d4af37]"
                        : "bg-gray-100 text-gray-700 border-gray-300 hover:bg-gray-200"}`}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </div>

            {/* Pickup Date */}
            <div>
              <h3 className="text-lg font-semibold mb-2">Pickup Date</h3>
              <input
                type="date"
                value={pickupDate}
                onChange={(e) => setPickupDate(e.target.value)}
                className="w-full border rounded-lg px-4 py-3 text-sm"
              />
            </div>

            {/* Pickup Time */}
            <div>
              <h3 className="text-lg font-semibold mb-2">Pickup Time</h3>
              <input
                type="time"
                value={pickupTime}
                onChange={(e) => setPickupTime(e.target.value)}
                className="w-full border rounded-lg px-4 py-3 text-sm"
              />
            </div>

          </div>

          {/* Footer buttons */}
          <div className="p-6 flex justify-between bg-gray-50">
            <button
              onClick={() => navigate(-1)}
              className="px-8 py-3 bg-gray-300 rounded-lg font-medium"
            >
              Back
            </button>

            <button
              onClick={() =>
                navigate("/step5", { state: { service, items, steam, oud, perfume: perfumeChoice, pickupDate, pickupTime } })
              }
              disabled={!perfumeChoice || !pickupDate || !pickupTime}
              className={`px-8 py-3 rounded-lg text-white font-semibold
                ${perfumeChoice && pickupDate && pickupTime
                  ? "bg-[#d4af37] hover:bg-[#c8a22e]"
                  : "bg-gray-300 cursor-not-allowed"}`}
            >
              Next
            </button>
          </div>

        </div>

        {/* RIGHT SIDE ORDER SUMMARY */}
        <div className="bg-white rounded-2xl shadow-xl w-full lg:w-[25%] h-fit">
          <div className="p-6 border-b">
            <h3 className="text-lg font-semibold">Order Summary</h3>
          </div>

          <div className="p-6 space-y-6">

            {/* Service */}
            <div className="flex justify-between border-b pb-2">
              <span className="flex gap-2 text-sm">
                {service?.icon} {service?.title}
              </span>
            </div>

            {/* Items */}
            {Object.keys(items).length === 0 ? (
              <p className="text-sm text-gray-500">No items added</p>
            ) : (
              Object.entries(items).map(([name, data]) => (
                <div key={name} className="flex justify-between text-sm">
                  <span>{name} x{data.qty}</span>
                  <span>{data.price * data.qty} QAR</span>
                </div>
              ))
            )}

            {/* Extra services */}
            {steam && <div className="flex justify-between text-sm"><span>Steam: {steam}</span><span>{steamPrice} QAR</span></div>}
            {oud && <div className="flex justify-between text-sm"><span>Oud Incense: {oud}</span><span>{oudPrice} QAR</span></div>}
            {perfumeChoice && <div className="flex justify-between text-sm"><span>Perfume: {perfumeChoice}</span><span>{perfumePrice} QAR</span></div>}

            {/* Final price */}
            <div className="flex justify-between font-semibold border-t pt-2">
              <span>Total Price</span>
              <span className="text-[#d4af37]">{totalPrice} QAR</span>
            </div>

            {/* Pickup info preview */}
            {pickupDate && pickupTime && (
              <div className="text-sm border-t pt-2">
                <p>Pickup: {pickupDate} at {pickupTime}</p>
              </div>
            )}

          </div>
        </div>

      </div>
    </div>
  );
};

export default Step4Pickup;