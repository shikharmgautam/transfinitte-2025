import Accordion from "./ui/accordion";
import Accordion2 from "./ui/accordian2";

const Faq = () => {
  return (
    <section className="w-full flex flex-col items-center justify-center py-16 px-4 gap-8 bg-transparent">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">Frequently Asked Questions</h2>
      <div className="w-full max-w-5xl flex flex-col gap-8">
        <Accordion />
        <Accordion2 />
        <Accordion />
        <Accordion />
        <Accordion />
        
      </div>
    </section>
  );
};

export default Faq;
