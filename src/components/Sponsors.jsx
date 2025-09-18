import React, { memo, Suspense } from "react";
import { sponsors } from "../constants";

const SponsorCategory = memo(({ category }) => (
  <div
    key={category.id}
    className="flex w-full flex-col items-start gap-[50px]"
  >
    <div className="text-offwhite text-right font-spacegrotesk text-[2rem] not-italic font-normal leading-8 mt-4 mb-2">
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
            className="max-w-[120px] grayscale"
          />
        </div>
      ))}
    </div>
    {/* Mobile fallback: keep flex layout */}
    <div className="flex flex-col sm:hidden items-center justify-center gap-[1.25rem] self-stretch flex-wrap">
      {category.data.map((sponsor) => (
        <div
          key={sponsor.id}
          className="select-none pointer-events-none flex flex-col w-fit items-center justify-center gap-2"
        >
          <img
            src={sponsor.imgurl}
            alt={sponsor.name}
            className="max-w-[120px] grayscale"
          />
        </div>
      ))}
    </div>
  </div>
));

const SponsorsMobile = memo(() => (
  <div className="block sm:hidden mx-auto bg-black max-w-[91.467%]">
    <div className="flex flex-col justify-center items-start gap-[0.625rem] flex-shrink-0 border-l border-r border-l-edge border-r-edge py-6 px-4">
      <div className="flex h-fit items-start self-stretch">
        <div
          className="text-radial-gradient font-spacegrotesk text-[2.2rem] font-extrabold not-italic leading-[2.7rem] mt-2 mb-2 text-center w-full"
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
  <div className="hidden sm:block mx-auto bg-black max-w-[93.194%]">
    <div className="flex py-9 px-[2.875rem] flex-col items-start gap-[2.875rem] bg-black border-r border-l border-r-edge border-l-edge">
      <div className="flex justify-center w-full">
        <div className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF315E] via-[#E861FF] to-[#5e1fff] font-spacegrotesk text-[4rem] font-normal not-italic leading-[3.75rem] mt-2 mb-2 text-center w-full">
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
