// src/Pages/Step3ExtraServices.jsx
import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const Step3ExtraServices = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { service, items } = location.state || {};

  // Redirect back if no data
  useEffect(() => {
    if (!service || !items) navigate("/clothes-selection");
  }, [service, items, navigate]);

  const [steam, setSteam] = useState(null); // Yes / No
  const [oud, setOud] = useState(null); // Yes / No

  // Total price calculation
  const itemsTotal = Object.values(items).reduce(
    (acc, item) => acc + item.price * item.qty,
    0
  );

  // Extra service prices
  const steamPrice = steam === "Yes" ? 5 : 0;
  const oudPrice = oud === "Yes" ? 10 : 0;

  const totalPrice = itemsTotal + steamPrice + oudPrice;

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#5c461b] via-[#8c6d2e] to-[#e9dfc8] py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8 mt-8">

        {/* LEFT SIDE */}
        <div className="bg-white rounded-2xl shadow-xl w-full lg:w-[75%] overflow-hidden">

          {/* progress */}
          <div className="w-full h-2 bg-gray-200">
            <div className="h-2 bg-[#d4af37]" style={{ width: "48%" }}></div>
          </div>

          {/* header */}
          <div className="bg-gradient-to-r from-[#3d2f0f] to-[#7a5c1e] text-white p-6">
            <h2 className="text-2xl font-semibold">AKOYA PREMIUM LAUNDRY</h2>
            <p className="text-sm opacity-80">Step 3 of 6</p>
          </div>

          <div className="p-10 space-y-8">

            {/* Steam option */}
            <div>
              <h3 className="text-lg font-semibold mb-4">
                Do you want us to steam the garments?
              </h3>
              <div className="flex gap-6">
                {["Yes", "No"].map((opt) => (
                  <button
                    key={opt}
                    onClick={() => setSteam(opt)}
                    className={`flex-1 py-4 rounded-lg font-medium border transition
                      ${steam === opt
                        ? "bg-[#d4af37] text-white border-[#d4af37]"
                        : "bg-gray-100 text-gray-700 border-gray-300 hover:bg-gray-200"}
                      text-center text-lg`}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </div>

            {/* Oud option */}
            <div>
              <h3 className="text-lg font-semibold mb-4">
                Would you like your clothes to be incensed with Oud?
              </h3>
              <div className="flex gap-6">
                {["Yes", "No"].map((opt) => (
                  <button
                    key={opt}
                    onClick={() => setOud(opt)}
                    className={`flex-1 py-4 rounded-lg font-medium border transition
                      ${oud === opt
                        ? "bg-[#d4af37] text-white border-[#d4af37]"
                        : "bg-gray-100 text-gray-700 border-gray-300 hover:bg-gray-200"}
                      text-center text-lg`}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </div>

          </div>

          {/* footer buttons */}
          <div className="p-6 flex justify-between bg-gray-50">
            <button
              onClick={() => navigate(-1)}
              className="px-8 py-3 bg-gray-300 rounded-lg font-medium"
            >
              Back
            </button>

            <button
              onClick={() =>
                navigate("/step4", { state: { service, items, steam, oud } })
              }
              disabled={steam === null || oud === null}
              className={`px-8 py-3 rounded-lg text-white font-semibold
                ${steam !== null && oud !== null
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

            {/* Selected Items */}
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
            {steam && (
              <div className="flex justify-between text-sm">
                <span>Steam: {steam}</span>
                <span>{steamPrice} QAR</span>
              </div>
            )}
            {oud && (
              <div className="flex justify-between text-sm">
                <span>Oud Incense: {oud}</span>
                <span>{oudPrice} QAR</span>
              </div>
            )}

            {/* Final price */}
            <div className="flex justify-between font-semibold border-t pt-2">
              <span>Total Price</span>
              <span className="text-[#d4af37]">{totalPrice} QAR</span>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

export default Step3ExtraServices;