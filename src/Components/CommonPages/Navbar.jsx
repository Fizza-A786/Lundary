import React, { useState, useEffect, startTransition } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const location = useLocation();

  // Close mobile menu on route change safely
  useEffect(() => {
    startTransition(() => setMenuOpen(false));
  }, [location.pathname]);

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth >= 768) setScrolled(window.scrollY > 80);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Resize effect
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const navbarBg =
    windowWidth < 768
      ? "bg-black/90 backdrop-blur-md"
      : scrolled
      ? "bg-black/25 backdrop-blur-md shadow-md"
      : "bg-transparent";

  return (
    <>
      {/* Desktop Navbar */}
      <nav
        className={`fixed top-0 left-0 w-full border-b border-white/5 z-50 flex items-center justify-between px-6 lg:px-16 h-20 transition-all duration-500 ${navbarBg}`}
      >
        <div className="h-16 w-16 flex items-center justify-center">
          <img
            src="https://lundary.vercel.app/companylogo.png"
            alt="logo"
            className="object-contain"
          />
        </div>

        <ul className="hidden md:flex items-center justify-center gap-7 font-monoCustom">
          {["/", "/Services", "/About"].map((path, i) => (
            <Link key={i} to={path}>
              <li className="text-[16px] text-white hover:text-[#e4bc3b] transition-all hover:scale-105 cursor-pointer">
                {path === "/" ? "Home" : path.replace("/", "")}
              </li>
            </Link>
          ))}
          <Link to="/VisionMission">
            <li className="text-[16px] text-white hover:text-[#e4bc3b] transition-all hover:scale-105 cursor-pointer">
              Vision & Mission
            </li>
          </Link>
          <Link to="/Contact">
            <li className="text-[16px] text-white hover:text-[#e4bc3b] transition-all hover:scale-105 cursor-pointer">
              Contact
            </li>
          </Link>
        </ul>

        <div className="hidden md:flex gap-4">
          <Link to="/login">
            <button className="text-white border border-white/30 px-5 py-2 rounded-full hover:bg-[#faf9f840] transition-all hover:scale-105 duration-300 cursor-pointer">
              Client Login
            </button>
          </Link>
          <Link to="/Booknow">
            <button className="bg-[#e4bc3b] px-5 py-2 rounded-full text-black hover:bg-[#ba9b35] transition-all hover:scale-105 duration-300 cursor-pointer">
              Book Now
            </button>
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden text-white text-2xl cursor-pointer">
          {menuOpen ? (
            <FaTimes onClick={() => setMenuOpen(false)} />
          ) : (
            <FaBars onClick={() => setMenuOpen(true)} />
          )}
        </div>
      </nav>

      {/* Mobile Menu */}
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
          className={`absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center px-10 bg-black/90 transition-transform duration-500 ${
            menuOpen ? "translate-y-0" : "-translate-y-full"
          }`}
        >
          <div className="absolute top-8 right-8 text-white text-2xl cursor-pointer">
            <FaTimes onClick={() => setMenuOpen(false)} />
          </div>

          <ul className="flex flex-col gap-8 text-white text-lg font-semibold">
            <Link to="/">
              <li className="hover:text-[#d4af37]">Home</li>
            </Link>
            <Link to="/Services">
              <li className="hover:text-[#d4af37]">Services</li>
            </Link>
            <Link to="/About">
              <li className="hover:text-[#d4af37]">About</li>
            </Link>
            <Link to="/VisionMission">
              <li className="hover:text-[#d4af37]">Vision & Mission</li>
            </Link>
            <Link to="/Contact">
              <li className="hover:text-[#d4af37]">Contact</li>
            </Link>
          </ul>

          <div className="mt-12 flex flex-col gap-4 px-8">
            <Link to="/login">
              <button className="border border-[#d4af37] text-white py-3 w-70 rounded hover:bg-[#d4af37]/20 transition">
                Client Login
              </button>
            </Link>
            <Link to="/Booknow">
              <button className="bg-[#d4af37] text-black py-3 w-70 rounded hover:scale-105 transition">
                Book Now
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;