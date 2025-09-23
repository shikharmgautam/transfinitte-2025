import React, { useEffect, useRef, useState } from "react";
import DaysToGo from "./DaysToGo";
import icon from "../assets/images/svg/tf-badge.svg";
import arrowWhite from "../assets/images/svg/arrowwhite.svg";
import headerSvg from "../assets/images/svg/header.svg";

export default function StickyNavbar() {
  const stickyRef = useRef(null);
  const [expanded, setExpanded] = useState(false);
  const [originalTop, setOriginalTop] = useState(0);

  useEffect(() => {
    if (stickyRef.current) {
      setOriginalTop(stickyRef.current.offsetTop);
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY >= originalTop+40) {
        setExpanded(true);
      } else {
        setExpanded(false);
      }
    };

    if (originalTop > 0) {
      window.addEventListener("scroll", handleScroll);
    }

    return () => window.removeEventListener("scroll", handleScroll);
  }, [originalTop]);

  return (
    <div className="h-auto w-full bg-black block sm:hidden">
      <div
        ref={stickyRef}
        className={`sticky-bar ${expanded ? "expanded" : ""}`}
      >
        <div className={`flex items-center gap-6 justify-center sticky-bar-0 ${expanded ? "expanded-level-0" : ""} mx-auto`}>
            <span className={`relative inline-block overflow-hidden rounded-xl p-[1px] sticky-bar ${expanded ? "expanded" : ""} mx-auto`}>
              <span className={`absolute inset-[-1000%] bg-[conic-gradient(from_90deg_at_50%_50%,#FF315E_0%,#E861FF_50%,#5e1fff_75%,#FF315E_90%)] sticky-bar-level-1 ${expanded ? "expanded-level-1" : ""}`} />
              <div className={`inline-flex h-full w-full cursor-pointer items-center justify-center rounded-xl bg-gray-950 px-6 py-2 text-xs font-medium text-gray-50 backdrop-blur-3xl gap-x-6 sticky-bar-level-2 ${expanded ? "expanded-level-2" : ""}`}>
                <div className={`text-offwhite text-center font-spacemono text-sm font-bold uppercase tracking-wide sticky-bar-level-3 ${expanded ? "expanded-level-3" : ""}`}>
                  <DaysToGo />
                </div>
                
                <span className={`inline-block align-middle ${expanded ? 'md:hidden' : ''}`}>
                  <img src={icon} alt="icon" style={{ height: 24 }} />
                </span>
                {expanded && (
                  <span className="hidden md:inline align-middle ml-2">
                    <img src={headerSvg} alt="header" style={{ height: 24 }} />
                  </span>
                )}
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
      </div>

      <style>{`
      .expanded-level-0{
      display: flex;
     justify-content: space-between;
      }
     .sticky-bar-0{
      border-radius: 0px;
      padding: 10px 0px;
      }
        .sticky-bar {
          position: sticky;
          top: 0;
           animation: expandNavbar 0.4s ease-in-out forwards;

          z-index: 50;
         
          opacity: 1;
        }

        .sticky-bar.expanded {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          background: #111;

          border-radius: 0;
          box-shadow: 0 2px 10px rgba(0,0,0,0.4);
            animation: expandNavbar 0.4s ease-in-out forwards;

          width: full;
         
        
        }
          .sticky-bar .sticky-bar-level-1 {
           border-radius: 0px;
           
          }
           .expanded-level-1{
          }
           .sticky-bar-2 .sticky-bar-level-2 {
             
           
           min-height: 60px;

           
          }
           .expanded-level-2{
           border-radius: 0px;
         
           min-height: 60px;
           display: flex;
          justify-content: space-between;
          
           }
           .expanded-level-3{
           font-size: 1.25rem;
           }
           .sticky-bar .sticky-bar-level-3 {
           font-size: 0.875rem;
           
          }

        .sticky-bar:not(.expanded) {
          animation: contractNavbar 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards;
        }

        @keyframes expandNavbar {
             0% {
            width: 30vw;
            

            

          }
          100% {
           width: 100vw;
            opacity: 1;
            
          }

        }

        

      

      

      

        // .sticky-bar:not(.expanded) {
        //   animation: contractNavbar 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards;
        // }

        // @keyframes expandNavbar {
        //   0% {
        //     transform: translateY(-20px) scale(0.9);
        //     opacity: 0.5;
        //   }
        //   50% {
        //     transform: translateY(10px) scale(1.05);
        //     opacity: 0.8;
        //   }
        //   100% {
        //     transform: translateY(0) scale(1);
        //     opacity: 1;
        //   }
        // }

        // @keyframes contractNavbar {
        //   0% {
        //     transform: translateY(0) scale(1.05);
        //     opacity: 0.8;
        //   }
        //   50% {
        //     transform: translateY(10px) scale(0.95);
        //     opacity: 0.6;
        //   }
        //   100% {
        //     transform: translateY(0) scale(1);
        //     opacity: 1;
        //   }
        // }

        // /* Animate child elements during expansion */
        // .sticky-bar.expanded .flex {
        //   animation: fadeInElements 0.4s ease-in-out forwards;
        // }

        // .sticky-bar:not(.expanded) .flex {
        //   animation: fadeOutElements 0.4s ease-in-out forwards;
        // }

        // @keyframes fadeInElements {
        //   0% {
        //     opacity: 0;
        //     transform: translateY(10px);
        //   }
        //   100% {
        //     opacity: 1;
        //     transform: translateY(0);
        //   }
        // }

        // @keyframes fadeOutElements {
        //   0% {
        //     opacity: 1;
        //     transform: translateY(0);
        //   }
        //   100% {
        //     opacity: 1;
        //     transform: translateY(0);
        //   }
        // }
      `}</style>
    </div>
  );
}