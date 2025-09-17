import React from 'react'
import { herobg, heroOne, heroTwo } from '../assets'

const Hero = () => {
  return (
    <div 
      className='bg-black w-full h-[200vh] flex flex-col items-center relative overflow-hidden hero-bg'
      style={{
        backgroundImage: `url(${herobg})`,
        backgroundPosition: 'top',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Hero image 1 on top - absolutely positioned */}
      <img 
        src={heroOne} 
        alt="Hero One" 
        className="absolute top-0 left-1/2 transform -translate-x-1/2 w-auto h-30vh max-w-full object-contain"
        style={{ zIndex: 10 }}
      />
      
      {/* Hero image 2 below - absolutely positioned */}
      <img 
        src={heroTwo} 
        alt="Hero Two" 
        className="absolute top-[35vh] left-1/2 transform -translate-x-1/2 w-auto h-auto max-w-full object-contain"
        style={{ zIndex: 10 }}
      />
    </div>
  )
}

export default Hero
