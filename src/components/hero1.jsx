import React, { useState } from "react";
import dino from "../assets/images/dino.png";
import tiltT from "../assets/images/svg/tiltT.svg";
import StickyNavbar from './Nav.jsx';
import arrowWhite from "../assets/images/svg/arrowwhite.svg";
import tfBadge from "../assets/images/svg/tf-badge.svg";
import tabStickyNavbar from "./navTab";
import whitearrow from "../assets/images/svg/whitearrow.svg";
import herobg from "../assets/images/hero/hero-bg.png";
import { heroOne, heroTwo, mobilehero, mobileone } from '../assets';


const Hero1 = ({ expandedCard, setExpandedCard, onMainCardClick }) => {
  // Unified handler for both button and card clicks
  const handleCardClick = (cardType) => {
    setExpandedCard(cardType);
  };
  const handleClose = () => {
    setExpandedCard(null);
  };



  return (
    <>
      {/* Mobile & md-down layout: visible below md */}
      <div
        className="custom-max1300:block hidden min-h-screen w-full px-2 py-2 relative"
// Add this to your global CSS (e.g., index.css or App.css):
// @media (max-width: 1300px) {
//   .custom-max1300\:hidden { display: none !important; }
//   .custom-max1300\:block { display: block !important; }
// }
        style={{
          backgroundImage: `url(${mobilehero})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundColor: '#2a2a2a80',
        }}
      >
        {/* Topbar: 7vh */}
        <div className="flex items-center justify-between w-full px-2" style={{height: '7vh', minHeight: 40}}>
          <div className="flex items-center gap-2">
            <img src={tfBadge} alt="TF 25 logo" className="h-8 w-auto" />
          </div>
          <div />
        </div>
        {/* Main Card: 40vh */}
        <div
          className="rounded-2xl bg-black w-full mt-2 mb-4 p-5 relative overflow-hidden flex flex-col justify-between"
          style={{ height: '40vh', minHeight: 220 }}
          onClick={onMainCardClick}
        >
          <div
            className="absolute inset-0 z-0 pointer-events-none select-none"
            style={{
              backgroundImage: `url(${mobilehero})`,
              backgroundSize: '550% 550%',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
            }}
          />
          <span className="absolute top-4 left-4 bg-white text-black rounded-full px-3 py-1 text-xs font-semibold z-10">Registrations start in 10 days</span>
          <div className="mt-10 mb-2 z-10 relative">
            <h1 className="text-white text-4xl font-bold leading-tight mb-2">Ready to Hack?</h1>
            <button className="flex items-center gap-2 text-white text-lg font-semibold mt-2">Get Updates <span><img src={whitearrow} alt="" /></span></button>
          </div>
        <div className={`flex items-center justify-center gap-1 absolute  -translate-x-1/2 z-0 font-neue-xxthin m-0 p-0 overflow-hidden -bottom-[40vw] -right-[44vw] sm:-bottom-[30vh] sm:-right-[40vh]`}>
                <span className={`   bg-[linear-gradient(-12deg,rgba(0,0,0,1)_0%,rgba(0,0,0,0)_50%),conic-gradient(from_90deg_at_50%_50%,#E861FF_0%,#EF315E_50%,#FF315E_75%,#E861FF_90%)] bg-clip-text text-transparent -rotate-[12.32deg] text-[80vw] sm:text-[60vh]`}>2</span>
                <span className={`  bg-[linear-gradient(-12deg,rgba(0,0,0,1)_0%,rgba(0,0,0,0)_50%),conic-gradient(from_90deg_at_50%_50%,#E861FF_0%,#EF315E_50%,#FF315E_75%,#E861FF_90%)] bg-clip-text text-transparent -rotate-[12.32deg] translate-y-[5vw] lg:translate-y-[5vh] text-[80vw] sm:text-[60vh]`}>5</span>
              </div>
        </div>
        {/* Play to win Card: 20vh */}
        <div className="rounded-2xl bg-black w-full mb-4 p-5 relative flex flex-col overflow-hidden"
          style={{height: '20vh', minHeight: 100}}>
          <div className="flex items-center justify-between mb-2">
            <span className="text-white text-2xl font-bold">Play to win</span>
            <span className="text-radial-gradient text-sm font-semibold cursor-pointer">View Leaderboard</span>
          </div>
          <div className="flex items-center justify-center">
            <img src={dino} alt="dino" className="h-[90%] w-auto top-3" />
          </div>
        </div>
        {/* Merch Card: 20vh */}
        <div className="rounded-2xl bg-black w-full mb-4 p-5 relative flex flex-col gap-2 overflow-hidden"
          style={{height: '20vh', minHeight: 100}}>
          <span className="text-white text-2xl font-bold mb-2 z-10">Get our Merch</span>
          <button className="bg-white text-black rounded-lg px-4 py-2 text-sm font-semibold w-fit z-10 flex items-center">Register for merch  <img src={whitearrow} alt="arrow" className="w-4 h-4 filter brightness-0 top-[50%]" /></button>
          <img src={tiltT} alt="tilted T logo" className="absolute -bottom-8 -right-8 h-[120%] w-auto pointer-events-none select-none z-0" style={{filter:'brightness(1.2)'}} />
        </div>
      </div>

      {/* Desktop layout: visible md and up */}
  <div className="min-h-screen hero1-bg relative z-10 custom-max1300:hidden block">
        {/* StickyNavbar at top of hero section when left card expanded */}
        {expandedCard === 'left' && (
          <div className="w-full z-50 flex justify-center items-end absolute left-0 bottom-0">
            <StickyNavbar />
            <tabStickyNavbar />
          </div>
        )}
        {/* Main Content */}
        <div className="h-screen">  
          {expandedCard === null && (
            <div className="h-[7vh] w-full flex items-center px-8 bg-transparent">
              <div className="flex items-center justify-between w-full h-full mt-9">
                {/* Logo - T 25 */}
                <div className="flex items-center h-full">
                  <img src={tfBadge} alt="TF 25 logo" className="h-8 w-auto" />
                </div>
                {/* Navigation Links */}
                <div className="hidden md:flex items-center gap-8 h-full">
                  <button type="button" className="text-white hover:text-gray-300 transition-colors flex items-center h-full bg-transparent border-none p-0 m-0 cursor-pointer" onClick={() => handleCardClick('left')}>Website</button>
                  <button type="button" className="text-white hover:text-gray-300 transition-colors flex items-center h-full bg-transparent border-none p-0 m-0 cursor-pointer" onClick={() => handleCardClick('play')}>Play & Win</button>
                  <button type="button" className="text-white hover:text-gray-300 transition-colors flex items-center h-full bg-transparent border-none p-0 m-0 cursor-pointer" onClick={() => handleCardClick('merch')}>Goodies & Merch</button>
                </div>
                {/* Register Button */}
                <button className="flex items-center gap-2 bg-gray-200 text-gray-800 px-4 py-[-2] rounded-lg border border-gray-300 hover:bg-gray-300 transition-colors h-full">
                  <span className="text-sm font-medium">Register</span>
                  <img src={whitearrow} alt="arrow" className="w-4 h-4 filter brightness-0" />
                </button>
              </div>
            </div>
          )}
          <div className={`flex h-[93vh] relative z-20${expandedCard==='left' ? ' pr-0 py-0 gap-0' : ' p-8 gap-6'}`} style={expandedCard==='left' ? {marginLeft: 0, paddingLeft: 0} : {}}>
            {/* ...existing code... */}
            {/* Left Hero Section */}
            <div 
              className={`rounded-2xl flex flex-col justify-start overflow-hidden relative z-30 cursor-pointer bg-black${expandedCard && expandedCard !== 'left' ? ' hidden' : ''}${expandedCard==='left' ? ' animate-expandleft' : ' flex-1'}`}
              onClick={() => handleCardClick('left')}
              style={{
                ...(expandedCard==='left'
                  ? { margin: 0, marginLeft: 0, paddingLeft: 0 }
                  : {}),
                backgroundImage: `url(${herobg})`,
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: '140% 140%',
                backgroundColor: 'black',
                overflow: 'hidden',
              }}
            >
              {/* Info Tag */}
              <div className="mb-0 mt-10 ml-6">
                <span className={`bg-white text-black rounded-lg font-bold px-5 py-2 inline-flex items-center gap-2 ${expandedCard==='left' ? 'text-sm' : 'text-sm'}`}>
                  Registrations opening in 10 days
                  <img src={whitearrow} alt="arrow" className="w-4 h-4 filter brightness-0 ml-2 align-middle" style={{marginTop: '-2px'}} />
                </span>
              </div>
              {/* Main Heading */}
              <h1 className="lg:text-8xl text-6xl font-bold text-white leading-tight ml-6 font-neue-display z-21">
                Ready to hack?
              </h1>
              <button
                className="text-white flex text-4xl font-bold mt-2 bg-transparent border-none p-0 m-0 hover:underline focus:outline-none cursor-pointer text-left w-fit ml-8"
                type="button"
              >
                Get Updates
                <img src={whitearrow} alt="arrow" className="w-10 h-6 ml-4 mt-3" />
              </button>
              {/* ...existing code... */}
              <div className={`hidden sm:flex items-center justify-center gap-1 absolute  -translate-x-1/2 z-20 font-neue-xxthin m-0 p-0 overflow-hidden   ${expandedCard==='left' ? ' -bottom-[28.5vw] -right-[38.2vw] lg:-right-[24.2vw] lg:-bottom-[23.5vw]  ' : ' -bottom-[28.5vw] -right-[38.2vw] lg:-right-[24.2vw] lg:-bottom-[23.5vw]'}`}>
                <span className={`   bg-[linear-gradient(-12deg,rgba(0,0,0,1)_0%,rgba(0,0,0,0)_50%),conic-gradient(from_90deg_at_50%_50%,#E861FF_0%,#EF315E_50%,#FF315E_75%,#E861FF_90%)] bg-clip-text text-transparent -rotate-[12.32deg] ${expandedCard==='left' ? ' lg:text-[45vw] text-[60vh]' : ' lg:text-[45vw] text-[60vh]'}`}>2</span>
                <span className={`  bg-[linear-gradient(-12deg,rgba(0,0,0,1)_0%,rgba(0,0,0,0)_50%),conic-gradient(from_90deg_at_50%_50%,#E861FF_0%,#EF315E_50%,#FF315E_75%,#E861FF_90%)] bg-clip-text text-transparent -rotate-[12.32deg] translate-y-[5vw] lg:translate-y-[5vh] ${expandedCard==='left' ? ' lg:text-[45vw] text-[60vh]' : 'lg:text-[45vw] text-[60vh]'}`}>5</span>
              </div>
            </div>
            {/* Right Side - Two Components */}
            <div className={`lg:w-96 w-70 flex flex-col gap-6 relative z-20${expandedCard && expandedCard === 'left' ? ' hidden' : ''}`}> 
              {/* Top Component - Play to win (Bigger) */}
              <div 
                className={`flex-[3] bg-black rounded-2xl p-6 cursor-pointer transition-all duration-500 ease-in-out${expandedCard && expandedCard !== 'play' ? ' hidden' : ''}`}
                onClick={() => handleCardClick('play')}
                style={expandedCard==='play' ? {
                  position: 'fixed',
                  width: '100vw',
                  height: '100vh',
                  zIndex: 50,
                  borderRadius: '0px',
                  animation: 'expanddino 1.2s ease-in-out forwards',
                } : {}}
              >
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-4xl font-bold text-white">Play to win</h2>
                </div>
                <p className="text-radial-gradient text-sm mb-4">View leaderboard</p>
                <img src={dino} alt="dino" className={`relative  ${expandedCard && expandedCard === 'play' ? ' w-full h-auto bottom-0' : 'w-full h-auto top-40'}`} />
              </div>
              {/* Bottom Component - Get our Merch (Smaller) */}
              <div 
                className={`flex-[1] bg-black relative rounded-2xl p-6 overflow-hidden cursor-pointer transition-all duration-500 overflow:hidden ease-in-out${expandedCard && expandedCard !== 'merch' ? ' hidden' : ''}`}
                onClick={() => handleCardClick('merch')}
                style={expandedCard==='merch' ? {
                  position: 'fixed',
                  zIndex: 50,
                  borderRadius: '32px',
                  overflow: 'hidden',
                  animation: 'expandmerch 1.2s ease-in-out forwards',
                } : {}}
              >
                {/* T logo behind content */}
                <img src={tiltT} alt="tilted T logo" className="absolute w-[60%] h-auto mx-auto -bottom-12 -right-12 z-0 pointer-events-none select-none" style={{filter:'brightness(0.7)'}} />
                <div className="relative z-10">
                  <h2 className="text-4xl font-bold text-white mb-4">Get our Merch</h2>
                  <button
                    className="text-black text-sm mb-4 bg-white border-none p-3 mt-3 text-bold rounded-lg hover:underline focus:outline-none cursor-pointer text-left w-fit"
                    type="button"
                  >
                    Register For Merch
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero1;
