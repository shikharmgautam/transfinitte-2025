import Accordion from "./ui/accordion";
import Accordion2 from "./ui/accordian2";

const Faq = () => {
  return (
    <div>
         
    <section className="w-full flex flex-col items-center justify-center py-16 px-4 gap-8 bg-black">
        <div className="text-4xl md:text-6xl mb-2 font-neue-roman text-radial-gradient text-start z-10">Frequently Asked Questions</div>
     
      <div className="w-full max-w-5xl flex flex-col gap-10">
        
        <Accordion />
       
        <Accordion />
        <Accordion />
        <Accordion />
        
      </div>
    </section>
    </div>
  );
};

export default Faq;
