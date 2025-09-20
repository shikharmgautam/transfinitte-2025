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
//0 0, 10% 0, 10% 10%, 100% 10%, 100% 100%, 0% 100%//path('M 0.33% 4% Q 0.33% 2% 0.4% 2% L 9.5% 2% Q 9.67% 2% 9.67% 4% L 9.67% 20% Q 9.67% 22% 9.8% 22% L 99% 22% Q 99.67% 22% 99.67% 24% L 99.67% 99% L 0.33% 99% Z')"