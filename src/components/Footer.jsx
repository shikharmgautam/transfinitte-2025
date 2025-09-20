import React, { memo, Suspense } from "react";
import {
  arrowwhite,
  instagram,
  instagramwh,
  linkedin,
  linkedinwh,
  tffooter,
  tffootersm,
} from "../assets";

const FooterLink = memo(({ href, text }) => (
  <a href={href} target="_blank" rel="noopener noreferrer">
  
    <span className='relative inline-block overflow-hidden rounded-full p-[1px]'>
      <span className='absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#FF315E_0%,#E861FF_50%,#5e1fff_75%,#FF315E_90%)]' />
      <div className='inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-gray-950 px-3 py-1 text-xs font-medium text-gray-50 backdrop-blur-3xl'>
         <div className="text-offwhite text-center font-spacemono text-[0.875rem] not-italic font-bold sm:leading-5 tracking-[0.35px] uppercase">
          {text}
        </div>
        <img src={arrowwhite} className="w-auto h-2 ml-1 sm:max-w-none sm:w-fit" />
      </div>
    </span>

    
  </a>
));

const FooterMobile = memo(() => (
  <div className="block sm:hidden mx-auto bg-black max-w-full">
    <div className="max-h-screen flex flex-col justify-center items-start flex-shrink-0 border-l border-r border-b border-l-edge border-r-edge border-b-edge w-[91.467%] mx-auto mb-4 py-[0.625rem] px-0 gap-4">
      <div className="flex justify-center items-center self-stretch py-[0.15rem] select-none pointer-events-none">
        <img src={tffootersm} />
      </div>
      <div className="flex py-0 px-4 flex-col justify-center gap-[1rem] self-stretch">
        <div className="flex w-full justify-between items-center gap-[0.625rem]">
          <div className="w-full h-auto flex justify-between flex-shrink-0 gap-[0.625rem]">
            <FooterLink
              href="https://maps.app.goo.gl/oqqeVqML8Fb2Pdr57"
              text="Locate Us"
            />
            <FooterLink
              href="https://drive.google.com/file/d/1kZ9JWKb0OFPmNv4avGa1OEcq8W6-FxjJ/view"
              text="Archive"
            />
          </div>
        </div>
        <div className="flex justify-center items-start gap-[0.3125rem]">
          <div className="text-[#A1A1A1] font-spacemono text-[0.75rem] not-italic font-normal leading-normal tracking-[-0.0075rem] uppercase">
            © 2025 TRANSFINITTE. All Rights Reserved.
          </div>
        </div>
      </div>
    </div>
  </div>
));

const FooterDesktop = memo(() => (
  <div className="hidden sm:block mx-auto bg-black max-w-[93.194%]">
    <div className="flex h-auto py-9 px-0 flex-col items-start gap-[36px] border-r border-l border-r-edge border-l-edge bg-black">
      <div className="flex justify-center items-center self-stretch tf-footer select-none pointer-events-none">
        <img src={tffooter} />
      </div>
      <div className="w-full h-[1.25rem] flex py-0 px-[46px] justify-between items-center self-stretch">
        <div className="flex justify-center items-center gap-[5px]">
          <div className="text-[#A1A1A1] font-spacemono text-[1rem] not-italic font-normal leading-normal tracking-[-0.01rem] uppercase">
            © 2025 TRANSFINITTE. All Rights Reserved.
          </div>
          <div className="flex w-fit pb-1 justify-center items-start gap-3 ">
            <div>
              <a
                href="https://www.instagram.com/tc_nitt/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={instagramwh} className="max-w-none w-fit" style={{ filter: 'brightness(0.63)' }} />
              </a>
            </div>
            <div>
              <a
                href="https://in.linkedin.com/company/technical-council-nit-trichy"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={linkedinwh} className="max-w-none w-fit" style={{ filter: 'brightness(0.63)' }} />
              </a>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-4 text-amber-50">
            <FooterLink
            href="https://maps.app.goo.gl/oqqeVqML8Fb2Pdr57"
            text="Locate Us"
          />

          
          <FooterLink
            href="https://drive.google.com/file/d/1jjjwgRhEHz8pLegoh0GjU5KTq7Ni5zAs/view"
            text="Archive"
          />
        </div>
      </div>
    </div>
  </div>
));

const Footer = () => {
  return (
    <div className="max-w-full select-none">
      <Suspense fallback={<div>Loading...</div>}>
        <FooterMobile />
        <FooterDesktop />
      </Suspense>
    </div>
  );
};

export default Footer;
