import React, { memo, Suspense } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqs } from "@/constants";

const FaqAccordion = memo(() => (
  <Accordion type="single" className="w-full text-red-50 " collapsible>
    {faqs.map((item) => (
      <AccordionItem key={item.id} value={`item-${item.id}`} className="w-full border-b-0 relative after:block after:h-[1px] after:w-full after:bg-gradient-to-r after:from-purple-500 after:via-red-500 after:to-red-500" >
        <AccordionTrigger className="w-full text-[1.25rem] sm:text-[1.75rem] font-spacegrotesk text-left">
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
      <div className="mx-auto bg-black max-w-[91.467%] sm:max-w-[93.194%] select-none">
        <div className="flex py-9 px-4 sm:px-[46px] justify-between items-end border-r border-l border-r-edge border-l-edge">
          <div className="flex w-full h-auto flex-col items-start gap-[37px] flex-shrink-0">
          <div className="text-4xl md:text-6xl mb-2 font-neue-roman text-radial-gradient text-start">Frequently Asked Questions</div>
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