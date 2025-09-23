
import React from 'react'
import { herobg, heroOne, heroTwo, mobilehero, mobileone } from '../assets';
import Header from "./Header";
import StickyNavbar from './Nav.jsx';



const Hero = () => {
  return (
    <>
      <div 
        className='hidden sm:flex bg-black w-full h-[130vh] flex-col items-center relative hero-bg overflow-hidden'
        style={{
          backgroundImage: `url(${herobg})`,
          backgroundPosition: 'top',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover'
        }}
      >
        {/* Gradient overlay for smooth fade to black at the bottom */}
        <div style={{
          position: 'absolute',
          left: 0,
          right: 0,
          bottom: 0,
          height: '30vh',
          background: 'linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 50%, rgba(0,0,0,0) 100%)',
          pointerEvents: 'none',
          zIndex: 30
        }} />
        <img 
          src={heroOne} 
          alt="Hero One" 
          className="absolute top-0 left-1/2 transform -translate-x-1/2 w-auto h-30vh max-w-full object-contain"
          style={{ zIndex: 10 }}
        />
    
        <div className="hidden sm:flex items-center justify-center gap-1 absolute left-1/2 top-18 -translate-x-1/2 z-20 font-neue-xxthin m-0 p-0 overflow-hidden">
          <span className="text-[60vw] lg:text-[75vh] bg-[linear-gradient(-12deg,rgba(0,0,0,1)_0%,rgba(0,0,0,0)_50%),conic-gradient(from_90deg_at_50%_50%,#E861FF_0%,#EF315E_50%,#FF315E_75%,#E861FF_90%)] bg-clip-text text-transparent -rotate-[12.32deg]">2</span>
          <span className="text-[60vw] lg:text-[75vh] bg-[linear-gradient(-12deg,rgba(0,0,0,1)_0%,rgba(0,0,0,0)_50%),conic-gradient(from_90deg_at_50%_50%,#E861FF_0%,#EF315E_50%,#FF315E_75%,#E861FF_90%)] bg-clip-text text-transparent -rotate-[12.32deg] translate-y-[5vw] lg:translate-y-[5vh]">5</span>
        </div>
      
        <div className='absolute bottom-[0vh] lg:top-[50vh] left-1/2 -translate-x-1/2 w-auto h-auto max-w-full object-contain hidden lg:block' style={{ zIndex: 10 }}></div>
                        <StickyNavbar />
      </div>


      <div 
        className='flex sm:hidden bg-black w-full h-[85vh] flex-col items-center relative mobile]'
        style={{
          backgroundImage: `url(${mobilehero})`,
          backgroundPosition: 'top',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover'
        }}
      >
        <img 
          src={mobileone} 
          alt="Hero One" 
          className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[200vw] translate-y-[10vh] h-auto max-w-full object-contain"
          style={{ zIndex: 10, width: '95vw', height: 'auto' }}
        />
        {/* 25 display just below Hero One PNG (mobile) */}
        <div className="flex sm:hidden items-center justify-center gap-1 absolute left-1/2 top-[15vh] -translate-x-1/2 z-20 font-neue-xxthin m-0 p-0 overflow-hidden">
          <span className="text-[90vw] bg-[linear-gradient(-12deg,rgba(0,0,0,1)_0%,rgba(0,0,0,0)_50%),conic-gradient(from_90deg_at_50%_50%,#E861FF_0%,#EF315E_50%,#FF315E_75%,#E861FF_90%)] bg-clip-text text-transparent -rotate-[12.32deg]">2</span>
          <span className="text-[90vw] bg-[linear-gradient(-12deg,rgba(0,0,0,1)_0%,rgba(0,0,0,0)_50%),conic-gradient(from_90deg_at_50%_50%,#E861FF_0%,#EF315E_50%,#FF315E_75%,#E861FF_90%)] bg-clip-text text-transparent -rotate-[12.32deg] translate-y-[8vw]">5</span>
        </div>
        

      </div>
      
    </>
  )
}

export default Hero
