import tfBadge from "../assets/images/svg/tf-badge.svg";
import TabStickyNavbar from "./navTab";
import whitearrow from "../assets/images/svg/whitearrow.svg";
import { supabase } from "./supabase";
import { data, useNavigate } from "react-router-dom";
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;



const Auth = async () => {
    console.log("supabase");
    const supabase = createClient(supabaseUrl, supabaseKey);
    const {

  data: { session }

} = await supabase.auth.getSession()
const result = await supabase.auth.getSession()
console.log(result);

}
    const handleRegisterClick = () => {
        window.location.href="https://register.transfinitte.com/rsvp";
    };

const Hero = () => {
    return (
        <section
            id='hero'
            className="w-full min-h-screen flex flex-col items-center justify-center px-4 sm:px-8 md:px-10 lg:px-25 py-14"
        >
            
            <div className="relative flex flex-col-reverse sm:flex-row items-center justify-center w-full gap-4 md:gap-8 mt-3 mb-0">
                {/* Left: Text */}
               
                    <div className="flex-1 flex flex-col items-start justify-center text-left lg:mr-[20vw] md:ml-0 lg:ml-30 transform translate-y-60 sm:translate-y-0">
                        <h1 className="text-5xl sm:text-7xl md:text-[7vw] lg:text-[5.7vw] font-bold text-white leading-none m-0 ">
                            Get 
                        </h1>
                        <h1 className="text-5xl sm:text-7xl md:text-[7vw] lg:text-[5.7vw] font-bold text-white leading-none m-0 ">
                            Your Own
                        </h1>
                        <h1 className="text-5xl sm:text-7xl md:text-[7vw] lg:text-[5.7vw] font-bold text-white leading-none m-0 ">
                            Digital SWAG
                        </h1>
                        <p className="mt-2 text-l sm:text-xl text-white" style={{ fontFamily: 'Neue Haas Grotesk Roman, Inter, system-ui, sans-serif' }}>
                           
                        </p>
                                                <button
                                                    className="flex items-center  gap-2 bg-gray-200 text-gray-800 px-7 py-4 rounded-lg border hover:bg-gray-300 transition-colors backdrop-blur-3xl mt-6"
                                                    onClick={handleRegisterClick}
                                                >
                                                    <span className="text-sm font-medium cursor-pointer">Get Your RSVP</span>
                                                    <img src={whitearrow} alt="arrow" className="w-4 h-4 filter brightness-0" />
                                                </button>
                        
                       
                    </div>
       

              
            </div>

           
        </section>
    );
};

export default Hero;