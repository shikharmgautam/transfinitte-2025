import React, { memo, Suspense } from "react";
import { sponsors } from "../constants";

const SponsorCategory = memo(({ category }) => (
  <div
    key={category.id}
    className="flex w-full flex-col items-start gap-[0px] mb-15"
  >
    <div className="text-offwhite text-right font-spacegrotesk text-[2rem] not-italic font-normal mb-2">
      {category.name}
    </div>
    <div className="hidden sm:grid w-full grid-cols-4 gap-y-8 gap-x-4 place-items-center">
      {category.data.map((sponsor) => (
        <div
          key={sponsor.id}
          className="select-none pointer-events-none flex flex-col w-fit items-center justify-center gap-2"
        >
          <img
            src={sponsor.imgurl}
            alt={sponsor.name}
            className={`max-w-[120px] ${sponsor.name === "d2d" ? "grayscale" : "sponsor-svg-white"}`}
          />
        </div>
      ))}
    </div>
        
    <div className="flex flex-col sm:hidden items-center justify-center gap-[1.25rem] self-stretch flex-wrap">
      {category.data.map((sponsor) => (
        <div
          key={sponsor.id}
          className="select-none pointer-events-none flex flex-col w-fit items-center justify-center gap-2"
        >
          <img
            src={sponsor.imgurl}
            alt={sponsor.name}
            className={`max-w-[120px] ${sponsor.name === "d2d" ? "grayscale" : "sponsor-svg-white"}`}
          />
        </div>
      ))}
    </div>
  </div>
));

const SponsorsMobile = memo(() => (
  <div className="block sm:hidden mx-auto bg-black max-w-[100%]">
    <div className="flex flex-col justify-center items-start gap-[0.625rem] flex-shrink-0 pt-6 px-[24px]">
      <div className="flex h-fit items-start self-stretch">
        <div
          className="text-radial-gradient font-neue-roman text-5xl md:text-6xl lg:8xl  not-italic mt-2 text-start w-full transform translate-y-6"
        >
          Past Sponsors
        </div>
       
      </div>
      {sponsors.map((category) => (
        <SponsorCategory key={category.id} category={category} />
      ))}
    </div>
  </div>
));

const SponsorsDesktop = memo(() => (
  <div className="hidden sm:block mx-auto bg-black max-w-[100%]">
    <div className="flex py-3 flex-col items-start gap-[2.875rem] bg-black">
      <div className="flex justify-center w-full">
              <div className="text-radial-gradient font-neue-roman text-5xl md:text-6xl lg:8xl px-[24px]  font-normal not-italic mt-1 mb-1 text-left w-full">
         Past Sponsors
        </div>
      </div>
      {sponsors.map((category) => (
        <SponsorCategory key={category.id} category={category} />
      ))}
    </div>
  </div>
));


const Sponsors = () => {
  return (
    <div className="select-none">
      <Suspense fallback={<div>Loading...</div>}>
        <SponsorsMobile />
        <SponsorsDesktop />
      </Suspense>
    </div>
  );
};

export default Sponsors;
