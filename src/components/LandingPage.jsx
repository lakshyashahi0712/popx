import React from "react";
import { Link } from "react-router-dom";
const LandingPage = () => (
  <div className="min-h-screen bg-[#f6f6f7] flex items-end justify-center">
    <div className="w-full max-w-sm px-4 pb-12">
      <h1 className="text-2xl font-bold text-gray-900 mb-2">Welcome to PopX</h1>
      <p className="text-gray-500 mb-8">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
      </p>
      <button className="w-full bg-[#a259ff] text-white font-semibold py-3 rounded-lg mb-3 transition hover:bg-[#8a3be6]">
        <Link to="/signup"> Create Account</Link>
      </button>
      <button className="w-full bg-[#ede5fa] text-[#6c47b6] font-semibold py-3 rounded-lg">
       <Link to="/login"> Already Registered? Login</Link>
      </button>
    </div>
  </div>
);

export default LandingPage;
