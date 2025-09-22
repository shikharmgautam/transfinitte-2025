
import React from 'react'
import { herobg, heroOne, heroTwo, mobilehero, mobileone } from '../assets';
import Header from "./Header";


const Hero = () => {
  return (
    <>
      <div 
        className='hidden sm:flex bg-black w-full h-[200vh] flex-col items-center relative hero-bg'
        style={{
          backgroundImage: `url(${herobg})`,
          backgroundPosition: 'top',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <img 
          src={heroOne} 
          alt="Hero One" 
          className="absolute top-0 left-1/2 transform -translate-x-1/2 w-auto h-30vh max-w-full object-contain"
          style={{ zIndex: 10 }}
        />
        <div ></div>
        <div className='absolute top-[75vh] left-1/2 transform -translate-x-1/2 w-auto h-auto max-w-full object-contain' style={{ zIndex: 10 }}></div>
      </div>

      <div 
        className='flex sm:hidden bg-black w-full h-[85vh] flex-col items-center relative mobilehero-bg'
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
        <img 
          src={heroTwo} 
          alt="Hero Two" 
          className="absolute top-[25vh] left-1/2 transform -translate-x-1/2 w-auto h-auto max-w-full object-contain"
          style={{ zIndex: 10 }}
        />
      </div>
    </>
  )
}

export default Hero
