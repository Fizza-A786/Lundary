import React, { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const Final = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { service, items, steam, oud, perfume, pickupDate, pickupTime } = location.state || {};

  // Redirect if data missing
  useEffect(() => {
    if (!service || !items || !pickupDate || !pickupTime) {
      navigate("/clothes-selection");
    }
  }, [service, items, pickupDate, pickupTime, navigate]);

  // Prices
  const itemsTotal = Object.values(items).reduce(
    (acc, item) => acc + item.price * item.qty,
    0
  );
  const steamPrice = steam === "Yes" ? 5 : 0;
  const oudPrice = oud === "Yes" ? 10 : 0;
  const perfumePrice = perfume === "Yes" ? 8 : 0;
  const totalPrice = itemsTotal + steamPrice + oudPrice + perfumePrice;

  const handleConfirmOrder = () => {
    alert("Order confirmed! Thank you for choosing AKOYA Premium Laundry.");
    navigate("/"); // Redirect to home or success page
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#5c461b] via-[#8c6d2e] to-[#e9dfc8] py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8 mt-8">

        {/* LEFT SIDE */}
        <div className="bg-white rounded-2xl shadow-xl w-full lg:w-[75%] overflow-hidden">
          <div className="w-full h-2 bg-gray-200">
            <div className="h-2 bg-[#d4af37]" style={{ width: "100%" }}></div>
          </div>

          <div className="bg-gradient-to-r from-[#3d2f0f] to-[#7a5c1e] text-white p-6">
            <h2 className="text-2xl font-semibold">AKOYA PREMIUM LAUNDRY</h2>
            <p className="text-sm opacity-80">Step 5 of 6 – Final Checkout</p>
          </div>

          <div className="p-10 space-y-8">
            <h3 className="text-xl font-semibold mb-4">Confirm Your Order</h3>

            <div className="border rounded-lg p-4">
              <p><strong>Pickup Date:</strong> {pickupDate}</p>
              <p><strong>Pickup Time:</strong> {pickupTime}</p>
            </div>

            <div className="border rounded-lg p-4 space-y-2">
              <p><strong>Steam:</strong> {steam}</p>
              <p><strong>Oud Incense:</strong> {oud}</p>
              <p><strong>Perfume:</strong> {perfume}</p>
            </div>
          </div>

          <div className="p-6 flex justify-between bg-gray-50">
            <button
              onClick={() => navigate(-1)}
              className="px-8 py-3 bg-gray-300 rounded-lg font-medium"
            >
              Back
            </button>

            <button
              onClick={handleConfirmOrder}
              className="px-8 py-3 rounded-lg text-white font-semibold bg-[#d4af37] hover:bg-[#c8a22e]"
            >
              Confirm Order
            </button>
          </div>
        </div>

        {/* RIGHT SIDE ORDER SUMMARY */}
        <div className="bg-white rounded-2xl shadow-xl w-full lg:w-[25%] h-fit">
          <div className="p-6 border-b">
            <h3 className="text-lg font-semibold">Order Summary</h3>
          </div>

          <div className="p-6 space-y-6">
            <div className="flex justify-between border-b pb-2">
              <span className="flex gap-2 text-sm">{service?.icon} {service?.title}</span>
            </div>

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

            {steam && <div className="flex justify-between text-sm"><span>Steam</span><span>{steamPrice} QAR</span></div>}
            {oud && <div className="flex justify-between text-sm"><span>Oud Incense</span><span>{oudPrice} QAR</span></div>}
            {perfume && <div className="flex justify-between text-sm"><span>Perfume</span><span>{perfumePrice} QAR</span></div>}

            <div className="text-sm border-t pt-2">
              <p>Pickup: {pickupDate} at {pickupTime}</p>
            </div>

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

export default Final;