import React from "react";
import { FaEnvelope, FaLock } from "react-icons/fa";

// Reusable Input Component
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

const LoginPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#e9e3da] px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl overflow-hidden">
        {/* Header */}
        <div className="bg-[#111111] text-center py-6 px-6">
          <h1 className="text-xl md:text-[23px] font-light text-[#d4af37]">
            AKOYA LUXURY LAUNDRY
          </h1>
          <div className="h-px mt-3 w-full bg-gradient-to-r from-black via-[#d4af37] to-black"></div>
          <p className="text-gray-300 mt-2 text-sm">Sign in to your account</p>
        </div>

        {/* Form */}
        <div className="p-8 space-y-5">
          {/* Email */}
          <InputField
            label="Email Address"
            placeholder="your@email.com"
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

          {/* Remember + Forgot */}
          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2 text-gray-600">
              <input type="checkbox" className="accent-[#d4af37]" />
              Remember me
            </label>
            <a href="#" className="text-[#d4af37] hover:underline">
              Forgot password?
            </a>
          </div>

          {/* Sign In Button */}
          <button className="w-full bg-[#d4af37] hover:bg-[#e8bf3b] text-white py-3 rounded-lg font-medium transition duration-300 shadow-md hover:scale-105">
            Sign in
          </button>

          {/* Signup Link */}
          <div className="text-center text-sm text-gray-600 py-3">
            <div className="flex justify-center items-center gap-4 my-2">
              <div className="h-px w-24 bg-gradient-to-r from-transparent via-gray-400 to-gray-300 opacity-60" />
              <p className="text-gray-800 text-sm tracking-widest uppercase whitespace-nowrap">
                New to AKOYA?
              </p>
              <div className="h-px w-24 bg-gradient-to-l from-transparent via-gray-400 to-gray-300 opacity-60" />
            </div>
            <a
              href="/signup"
              className="text-[#d4af37] font-medium hover:underline mt-6 inline-block"
            >
              Create your account
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;