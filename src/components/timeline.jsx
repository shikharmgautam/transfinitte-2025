import React, { useEffect, useState } from 'react'

const Timeline = () => {
  const [showLines, setShowLines] = useState(false);
  useEffect(() => {
    const onScroll = () => {
      setShowLines(window.scrollY >=  window.innerHeight);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <>
      
      <div className="hidden sm:block w-full h-full">
        <div>
          <div className="App text-white relative bg-black h-[20vh] flex justify-center items-center text-4xl md:text-6xl lg:8xl font-neue-roman text-radial-gradient overflow-hidden">
            Timeline
          </div>
          {/* Grey and gradient lines, only show after 100vh scroll */}
          {showLines && <>
            <div className="w-[3px] h-full bg-gray-700 absolute left-1/2 -translate-x-1/2 top-0 -z-20 "></div>
            <div className="w-[3px] h-full bg-gray-700 fixed top-0 left-1/2 -translate-x-1/2 -z-20"></div>
            <div className="w-[3px] h-[50vh] bg-gradient-to-b from-[#ff7448] via-[#c04892] to-[#6348ff] fixed top-0 left-1/2 -translate-x-1/2 -z-10"></div>
          </>}
          <div className='h-[40vh] bg-black w-full transform -translate-y-[40vh] absolute z-[-1]'></div>
          <div className="wrapper text-white flex flex-col align-center gap-30 relative min-h-screen">
            {/* Top gradient overlay, only show after 100vh scroll */}
            {showLines && (
              <div className="pointer-events-none absolute left-1/2 -translate-x-1/2 top-0 w-full h-16 z-30">
                <div className="w-full h-full bg-gradient-to-b from-black to-transparent"></div>
              </div>
            )}
           
            <div className="content-1 flex flex-row items-center justify-center w-full py-5 gap-8 relative z-1 px-8">
              <div className="text-3xl font-bold flex-1 flex justify-end pr-8 sticky top-[50vh] self-start">Oct 10</div>
              <div className="relative flex flex-col items-center h-full min-h-[340px] w-12 z-1">
                <div className="bg-white border-8 p-2 border-black rounded-full w-6 h-6 -z-11 mb-[0px] sticky top-[50vh] block max-[890px]:hidden"></div>
              </div>
              <div className="flex flex-col gap-2 md:gap-6 text-2xl font-bold flex-1 pl-8 ">
                <div className='text-5xl'>DAY-1</div>
                <div>06:30 PM Inauguration</div>
                
                <div>07:00 PM Release of Problem statements</div>
                <div>07:30 PM Hackathon Begins</div>
                <div>08:30 PM Dinner</div>
             
              </div>
            </div>
            <div className="content-2 flex flex-row items-center justify-center w-full py-5 gap-8 relative z-1 px-8">
              <div className="text-3xl font-bold flex-1 flex justify-end pr-8 sticky top-[50vh] self-start">Oct 11</div>
              <div className="relative flex flex-col items-center h-full min-h-[340px] w-12 z-1">
                <div className="bg-white border-8 p-2 border-black rounded-full w-6 h-6 -z-10 mb-[0px] sticky top-[50vh] block max-[890px]:hidden"></div>
              </div>
              <div className="flex flex-col gap-6 text-2xl font-bold flex-1 pl-8">
                    <div className='text-5xl'>DAY-2</div>
                <div>08:30 AM Breakfast</div>
                <div>01:30 PM Lunch</div>
                <div>04:00 PM Guidance by Judges</div>
                <div>08:30 PM Dinner</div>
              </div>
            </div>
            <div className="content-3 flex flex-row items-center justify-center w-full py-5 gap-8 relative z-1 px-8">
              <div className="text-3xl font-bold flex-1 flex justify-end pr-8 sticky top-[50vh] self-start">Oct 12</div>
              <div className="relative flex flex-col items-center h-full min-h-[340px] w-12 z-10">
                <div className="bg-white border-8 p-2 border-black rounded-full w-6 h-6 -z-11 mb-[0px] sticky top-[50vh] block max-[890px]:hidden"></div>
              </div>
              <div className="flex flex-col gap-6 text-2xl font-bold flex-1 pl-8 z-[-2]">
                    <div className='text-5xl'>DAY-3</div> 
                <div>08:30 AM Breakfast</div>
                <div>09:00 AM Guidance by Judges</div>
                <div>01:30 PM Lunch</div>
                <div>01:30 PM Hackathon Ends</div>
                <div>05:00 PM Judging Ends</div>
                <div>05:30 PM Valediction Ceremony</div>
              </div>
            </div>
            {/* Bottom gradient overlay, only show after 100vh scroll */}
            {showLines && (
              <div className="pointer-events-none absolute left-1/2 -translate-x-1/2 bottom-0 w-full h-16 z-20">
                <div className="w-full h-full bg-gradient-to-t from-black to-transparent "></div>
              </div>
            )}
          </div>
          <div className="App text-white relative bg-black h-[10vh] flex items-center justify-center text-[5rem]">
          </div>
        </div>
      </div>

      
      <div className="block sm:hidden w-full">
        <div>
          <span className="App text-white relative bg-black h-[10vh] flex justify-center items-center text-5xl md:text-6xl lg:8xl z-10 font-neue-roman text-radial-gradient mt-20 overflow-hidden">
             Timeline
          </span>
          {/* Grey and gradient lines, only show after 100vh scroll */}
          {showLines && <>
            <div className="w-[3px] h-[50vh] bg-gradient-to-b from-[#ff7448] via-[#c04892] to-[#6348ff] fixed top-0 left-[9vw] -z-10"></div>
            <div className="w-[3px] h-full bg-gray-700 absolute left-[9vw] top-0 -z-20 "></div>
          </>}
          <div className='h-[22vh] bg-black w-full transform -translate-y-[22vh] absolute z-2'></div>
          <div className="wrapper text-white flex flex-col align-center gap-30 relative min-h-screen">
            {/* Top gradient overlay, only show after 100vh scroll */}
            {showLines && (
              <div className="pointer-events-none absolute left-1/2 -translate-x-1/2 top-0 w-full h-16 z-30">
                <div className="w-full h-full bg-gradient-to-b from-black to-transparent"></div>
              </div>
            )}
            <div className="content-1 flex flex-row items-center justify-center w-full py-5 gap-8 relative z-10 px-8">

              <div className="relative flex flex-col items-start h-full min-h-[340px] w-12 z-10">
              
                <div className="bg-white border-8 p-2 border-black rounded-full w-6 h-6 -z-11 mb-[0px] left-[calc(9vw+1.5px)] transform -translate-x-1/2 sticky top-[50vh] min-[531px]:max-[639px]:hidden"></div>

              
              </div>
         
              <div className="flex flex-col gap-6 text-2xl font-bold flex-1 pl-8">
                <div className='text-3xl'>DAY-1</div>

                <div>06:30 PM Inauguration</div>
                
                <div>07:00 PM Release of Problem statements</div>
                <div>07:30 PM Hackathon Begins</div>
                <div>08:30 PM Dinner</div>
             
              </div>
            </div>
               <div className="content-1 flex flex-row items-center justify-center w-full py-5 gap-8 relative z-10 px-8">

              <div className="relative flex flex-col items-start h-full min-h-[340px] w-12 z-10">
                
                <div className="bg-white border-8 p-2 border-black rounded-full w-6 h-6 -z-11 mb-[0px] left-[calc(9vw+1.5px)] transform -translate-x-1/2 sticky top-[50vh] min-[531px]:max-[639px]:hidden"></div>
               
              
              </div>
              <div className="flex flex-col gap-6 text-2xl font-bold flex-1 pl-8">
                 <div className='text-3xl'>DAY-2</div>
                  <div>08:30 AM Breakfast</div>
                <div>01:30 PM Lunch</div>
                <div>04:00 PM Guidance by Judges</div>
                <div>08:30 PM Dinner</div>
              </div>
            </div>
               <div className="content-1 flex flex-row items-center justify-center w-full py-5 gap-8 relative z-10 px-8">

              <div className="relative flex flex-col items-start h-full min-h-[340px] w-12 z-10">
               
                <div className="bg-white border-8 p-2 border-black rounded-full w-6 h-6 -z-11 mb-[0px] left-[calc(9vw+1.5px)] transform -translate-x-1/2 sticky top-[50vh] min-[531px]:max-[639px]:hidden"></div>
               
              </div>
              <div className="flex flex-col gap-6 text-2xl font-bold flex-1 pl-8">
                 <div className='text-3xl'>DAY-3</div>
                  <div>08:30 AM Breakfast</div>
                <div>09:00 AM Guidance by Judges</div>
                <div>01:30 PM Lunch</div>
                <div>01:30 PM Hackathon Ends</div>
                <div>05:00 PM Judging Ends</div>
                <div>05:30 PM Valediction Ceremony</div>
              </div>
            </div>
         
          </div>
        </div>
      </div>
    </>
  )
}

export default Timeline
