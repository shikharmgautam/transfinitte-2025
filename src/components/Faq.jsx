import React, { memo, Suspense } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqs } from "@/constants";

const FaqAccordion = memo(() => (
  <Accordion type="single" className="w-full text-red-50 px-[20px]" collapsible>
    {faqs.map((item) => (
      <AccordionItem key={item.id} value={`item-${item.id}`} className="w-full border-b-0 relative after:block after:h-[1px] after:w-full after:bg-gradient-to-r after:from-purple-500 after:via-red-500 after:to-red-500" >
        <AccordionTrigger className="w-full text-[1.25rem] sm:text-[1.75rem] font-spacegrotesk text-left cursor-pointer">
          {item.question}
        </AccordionTrigger>
        <AccordionContent className="w-full text-[1rem] sm:text-[1.4rem] text-[#A0A0A0] font-spacemono text-left">
          {item.answer}
        </AccordionContent>
      </AccordionItem>
    ))}
  </Accordion>
));
const Faq = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="mx-auto bg-black max-w-[100%] sm:w-[100%] select-none">
        <div className="flex pb-9 pt-0 px-[24px] sm:px-[24px] justify-between items-end">
          <div className="flex w-full h-auto flex-col items-start gap-[37px] flex-shrink-0">
           
          <div className="text-5xl md:text-6xl lg:8xl  font-neue-roman text-radial-gradient text-start transform translate-y-5 hidden custom-max1300:block ">FAQs</div>
          <div className="text-5xl md:text-6xl lg:8xl font-neue-roman text-radial-gradient text-start transform translate-y-5 block custom-max1300:hidden ">Frequently Asked Questions</div>
            <div className="w-full text-[#A0A0A0] font-spacemono text-[1rem]">
              <FaqAccordion />
            </div>
          </div>
        </div>
      </div>
    </Suspense>
  );
};

export default Faq;