import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { CiPhone, CiLocationOn } from "react-icons/ci";

const ContactForm = () => {
  return (
    <div className="bg-[#fefcfa] py-20">

      {/* Top Main Heading */}
      <div className="h-[30vh] w-full flex flex-col justify-center items-center gap-5 px-4">
        <h1 className="text-2xl md:text-4xl font-light text-center">
          Contact Us
        </h1>
        <div className="flex items-center gap-3">
          <div className="h-px w-16 bg-[#d4af37]"></div>
          <span className="text-[#d4af37] font-semibold tracking-widest">
            GET IN TOUCH
          </span>
          <div className="h-px w-16 bg-[#d4af37]"></div>
        </div>
      </div>

      {/* Main Section */}
      <div className="max-w-5xl mx-auto px-4 flex flex-col md:flex-row gap-16 mt-12">

        {/* Left Side */}
        <div className="flex-1">

          <h2 className="text-xl font-semibold mb-3">How to reach us</h2>
          <p className="text-gray-600 mb-10 text-[15px] leading-relaxed">
            Our concierge team is available to assist you with any inquiries about our luxury laundry services. Reach out via your preferred method and we'll respond promptly.
          </p>

          <div className="space-y-8">

            {/* Location */}
            <div className="flex items-center gap-4 group">
              <div className="p-3 rounded-lg bg-[#fdc50e18]">
                <CiLocationOn className="text-lg text-[#e9c039]" />
              </div>
              <div>
                <h3 className="font-semibold text-[15px] mb-1">Location</h3>
                <p className="text-gray-600 text-sm">West Bay, Doha, Qatar</p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-center gap-4 group">
              <div className="p-3 bg-[#fdc50e18] rounded-lg">
                <CiPhone className="text-lg text-[#e9c039]" />
              </div>
              <div>
                <h3 className="font-semibold text-[15px] mb-1">Phone</h3>
                <p className="text-gray-600 text-sm">+974 1234 5678</p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-center gap-4 group">
              <div className="p-3 rounded-lg bg-[#fdc50e18]">
                <MdOutlineMail className="text-lg text-[#e9c039]" />
              </div>
              <div>
                <h3 className="font-semibold text-[15px] mb-1">Email</h3>
                <p className="text-gray-600 text-sm">info@akoyalaundry.com</p>
              </div>
            </div>

            {/* Social */}
            <div>
              <h3 className="font-semibold text-[17px] mb-4">Follow Us</h3>
              <div className="flex gap-4">
                <div className="p-3 border rounded-full bg-black text-white transition duration-300 cursor-pointer hover:bg-[#e9c039] hover:-translate-y-1">
                  <FaFacebookF />
                </div>
                <div className="p-3 border rounded-full bg-black text-white transition duration-300 cursor-pointer hover:bg-[#e9c039] hover:-translate-y-1">
                  <FaInstagram />
                </div>
                <div className="p-3 border rounded-full bg-black text-white transition duration-300 cursor-pointer hover:bg-[#e9c039] hover:-translate-y-1">
                  <FaTwitter />
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Right Side Form */}
        <div className="flex-1 bg-white px-9 py-8 rounded-2xl shadow-lg">
          <h3 className="text-xl font-semibold mb-6">Send us a message</h3>

          <form className="space-y-5">

            {/* Full Name */}
            <div>
              <label htmlFor="name" className="block mb-1 font-medium text-[14px] text-gray-700">
                Full Name
              </label>
              <input
                id="name"
                type="text"
                placeholder="Enter your full name"
                className="w-full p-2 border border-gray-300 rounded-lg text-[14px] focus:outline-none focus:ring focus:ring-[#d4af37]"
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block mb-1 font-medium  text-[14px] text-gray-700">
                Email Address
              </label>
              <input
                id="email"
                type="email"
                placeholder="Enter your email"
                className="w-full p-2 border border-gray-300 rounded-lg text-[14px] focus:outline-none focus:ring focus:ring-[#d4af37]"
              />
            </div>

            {/* Subject */}
            <div>
              <label htmlFor="subject" className="block mb-1 font-medium text-[14px] text-gray-700">
                Subject
              </label>
              <input
                id="subject"
                type="text"
                placeholder="Enter message subject"
                className="w-full p-2 border border-gray-300 rounded-lg text-[14px] focus:outline-none focus:ring focus:ring-[#d4af37]"
              />
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="block mb-1 text-[14px] font-medium text-gray-700">
                Your Message
              </label>
              <textarea
                id="message"
                rows="4"
                placeholder="Write your message here"
                className="w-full p-2 border border-gray-300 rounded-lg text-[14px] focus:outline-none focus:ring focus:ring-[#d4af37]"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-black text-white cursor-pointer py-3 rounded-lg hover:scale-105 transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>

      </div>
    </div>
  );
};

export default ContactForm;