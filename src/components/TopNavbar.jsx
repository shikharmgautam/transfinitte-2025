import React from "react";
import arrowWhite from "../assets/images/svg/arrowwhite.svg";

const TopNavbar = () => {
  return (
    <div className="fixed top-0 left-0 w-full bg-gray-900/90 backdrop-blur-sm z-50 border-b border-gray-700">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo - T 25 */}
          <div className="flex items-center gap-2">
            <span className="text-white text-2xl font-bold">T</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500 text-2xl font-bold">
              25
            </span>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#" className="text-white hover:text-gray-300 transition-colors">
              Website
            </a>
            <a href="#" className="text-white hover:text-gray-300 transition-colors">
              Play & Win
            </a>
            <a href="#" className="text-white hover:text-gray-300 transition-colors">
              Goodies & Merch
            </a>
          </div>

          {/* Register Button */}
          <button className="flex items-center gap-2 bg-gray-200 text-gray-800 px-4 py-2 rounded-lg border border-gray-300 hover:bg-gray-300 transition-colors">
            <span className="text-sm font-medium">Register</span>
            <img src={arrowWhite} alt="arrow" className="w-4 h-4 filter brightness-0" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TopNavbar;
