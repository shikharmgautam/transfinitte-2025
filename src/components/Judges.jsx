import React, { memo, Suspense, useState } from "react";
import { judges } from "../constants";

import herobgj from '../assets/images/hero/hero-bg.png';




import { herobg } from '../assets';

const JudgesList = memo(({ judges, hoveredJudge, setHoveredJudge }) => (
  <div className="flex flex-col items-start gap-8 self-stretch">
    <div className="flex flex-col items-start gap-8 self-stretch">
      {judges.map((judge) => (
        <div
          key={judge.id}
          className={` text-white font-neue-roman text-[32px] not-italic font-normal leading-8 transition-opacity duration-300 select-none cursor-default ${
            hoveredJudge === judge.id ? "opacity-100" : "opacity-50"
          }`}
          onMouseEnter={() => setHoveredJudge(judge.id)}
          onMouseLeave={() => setHoveredJudge(null)}
        >
          {judge.name}
        </div>
      ))}
    </div>
  </div>
));

const JudgesMobile = memo(({ judges }) => (
  <div className="block sm:hidden mx-auto bg-black max-w-[100%] z-10">
    <div className="flex flex-col justify-center items-start gap-[0.625rem] flex-shrink-0 pb-10 pt-0 px-[24px] ">
      <div className="flex h-fit items-start self-stretch">
        <div className="text-white font-neue-roman text-5xl md:text-6xl lg:8xl font-normal transform -translate-y-4 text-radial-gradient">
          Judges
        </div>
        
      </div>
      
      <div className="flex w-full justify-center items-center gap-[0.625rem] flex-wrap">

        {judges.map((judge) => (
          <div
            key={judge.id}
            className="flex content-center items-center w-[45%] aspect-square object-cover relative border border-dashed border-[#454545] cursor-default gap-[5px] p-[5px] min-h-[60vw] overflow-hidden"
          >
            <div className="flex relative flex-col justify-start items-start overflow-hidden ">
              <div>
                <img
                  src={judge.imgurl}
                  alt={judge.name}
                  width="100%"
                  height="100%"
                  className={` w-full h-full transition duration-300 object-top`}
                />
              </div>
              <div className="text-white font-neue-roman text-[3vw] font-normal uppercase text-left bg-transparent select-none cursor-default p-1">
                <div className="flex flex-col gap-[0.25rem] ">
                  <div>{judge.name}</div>
                  <div>{judge.company}</div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
));

const JudgesDesktop = memo(({ judges, hoveredJudge, setHoveredJudge }) => (
  <div
    className="hidden sm:block mx-auto max-w-[100%] py-8"
    style={{
      backgroundImage: `url(${herobgj})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundColor: 'black',
      backgroundRepeat: 'no-repeat',
    
    }}
  >
    <div className="w-full">
      <div className="text-6xl md:text-6xl lg:8xl font-neue-roman leading-tight mb-8 px-[24px] text-left text-radial-gradient">
        Judges
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-5 w-[100%] mr-10 px-[40px]">
        {judges.map((judge) => (
          <div key={judge.id} className="w-full">

              <div className="flex flex-col items-start justify-between rounded-2xl overflow-hidden w-full p-5 backdrop-blur-[2px]" style={{minHeight: '300px',backgroundColor: 'rgba(255,255,255,0.08)',boxShadow: '0 4px 32px 0 rgba(0,0,0,0.12)'}}>
                <div className="w-full aspect-[3/4] bg-gray-200 rounded-xl mb-2 flex items-center justify-center overflow-hidden">
                  {judge.imgurl ? (
                    <img src={judge.imgurl} alt={judge.name} className="object-cover w-full h-full rounded-xl" />
                  ) : (
                    <div className="w-full h-full rounded-xl" />
                  )}
                </div>
                <div className="w-full px-3 pb-2 pt-1">
                  <div className="flex items-center justify-between w-full">
                    <span className="font-neue-roman text-base text-white">{judge.name}</span>
                    <span className="text-xs text-[#dd63ff] font-mono font-bold">@{judge.name.replace(/\s/g, '').toLowerCase()}</span>
                  </div>
                  <div className="text-xs text-gray-300 font-neue-roman mt-1">{judge.company}<br /><span className="text-gray-400"></span></div>
                </div>
              </div>
            
          </div>
          
        ))}
      </div>
    </div>
  </div>
));

const Judges = () => {
  const [hoveredJudge, setHoveredJudge] = useState(null);
  return (
    <div className="select-none">
      <Suspense fallback={<div>Loading...</div>}>
        <JudgesMobile judges={judges} />
        <JudgesDesktop
          judges={judges}
          hoveredJudge={hoveredJudge}
          setHoveredJudge={setHoveredJudge}
        />
      </Suspense>
    </div>
  );
};

export default Judges;