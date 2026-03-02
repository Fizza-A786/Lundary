import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const BookingDashboard = () => {

  const navigate = useNavigate();

  const services = [
    {
      id: 1,
      title: "Washing & Ironing",
      desc: "Complete washing with ironing",
      icon: "👕",
    },
    {
      id: 2,
      title: "Washing, Ironing & Perfume",
      desc: "Complete washing with ironing & perfume",
      icon: "✨",
    },
    {
      id: 3,
      title: "Dry Clean",
      desc: "Professional dry cleaning",
      icon: "🧥",
    },
  ];

  const [selectedService, setSelectedService] = useState(null);

  // progress directly calculate
  const progress = selectedService ? 16 : 0;

  const handleNext = () => {
    if (selectedService) {
      navigate("/clothes-selection", {
        state: { service: selectedService },
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#5c461b] via-[#8c6d2e] to-[#e9dfc8] py-12 px-6">

      <div className="max-w-7xl mt-10 mx-auto flex flex-col lg:flex-row gap-8">

        {/* LEFT */}
        <div className="bg-white rounded-2xl shadow-xl w-full lg:w-[75%] overflow-hidden">

          {/* progress */}
          <div className="w-full h-2 bg-gray-200">
            <div
              className="h-2 bg-[#d4af37] transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>

          {/* header */}
          <div className="bg-gradient-to-r from-[#3d2f0f] to-[#7a5c1e] text-white p-6">
            <h2 className="text-2xl font-semibold">AKOYA PREMIUM LAUNDRY</h2>
            <p className="text-sm mt-1 opacity-80">Step 1 of 6</p>
          </div>

          {/* services */}
          <div className="p-10">

            <h3 className="text-gray-700 text-lg mb-8">
              Choose Service Type:
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

              {services.map((service) => (

                <div
                  key={service.id}
                  onClick={() => setSelectedService(service)}
                  className={`border rounded-xl p-6 text-center cursor-pointer transition
                  
                  ${
                    selectedService?.id === service.id
                      ? "border-[#d4af37] bg-[#faf5e6] shadow-lg"
                      : "hover:border-[#d4af37] hover:shadow-lg"
                  }
                  
                  `}
                >

                  <div className="text-3xl mb-4">
                    {service.icon}
                  </div>

                  <h4 className="font-semibold text-gray-800">
                    {service.title}
                  </h4>

                  <p className="text-sm text-gray-500 mt-2">
                    {service.desc}
                  </p>

                </div>

              ))}

            </div>

          </div>

          {/* NEXT BUTTON */}
          <div className="p-6 flex justify-end bg-gray-50">

            <button
              onClick={handleNext}
              disabled={!selectedService}
              className={`px-8 py-3 rounded-lg font-semibold transition
                
                ${
                  selectedService
                    ? "bg-[#d4af37] text-white hover:bg-[#c8a22e]"
                    : "bg-gray-300 text-gray-500 cursor-not-allowed"
                }
              `}
            >
              Next
            </button>

          </div>

        </div>

        {/* RIGHT ORDER SUMMARY */}
        <div className="bg-white rounded-2xl shadow-xl w-full lg:w-[35%] h-fit">

          <div className="p-6 border-b">
            <h3 className="text-lg font-semibold text-gray-800">
              Order Summary
            </h3>
          </div>

          <div className="p-6 space-y-6">

            {selectedService ? (

              <div className="flex justify-between items-center border-b pb-2">

                <span className="flex items-center gap-2 text-sm">
                  {selectedService.icon}
                  {selectedService.title}
                </span>

                <button
                  onClick={() => setSelectedService(null)}
                  className="text-red-500"
                >
                  ✕
                </button>

              </div>

            ) : (

              <p className="text-sm text-gray-500">
                No service selected yet
              </p>

            )}

            <div className="flex gap-2">

              <input
                type="text"
                placeholder="Enter coupon code"
                className="border rounded-lg px-3 py-2 w-full text-sm"
              />

              <button className="bg-[#d4af37] text-white px-3 rounded-lg text-sm">
                Apply
              </button>

            </div>

            <div className="flex justify-between font-semibold">

              <span>Final Price</span>

              <span className="text-[#d4af37]">
                {selectedService ? "20 QAR" : "0 QAR"}
              </span>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
};

export default BookingDashboard;