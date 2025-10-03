

const Rsvp = () => {
    return (
        <section
            id='hero'
            className="w-full min-h-screen flex flex-col items-center justify-center px-4 sm:px-8 md:px-10 lg:px-25 py-14"
        >
            <div className="relative flex flex-col-reverse sm:flex-row items-center justify-center w-full gap-4 md:gap-8 mt-3 mb-0">
                {/* Left: Text */}
               
                    <div className="flex-1 flex flex-col items-start justify-center text-left lg:mr-[16vw]">
                        <h1 className="text-[14vw] sm:text-7xl md:text-[7vw] lg:text-[5.7vw] font-bold text-white leading-none m-0">
                            innovate.
                        </h1>
                        <h1 className="text-[14vw] sm:text-7xl md:text-[7vw] lg:text-[5.7vw] font-bold text-white leading-none m-0">
                            collaborate.
                        </h1>
                        <h1 className="text-[14vw] sm:text-7xl md:text-[7vw] lg:text-[5.7vw] font-bold text-white leading-none m-0">
                            elevate.
                        </h1>
                        <p className="mt-2 text-l sm:text-xl text-white" style={{ fontFamily: 'Neue Haas Grotesk Roman, Inter, system-ui, sans-serif' }}>
                            The Flagship Hackathon of NIT Trichy
                        </p>
                       
                    </div>
       

              
            </div>

           
        </section>
    );
};

export default Rsvp;