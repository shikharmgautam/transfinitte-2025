// import React, { useEffect, useRef, useState } from "react";
// import DaysToGo from "./DaysToGo";
// import icon from "../assets/images/svg/tf-badge.svg";
// import arrowWhite from "../assets/images/svg/arrowwhite.svg";

// export default function StickyNavbar() {
//   const stickyRef = useRef(null);
//   const [expanded, setExpanded] = useState(false);
//   const [originalTop, setOriginalTop] = useState(0);

//   useEffect(() => {
//     if (stickyRef.current) {
//       setOriginalTop(stickyRef.current.offsetTop);
//     }
//   }, []);

//   useEffect(() => {
//     const handleScroll = () => {
//       const currentScrollY = window.scrollY;
//       if (currentScrollY >= originalTop) {
//         setExpanded(true);
//       } else {
//         setExpanded(false);
//       }
//     };

//     if (originalTop > 0) {
//       window.addEventListener("scroll", handleScroll);
//     }

//     return () => window.removeEventListener("scroll", handleScroll);
//   }, [originalTop]);

//   return (
//     <div style={{ height: "200vh", paddingTop: "200px" }}>
//       <div
//         ref={stickyRef}
//         className={`sticky-bar ${expanded ? "expanded" : ""}`}
//       >
//         {expanded ? (
//           // 🔹 EXPANDED NAVBAR
//           <div className="flex items-center justify-between w-full max-w-6xl mx-auto px-6">
//             <div className="flex items-center gap-4">
//               <img src={icon} alt="icon" style={{ height: 32 }} />
//               <div className="text-offwhite font-spacemono text-lg font-bold uppercase tracking-wide">
//                 <DaysToGo />
//               </div>
//             </div>

//             <button className="relative inline-flex h-12 overflow-hidden rounded-xl p-[1px] focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-gray-50">
//               <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#FF315E_0%,#E861FF_50%,#5e1fff_75%,#FF315E_90%)]" />
//               <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-xl bg-gray-950 px-8 py-1 text-sm font-medium text-gray-50 backdrop-blur-3xl">
//                 Register
//                 <img
//                   src={arrowWhite}
//                   alt="arrow"
//                   style={{ height: 16, marginLeft: 6 }}
//                 />
//               </span>
//             </button>
//           </div>
//         ) : (
//           // 🔹 NORMAL STICKY BAR
//           <div className="flex items-center gap-6 justify-center">
//             <span className="relative inline-block overflow-hidden rounded-3xl p-[1px]">
//               <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#FF315E_0%,#E861FF_50%,#5e1fff_75%,#FF315E_90%)]" />
//               <div className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-3xl bg-gray-950 px-6 py-2 text-xs font-medium text-gray-50 backdrop-blur-3xl gap-x-6">
//                 <div className="text-offwhite text-center font-spacemono text-sm font-bold uppercase tracking-wide">
//                   <DaysToGo />
//                 </div>
//                 <img src={icon} alt="icon" style={{ height: 24 }} />
//                 <button className="relative inline-flex h-12 overflow-hidden rounded-xl p-[1px] focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-gray-50">
//                   <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#FF315E_0%,#E861FF_50%,#5e1fff_75%,#FF315E_90%)]" />
//                   <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-xl bg-gray-950 px-8 py-1 text-sm font-medium text-gray-50 backdrop-blur-3xl">
//                     Register
//                     <img
//                       src={arrowWhite}
//                       alt="arrow"
//                       style={{ height: 16, marginLeft: 6 }}
//                     />
//                   </span>
//                 </button>
//               </div>
//             </span>
//           </div>
//         )}
//       </div>

//       <style>{`
//         .sticky-bar {
//           position: sticky;
//           top: 0;
//           transition: all 0.4s ease-in-out, transform 0.4s ease-in-out, opacity 0.4s ease-in-out;
//           z-index: 50;
//           transform: translateY(0) scale(1);
//           opacity: 1;
//         }

//         .sticky-bar.expanded {
//           position: fixed;
//           top: 0;
//           left: 0;
//           right: 0;
//           background: #111;
//           padding: 16px 0;
//           border-radius: 0;
//           box-shadow: 0 2px 10px rgba(0,0,0,0.4);
//           animation: expandNavbar 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards;
//         }

//         .sticky-bar:not(.expanded) {
//           animation: contractNavbar 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards;
//         }

//         @keyframes expandNavbar {
//           0% {
//             transform: translateY(0px) scale(0.9);
            
//           }
//           50% {
//             transform: translateY(0px) scale(1.05);
            
//           }
//           100% {
//             transform: translateY(0) scale(1);
            
//           }
//         }

//         @keyframes contractNavbar {
//           0% {
//             transform: translateY(0) scale(1.05);
            
//           }
//           50% {
//             transform: translateY(0px) scale(0.95);
            
//           }
//           100% {
//             transform: translateY(0) scale(1);
            
//           }
//         }

      

      

      

//         // .sticky-bar:not(.expanded) {
//         //   animation: contractNavbar 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards;
//         // }

//         // @keyframes expandNavbar {
//         //   0% {
//         //     transform: translateY(-20px) scale(0.9);
//         //     opacity: 0.5;
//         //   }
//         //   50% {
//         //     transform: translateY(10px) scale(1.05);
//         //     opacity: 0.8;
//         //   }
//         //   100% {
//         //     transform: translateY(0) scale(1);
//         //     opacity: 1;
//         //   }
//         // }

//         // @keyframes contractNavbar {
//         //   0% {
//         //     transform: translateY(0) scale(1.05);
//         //     opacity: 0.8;
//         //   }
//         //   50% {
//         //     transform: translateY(10px) scale(0.95);
//         //     opacity: 0.6;
//         //   }
//         //   100% {
//         //     transform: translateY(0) scale(1);
//         //     opacity: 1;
//         //   }
//         // }

//         // /* Animate child elements during expansion */
//         // .sticky-bar.expanded .flex {
//         //   animation: fadeInElements 0.4s ease-in-out forwards;
//         // }

//         // .sticky-bar:not(.expanded) .flex {
//         //   animation: fadeOutElements 0.4s ease-in-out forwards;
//         // }

//         // @keyframes fadeInElements {
//         //   0% {
//         //     opacity: 0;
//         //     transform: translateY(10px);
//         //   }
//         //   100% {
//         //     opacity: 1;
//         //     transform: translateY(0);
//         //   }
//         // }

//         // @keyframes fadeOutElements {
//         //   0% {
//         //     opacity: 1;
//         //     transform: translateY(0);
//         //   }
//         //   100% {
//         //     opacity: 1;
//         //     transform: translateY(0);
//         //   }
//         // }
//       `}</style>
//     </div>
//   );
// }