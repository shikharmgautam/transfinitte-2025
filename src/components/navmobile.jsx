import React, { useEffect, useRef, useState } from "react";
import DaysToGo from "./DaysToGo";
import icon from "../assets/images/svg/tf-badge.svg";
import arrowWhite from "../assets/images/svg/arrowwhite.svg";
import headerSvg from "../assets/images/svg/header.svg";

export default function MobileStickyNavbar() {
    return (
    
    <div className="flex items-center gap-10 sticky top-2 z-50 sm:hidden mx-3">
      <span className="relative inline-block overflow-hidden rounded-xl p-[1px] left-1/2 transform -translate-x-1/2">
        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#FF315E_0%,#E861FF_50%,#5e1fff_75%,#FF315E_90%)]" />
        <div className="inline-flex relative h-full w-full cursor-pointer items-center justify-center rounded-xl bg-gray-950 px-6 py-1 text-xs font-medium text-gray-50 backdrop-blur-3xl  gap-x-3 sm:gap-x-12">
          <div className="text-offwhite text-center font-spacemono text-[0.6rem] not-italic font-bold">
            <DaysToGo />
          </div>
          <img src={icon} alt="icon" style={{ height: 23, marginLeft: 22,marginRight:22 }} />
          <button className="relative inline-flex h-9 overflow-hidden rounded-xl p-[1px] focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-gray-50 min-w-[90px]">
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#FF315E_0%,#E861FF_50%,#5e1fff_75%,#FF315E_90%)]" />
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-xl bg-gray-950 px-8 py-0 text-sm font-medium text-gray-50 backdrop-blur-3xl">
              <div className="pt-1 pb-1 ">Register</div>
              <img
                src={arrowWhite}
                alt="arrow"
                style={{ height: 13, marginLeft: 2 }}
              />
            </span>
          </button>
        </div>
      </span>
    </div>
    
  );
  
}