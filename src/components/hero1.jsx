import React from "react";
import { toast } from "sonner";
import tiltT from "../assets/images/svg/tiltT.svg";
import StickyNavbar from './Nav.jsx';
import tfBadge from "../assets/images/svg/tf-badge.svg";
import TabStickyNavbar from "./navTab";
import whitearrow from "../assets/images/svg/whitearrow.svg";
import herobg from "../assets/images/hero/hero-bg.png";
import { mobilehero } from '../assets';
import Id from "./Id"
  const handleRegisterClick = () => {
    window.location.href="https://register.transfinitte.com";
    // toast("Registrations opening soon", {
    //   description: "Stay tuned for updates!",
    //   duration: 3000,
    // });
  };



const Hero1 = ({ expandedCard, setExpandedCard, mobileMainExpanded, setMobileMainExpanded, onPlayCardClick, showIdComponent }) => {
  const handleCardClick = (cardType) => {
    if (cardType === 'play') {
      // Trigger Id component animation
      onPlayCardClick();
    } else {
      setExpandedCard(cardType);
    }
  };

  const handleMobileMainClick = () => {
    setMobileMainExpanded(true);
  };

  const handleRegisterClick = () => {
    window.location.href="https://register.transfinitte.com";
    // toast("Registrations opening soon", {
    //   description: "Stay tuned for updates!",
    //   duration: 3000,
    // });
  };

  return (
    <>
      {/* Mobile & md-down layout: visible below 1300px */}
      <div
        className={`custom-max1300:block hidden w-full px-2 py-2 relative transition-all duration-1000 ${showIdComponent ? 'opacity-0 -translate-y-full' : 'opacity-100 translate-y-0'}`}
        style={mobileMainExpanded ? {
          height: '70vh',
           
          } : {
             backgroundImage: `url(${mobilehero})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundColor: '#2a2a2a80',
          minHeight: '100vh'
          }}
       
      >
        {/* Topbar: 7vh - only show when not expanded */}
        {!mobileMainExpanded && (
          <div className="flex items-center w-full px-2" style={{height: '7vh', minHeight: 40}}>
            <div className="flex items-center justify-between w-[100vw]">
              <img src={tfBadge} alt="TF 25 logo" className="h-8 w-auto" />

                <button 
                  onClick={handleRegisterClick}
                  className="flex items-center  gap-2 bg-gray-200 text-gray-800 px-4 py-2 rounded-lg border border-gray-300 hover:bg-gray-300 transition-colors"
                >

                  <span className="text-sm font-medium cursor-pointer">Register</span>
                  <img src={whitearrow} alt="arrow" className="w-4 h-4 filter brightness-0" />
                </button>
            </div>
            <div />
          </div>
        )}

        {/* Main Card: 40vh, expands when clicked */}
        <div
          className="rounded-2xl bg-black w-full mt-2 mb-4 p-5 relative overflow-hidden flex flex-col justify-between cursor-pointer"
          style={mobileMainExpanded ? {
            height: '70vh',
            transition: 'height 1s ease'
          } : {
            height: '40vh',
            minHeight: 220
          }}
          onClick={!mobileMainExpanded ? handleMobileMainClick : undefined}
        >
          {/* Back button for mobile expanded state */}
          {mobileMainExpanded && (
            <button
              className="absolute top-4 right-4 inline-flex justify-center items-center z-20 bg-white text-black px-3 py-1 rounded-lg shadow hover:bg-gray-200 transition-colors"
              onClick={e => { e.stopPropagation(); setMobileMainExpanded(false); }}
            >
              Back
              <img src={whitearrow} alt="arrow" className="w-4 h-4 filter brightness-0" />
            </button>
           
          )}
          <div
            className="absolute inset-0 z-0 pointer-events-none select-none"
            style={{
              backgroundImage: `url(${mobilehero})`,
              backgroundSize: '550% 550%',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
            }}
          />
          
          <div className="mt-10 mb-2 z-10 relative">
            <h1 className="text-white text-4xl font-bold leading-tight mb-2 absolute -top-14">Ready to Hack?</h1>

           // <button
             // type="button"
              //className="inline-flex items-center gap-3 bg-white text-black rounded-xl px-3 py-2 text-sm font-bold z-10 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 cursor-pointer"
              // onClick={...} // Add your registration link or handler here
            >
              //Registrations are live
              //<img src={whitearrow} alt="arrow" className="w-4 h-4 filter brightness-0" />
            //</button>

            <span className=" inline-flex items-center gap-3 bg-white text-black rounded-xl px-3 py-2 text-sm font-bold z-10 ">
            Registrations are live
             <img src={whitearrow} alt="arrow" className="w-4 h-4 filter brightness-0" />
          </span>

         
          </div>
          <div className="flex items-center justify-center gap-1 absolute -translate-x-1/2 z-0 font-neue-xxthin m-0 p-0 overflow-hidden -bottom-[30vw] -right-[44vw] sm:-bottom-[25vh] sm:-right-[40vh]">
            <span className="bg-[linear-gradient(-12deg,rgba(0,0,0,1)_0%,rgba(0,0,0,0)_50%),conic-gradient(from_90deg_at_50%_50%,#E861FF_0%,#EF315E_50%,#FF315E_75%,#E861FF_90%)] bg-clip-text text-transparent -rotate-[12.32deg] text-[80vw] sm:text-[60vh]">2</span>
            <span className="bg-[linear-gradient(-12deg,rgba(0,0,0,1)_0%,rgba(0,0,0,0)_50%),conic-gradient(from_90deg_at_50%_50%,#E861FF_0%,#EF315E_50%,#FF315E_75%,#E861FF_90%)] bg-clip-text text-transparent -rotate-[12.32deg] translate-y-[5vw] lg:translate-y-[5vh] text-[80vw] sm:text-[60vh]">5</span>
          </div>
        </div>

        {/* Only show these cards if NOT expanded */}
        {!mobileMainExpanded && (
          <>
            {/* Play to win Card: 20vh */}
            <div 
              className={`rounded-2xl bg-black w-full mb-4 p-5 relative flex flex-col overflow-hidden cursor-pointer transition-all duration-500 ${
                expandedCard === 'play' ? '' : ''
              }`}
              style={expandedCard === 'play' ? {height: '20vh', minHeight: 100} : {height: '20vh', minHeight: 100}}
              onClick={expandedCard === 'play' ? undefined : () => handleCardClick('play')}
            >
               <span className="text-white text-2xl font-bold mb-2 z-10">Get Your RSVP</span>
              <img src={tiltT} alt="tilted T logo" className="absolute -bottom-8 -right-8 h-[120%] w-auto select-none z-0" style={{filter:'brightness(1.2)'}} />
            
              {/* Close button for mobile expanded play card */}
              {expandedCard === 'play' && (
                <button
                
                  onClick={(e) => { 
                    e.stopPropagation(); 
                    setExpandedCard(null); 
                  }}
                >
                 
                 
                 
                </button>
              )}
               
              
             
              
            </div>

            {/* Merch Card: 20vh */}
            <div className="rounded-2xl bg-black w-full mb-4 p-5 relative flex  gap-2 overflow-hidden "
              style={{height: '20vh', minHeight: 100}}>
              <span className="text-white text-2xl font-bold mb-2 z-10">Get our Merch</span>
              <img src={tiltT} alt="tilted T logo" className="absolute -bottom-8 -right-8 h-[120%] w-auto select-none z-0" style={{filter:'brightness(1.2)'}} />
              <button
                    className="text-white text-sm font-bold mb-4 bg-transparent border-none rounded-lg focus:outline-none text-left w-fit absolute right-4 top-5"
                    type="button"
                  >
                    COMING SOON
                  </button>
                  
            </div>
          </>
        )}
      </div>

      {/* Desktop layout: visible at 1300px and up */}
      <div className={`min-h-screen relative z-10 custom-max1300:hidden block ${expandedCard === 'play' ? 'bg-black' : 'hero1-bg'}`}>
        {expandedCard === 'left' && (
            <button
              className="absolute inline-flex top-8 justify-center items-center right-8 z-[999] bg-white text-black px-6 py-2 rounded-lg shadow font-bold hover:bg-gray-200 transition-colors"
               onClick={(e) => { 
                    e.stopPropagation(); 
                    setExpandedCard(null); 
                  }}
            >
              Back
              <img src={whitearrow} alt="arrow" className="w-4 h-4 filter brightness-0" />
            </button>
          )}
        {/* StickyNavbar at top of hero section when left card expanded - exclude from slide animation */}
        {expandedCard === 'left' && !showIdComponent && (
          <div className="w-full z-50 flex justify-center items-start absolute left-0 top-0">
            <StickyNavbar />
            <TabStickyNavbar />
          </div>
        )}
        
        {/* Main content container with slide animation */}
        <div className={`h-screen transition-all duration-1000 ${showIdComponent ? 'opacity-0 -translate-y-full' : 'opacity-100 translate-y-0'}`}>
          {expandedCard !== 'left' && (
            <div className="h-[7vh] w-full flex items-center px-8 bg-transparent">
              <div className="flex items-center justify-between w-full h-full mt-9">
                {/* Logo */}
                <div className="flex items-center h-full">
                  <img src={tfBadge} alt="TF 25 logo" className="h-8 w-auto" />
                </div>

                {/* Navigation Links */}
                <div className="hidden md:flex items-center gap-8 h-full">
                  <button type="button" className="text-white hover:text-gray-300 transition-colors flex items-center h-full bg-transparent border-none p-0 m-0 cursor-pointer" onClick={() => handleCardClick('left')}>
                    Website
                  </button>
                  <button type="button" className="text-white hover:text-gray-300 transition-colors flex items-center h-full bg-transparent border-none p-0 m-0 cursor-pointer" onClick={() => handleCardClick('play')}>
                    Get Your RSVP
                  </button>
                  <button type="button" className="text-white hover:text-gray-300 transition-colors flex items-center h-full bg-transparent border-none p-0 m-0 cursor-pointer" onClick={() => handleCardClick('merch')}>
                    Goodies & Merch
                  </button>
                </div>

                {/* Register Button */}

                <button 
                  onClick={handleRegisterClick}
                  className="flex items-center gap-2 bg-gray-200 text-gray-800 px-4 py-2 rounded-lg border border-gray-300 hover:bg-gray-300 transition-colors"
                >
                  <span className="text-sm font-medium cursor-pointer">Register</span>

                  <img src={whitearrow} alt="arrow" className="w-4 h-4 filter brightness-0" />
                </button>
              </div>
            </div>
          )}
          {/* Back button for desktop expanded state */}
          

          <div className={`flex h-[93vh] relative z-20${expandedCard==='left' ? ' pr-0 py-0 gap-0' : ' p-8 gap-6'}`} style={expandedCard==='left' ? {marginLeft: 0, paddingLeft: 0} : {}}>
            {/* Left Hero Section */}
            <div 
              className={`rounded-2xl flex flex-col justify-start overflow-hidden relative z-30 cursor-pointer bg-black${expandedCard && expandedCard !== 'left' ? ' ' : ''}${expandedCard==='left' ? ' animate-expandleft' : ' flex-1'}`}
              onClick={() => handleCardClick('left')}
              style={{
                ...(expandedCard==='left' ? { margin: 0, marginLeft: 0, paddingLeft: 0 } : {}),
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
{/* 
                //<h1 className="lg:text-8xl text-6xl font-bold text-white leading-tight font-neue-display z-21">
                  //Ready to hack?
                //</h1>
                //<button
                  //type="button"
                  //className="inline-flex items-center gap-3 bg-white text-black rounded-xl px-3 py-2 text-sm font-bold z-10 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 mt-2 transform translate-x-1 cursor-pointer"
                  //onClick={() => {/* TODO: Add registration link or handler here */}}
                {/* //>
                  //Registrations are live
                  //<img src={whitearrow} alt="arrow" className="w-4 h-4 filter brightness-0 ml-0 align-middle transform translate-y-1/8" style={{marginTop: '-2px'}} />
                //</button> */} 

                 <h1 className="lg:text-8xl text-6xl font-bold text-white leading-tight font-neue-display z-21">
                Ready to hack?
              </h1>
                <span className="bg-white text-black rounded-lg font-bold px-2 py-2 mt-2 inline-flex items-center gap-2 transform translate-x-1 text-sm">
                  Registrations are live
                  <img src={whitearrow} alt="arrow" className="w-4 h-4 filter brightness-0 ml-2 align-middle" style={{marginTop: '-2px'}} />
                </span>
              </div>

              {/* Main Heading */}
             

             

              {/* Large numbers background */}
              <div className={`hidden sm:flex items-center justify-center gap-1 absolute -translate-x-1/2 z-20 font-neue-xxthin m-0 p-0 overflow-hidden -bottom-[28.5vw] -right-[38.2vw] lg:-right-[24.2vw] lg:-bottom-[23.5vw]`}>
                <span className="bg-[linear-gradient(-12deg,rgba(0,0,0,1)_0%,rgba(0,0,0,0)_50%),conic-gradient(from_90deg_at_50%_50%,#E861FF_0%,#EF315E_50%,#FF315E_75%,#E861FF_90%)] bg-clip-text text-transparent -rotate-[12.32deg] lg:text-[45vw] text-[60vh]">2</span>
                <span className="bg-[linear-gradient(-12deg,rgba(0,0,0,1)_0%,rgba(0,0,0,0)_50%),conic-gradient(from_90deg_at_50%_50%,#E861FF_0%,#EF315E_50%,#FF315E_75%,#E861FF_90%)] bg-clip-text text-transparent -rotate-[12.32deg] translate-y-[5vw] lg:translate-y-[5vh] lg:text-[45vw] text-[60vh]">5</span>
              </div>
            </div>

            {/* Right Side - Two Components (HIDE when left is expanded) */}
            {expandedCard !== 'left' && (
              <div className="lg:w-96 w-70 flex flex-col gap-6 relative z-20"> 
                {/* Top Component - Play to win */}
                <div 
                  className={`bg-black rounded-2xl p-6 transition-all duration-500 overflow-hidden ease-in-out cursor-pointer ${
                    expandedCard === 'play' ? 'fixed inset-0 z-40 flex-1 w-full h-full' : 'flex-[3]'
                  }`}
                  onClick={expandedCard === 'play' ? undefined : () => handleCardClick('play')}
                >
                  {/* Close button for expanded play card */}
                  {expandedCard === 'play' && (
                    <button
                      className="absolute top-8 right-8 z-50 bg-white text-black px-6 py-2 rounded-lg shadow font-bold hover:bg-gray-200 transition-colors"
                      onClick={(e) => { 
                        e.stopPropagation(); 
                        setExpandedCard(null); 
                      }}
                    >
                      Back
                      <img src={whitearrow} alt="arrow" className="w-4 h-4 filter brightness-0 inline ml-2" />
                    </button>
                  )}
                  
                  {/* Expanded state content */}
                  {expandedCard === 'play' ? (
                    <div className="flex flex-col justify-center items-center h-full text-center">
                      <h2 className="font-bold text-white mb-4 text-6xl">
                        Play & Win
                      </h2>
                      <p className="text-gray-300 mb-4 text-2xl">
                        Interactive 3D Experience
                      </p>
                      <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg font-bold hover:from-purple-600 hover:to-pink-600 transition-all cursor-pointer px-8 py-4 text-xl">
                        Loading 3D Experience...
                      </div>
                    </div>
                  ) : (
                    /* Non-expanded state content */
                    <>
                      <div className="flex items-center justify-between mb-4">
                        <h2 className="text-4xl font-bold text-white">Get Your RSVP</h2>
                      </div>
                      <button
                        className="text-white text-sm font-bold mb-4 bg-transparent border-none rounded-lg focus:outline-none text-left w-fit cursor-pointer"
                        type="button"
                      >
                        Share Your Digital SWAG!!
                      </button>
                      <img src={tiltT} alt="tilted T logo" className="relative w-[100%] h-auto mx-auto -bottom-12 -right-12 z-0 select-none" style={{filter:'brightness(1.2)'}} />
                    </>
                  )}
                </div>

                {/* Bottom Component - Get our Merch */}
                <div 
                  className="flex-[1] bg-black relative rounded-2xl p-6 overflow-hidden transition-all duration-500 ease-in-out "
                  onClick={() => handleCardClick('merch')}
                >
                  <img src={tiltT} alt="tilted T logo" className="absolute w-[60%] h-auto mx-auto -bottom-12 -right-12 z-0 select-none" style={{filter:'brightness(1.2)'}} />
                  <div className="relative z-10">
                    <h2 className="text-4xl font-bold text-white mb-4">Get our Merch</h2>
                    <button
                      className="text-white text-sm font-bold mb-4 bg-black border-none rounded-lg focus:outline-none text-left w-fit"
                      type="button"
                    >
                      COMING SOON
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero1;