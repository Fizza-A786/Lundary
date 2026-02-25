import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa6";
import { IoLocationOutline, IoCallOutline, IoMailOutline } from "react-icons/io5";
import { GrFormNext } from "react-icons/gr";

const Footer = () => {
  const services = [
    "Premium Laundry",
    "Dry Cleaning",
    "Steam Pressing",
    "Fragrance Infusion",
    "Couture Care",
    "VIP Club"
  ];

  const socialIcons = [FaFacebookF, FaInstagram, FaTwitter];

  return (
    <footer className="w-full bg-[#151515]  text-white">
      {/* Gradient Top Border */}
      <div className="h-1 w-full bg-gradient-to-r from-black via-yellow-500 to-black"></div>

      {/* Footer Content */}
      <div className="w-full max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* About Section */}
        <div className="flex flex-col">
          <div className="h-28 w-28 md:h-32 md:w-32 -mt-13">
            <img
              src="https://lundary.vercel.app/companylogo.png"
              alt="Akoya Club Logo"
              className="h-full w-full object-contain"
            />
          </div>
          <p className="text-gray-300 text-sm md:text-base -mt-3.5">
            Luxury garment care redefined. Serving Doha's discerning clients with unparalleled quality and service.
          </p>
          <div className="flex gap-4 mt-4">
            {socialIcons.map((Icon, idx) => (
              <span
                key={idx}
                className="p-2 bg-[#111] rounded-full hover:bg-[#d4af37] hover:text-black transition-all duration-300 cursor-pointer transform transition-transform duration-300 hover:-translate-y-2"
              >
                <Icon className="text-white hover:text-black " />
              </span>
            ))}
          </div>
        </div>

        {/* Quick Links / Services */}
        <div>
          <h2 className="text-[#d4af37] text-xl font-semibold mb-4">OUR SERVICES</h2>
          <ul className="flex flex-col gap-3">
            {services.map((service, idx) => (
              <li
                key={idx}
                className="flex items-center gap-2 transform transition-transform duration-300 hover:translate-x-2"
              >
                <GrFormNext className="text-[#d4af37]" />
                <a
                  href="#"
                  className="text-gray-300 hover:text-yellow-500 transition-colors duration-300"
                >
                  {service}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Section */}
        <div>
          <h2 className="text-[#d4af37] text-xl font-semibold mb-4">Contact Us</h2>
          <div className="flex items-center gap-2 mb-2">
            <IoLocationOutline className="text-[#d4af37] text-lg" />
            <p className="text-gray-300 text-sm md:text-base">West Bay, Doha, Qatar</p>
          </div>
          <div className="flex items-center gap-2 mb-2">
            <IoCallOutline className="text-[#d4af37] text-lg" />
            <p className="text-gray-300 text-sm md:text-base">+974 3368 9993</p>
          </div>
          <div className="flex items-center gap-2 mb-2">
            <IoMailOutline className="text-[#d4af37] text-lg" />
            <p className="text-gray-300 text-sm md:text-base">Akoyaluxurylaundry@gmail.com</p>
          </div>
        </div>

        {/* Newsletter Section */}
        <div>
          <h2 className="text-[#d4af37] text-xl font-semibold mb-4">NEWSLETTER</h2>
          <p className="text-gray-300 text-sm md:text-base mb-4">
            Subscribe for exclusive offers and garment care tips.
          </p>
          <form className="flex flex-col gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 rounded-md text-gray-500  focus:outline-none focus:border border-[#d4af37] bg-[#41404082] focus:outline-none w-full sm:w-auto flex-1"
            />
            <button
              type="submit"
              className="bg-[#d4af37] text-black px-4 py-2 rounded-md font-semibold hover:bg-yellow-400 transition-colors duration-300 cursor-pointer"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800 mt-6">
        <p className="text-gray-500 text-center text-sm py-4">
          &copy; {new Date().getFullYear()} Akoya Club. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;