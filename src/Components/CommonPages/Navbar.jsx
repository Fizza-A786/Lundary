import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth >= 768) {
        setScrolled(window.scrollY > 80);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

 const navbarBg =
  windowWidth < 768
    ? "bg-black/30 backdrop-blur-md"
    : scrolled
      ? "bg-black/25 backdrop-blur-md shadow-md "
      : "bg-transparent";

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full border-b border-white/5 z-50 flex  items-center justify-between px-6 lg:px-16 h-20 transition-all duration-500 ${navbarBg}`}
      >
        <div className="h-16 w-16 flex items-center justify-center">
          <img
            src="https://lundary.vercel.app/companylogo.png"
            alt="logo"
            className="object-contain"
          />
        </div>

        <ul className="hidden md:flex items-center justify-center gap-7 font-monoCustom">
          <Link to="/">
            <li className="text-[16px] text-white hover:text-[#e4bc3b] transition-all hover:scale-105 ">
              Home
            </li>
          </Link>
          <Link to="/Services">
          <li className="text-[16px] text-white hover:text-[#e4bc3b] transition-all duration-300 hover:scale-105">
            Services
          </li>
          </Link>
          <li className="text-[16px] text-white hover:text-[#e4bc3b] transition-all uration-300 hover:scale-105">
            About
          </li>
          <li className="text-[16px] text-white hover:text-[#e4bc3b] transition-all uration-300 hover:scale-105">
            Vision & Mission
          </li>
          <li className="text-[16px] text-white hover:text-[#e4bc3b] transition-all uration-300 hover:scale-105">
            Contact
          </li>
        </ul>
        <div className="hidden md:flex gap-4">
          <button className="text-white border border-white/30 px-4 py-2 rounded-full hover:bg-[#faf9f840] transition-all hover:scale-105 duration-300">
            Client Login
          </button>
          <button className="bg-[#e4bc3b] px-4 py-2 rounded-full text-black hover:bg-[#ba9b35] transition-all hover:scale-105 duration-300">
            Book Now
          </button>
        </div>

        <div className="md:hidden text-white text-2xl cursor-pointer">
          {menuOpen ? (
            <FaTimes onClick={() => setMenuOpen(false)} />
          ) : (
            <FaBars onClick={() => setMenuOpen(true)} />
          )}
        </div>
      </nav>
      <div
        className={`fixed inset-0 z-40 md:hidden transition-all duration-500 ${
          menuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <div
          className="absolute inset-0 bg-black/60"
          onClick={() => setMenuOpen(false)}
        ></div>

        <div
          className={`absolute top-0 left-0 w-full h-full flex flex-col justify-center px-10 bg-black/80 transition-transform duration-500 ${
            menuOpen ? "translate-y-0" : "-translate-y-full"
          }`}
        >
          <div className="absolute top-8 right-8 text-white text-2xl cursor-pointer">
            <FaTimes onClick={() => setMenuOpen(false)} />
          </div>

          <ul className="flex flex-col gap-8 text-white text-lg font-semibold">
            <li className="hover:text-[#d4af37]">Home</li>
            <li className="hover:text-[#d4af37]">Services</li>
            <li className="hover:text-[#d4af37]">About</li>
            <li className="hover:text-[#d4af37]">Vision & Mission</li>
            <li className="hover:text-[#d4af37]">Contact</li>
          </ul>

          <div className="mt-12 flex flex-col gap-6">
            <button className="border border-[#d4af37] text-white py-3 rounded-2xl hover:bg-[#d4af37]/20 transition">
              Client Login
            </button>
            <button className="bg-[#d4af37] text-black py-3 rounded-2xl hover:scale-105 transition">
              Book Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
