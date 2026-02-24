import React from "react";
import { FaUser, FaEnvelope, FaLock, FaPhone } from "react-icons/fa";

const SignupPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#e9e3da] px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl overflow-hidden">
        {/* Header */}
        <div className="bg-[#111111] text-center py-6 px-6">
          <h1 className="text-xl md:text-[23px] font-light text-[#d4af37]">
            AKOYA LUXURY LAUNDRY
          </h1>
          <div className="h-px mt-3 w-full bg-gradient-to-r from-black via-[#d4af37] to-black"></div>
          <p className="text-gray-300 mt-2 text-sm">Create your premium account</p>
        </div>

        {/* Form */}
        <div className="p-8 space-y-5">
          {/* Full Name */}
          <InputField
            label="Full Name"
            placeholder="Enter your full name"
            icon={<FaUser />}
            type="text"
          />

          {/* Email */}
          <InputField
            label="Email Address"
            placeholder="Enter your email address"
            icon={<FaEnvelope />}
            type="email"
          />

          {/* Password */}
          <InputField
            label="Password"
            placeholder="••••••••"
            icon={<FaLock />}
            type="password"
          />

          {/* Confirm Password */}
          <InputField
            label="Confirm Password"
            placeholder="••••••••"
            icon={<FaLock />}
            type="password"
          />

          {/* WhatsApp Phone */}
          <InputField
            label="WhatsApp Phone Number"
            placeholder="+1234567890"
            icon={<FaPhone />}
            type="tel"
          />

          {/* Terms */}
          <div className="flex items-center text-sm">
            <label className="flex items-center gap-2 text-gray-600">
              <input type="checkbox" className="accent-[#d4af37]" />
              I agree to the <span className="text-[#d4af37]">terms and conditions</span>
            </label>
          </div>

          {/* Submit Button */}
          <button className="w-full bg-[#d4af37] hover:bg-[#e8bf3b] text-white py-3 rounded-lg font-medium transition duration-300 shadow-md hover:scale-105">
            Create Account
          </button>

          {/* Login Link */}
          <p className="text-center text-gray-600 text-sm mt-4">
            Already have an account?{" "}
            <a href="/login" className="text-[#d4af37] hover:underline">
              Sign in
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

const InputField = ({ label, placeholder, icon, type }) => {
  return (
    <div>
      <label className="block text-gray-700 mb-2 text-sm font-medium">{label}</label>
      <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2 bg-white focus-within:ring focus-within:ring-[#d4af37] focus-within:bg-blue-50 transition">
        <div className="text-gray-400 mr-2">{icon}</div>
        <input
          type={type}
          placeholder={placeholder}
          className="w-full bg-transparent outline-none text-gray-700 placeholder-gray-400"
        />
      </div>
    </div>
  );
};

export default SignupPage;