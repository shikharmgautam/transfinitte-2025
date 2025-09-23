import React, { useEffect, useRef, useState } from "react";
import DaysToGo from "./DaysToGo";
import icon from "../assets/images/svg/tf-badge.svg";
import arrowWhite from "../assets/images/svg/arrowwhite.svg";
import headerSvg from "../assets/images/svg/header.svg";

export default function MobileStickyNavbar() {
    return (
    
    <div className="flex items-center gap-10 sticky top-2 z-50 sm:hidden">
      <span className="relative inline-block overflow-hidden rounded-xl p-[1px] left-1/2 transform -translate-x-1/2">
        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#FF315E_0%,#E861FF_50%,#5e1fff_75%,#FF315E_90%)]" />
        <div className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-xl bg-gray-950 px-6 py-2 text-xs font-medium text-gray-50 backdrop-blur-3xl gap-x-12">
          <div className="text-offwhite text-center font-spacemono text-[0.875rem] not-italic font-bold sm:leading-5 tracking-[0.35px] uppercase">
            <DaysToGo />
          </div>
          <img src={icon} alt="icon" style={{ height: 24 }} />
          <button className="relative inline-flex h-12 overflow-hidden rounded-xl p-[1px] focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-gray-50">
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#FF315E_0%,#E861FF_50%,#5e1fff_75%,#FF315E_90%)]" />
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-xl bg-gray-950 px-8 py-1 text-sm font-medium text-gray-50 backdrop-blur-3xl">
              Register
              <img
                src={arrowWhite}
                alt="arrow"
                style={{ height: 16, marginLeft: 6 }}
              />
            </span>
          </button>
        </div>
      </span>
    </div>
    
  );
  
}