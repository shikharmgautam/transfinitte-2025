
import dino from "../assets/images/dino.png";
import tiltT from "../assets/images/svg/tiltT.svg";

const Hero1 = () => {
  return (
    <div className="min-h-screen bg-transparent ">
      {/* Main Content */}
      <div className="flex h-screen p-8 gap-6 ">
        {/* Left Hero Section */}
        <div className="flex-1 bg-transparent border border-gray-200 rounded-2xl p-8 flex flex-col justify-center overflow-hidden relative">
          {/* Info Tag */}
          <div className="mb-6">
            <span className="bg-white text-black px-3 py-1 rounded-full text-sm">
              Registrations opening in 10 days
            </span>
          </div>
          
          {/* Main Heading */}
          <h1 className="text-6xl font-bold text-white leading-tight">
            Ready to hack?
          </h1>
          <button
            className="text-white text-lg mt-2 bg-transparent border-none p-0 m-0 hover:underline focus:outline-none cursor-pointer text-left w-fit"
            type="button"
          >
            Get Updates
          </button>

           <div className="hidden sm:flex items-center justify-center gap-1 absolute -right-[30%] -bottom-[60%] -translate-y-[10vh] -translate-x-1/2 z-20 font-neue-xxthin m-0 p-0 overflow-hidden">
          <span className="text-[60vw]  lg:text-[75vh] bg-[linear-gradient(-12deg,rgba(0,0,0,1)_0%,rgba(0,0,0,0)_50%),conic-gradient(from_90deg_at_50%_50%,#E861FF_0%,#EF315E_50%,#FF315E_75%,#E861FF_90%)] bg-clip-text text-transparent -rotate-[12.32deg]">2</span>
          <span className="text-[60vw] lg:text-[75vh] bg-[linear-gradient(-12deg,rgba(0,0,0,1)_0%,rgba(0,0,0,0)_50%),conic-gradient(from_90deg_at_50%_50%,#E861FF_0%,#EF315E_50%,#FF315E_75%,#E861FF_90%)] bg-clip-text text-transparent -rotate-[12.32deg] translate-y-[5vw] lg:translate-y-[5vh]">5</span>
        </div>
        </div>

        {/* Right Side - Two Components */}
        <div className="w-96 flex flex-col gap-6">
          {/* Top Component - Play to win (Bigger) */}
          <div className="flex-[3] bg-black border border-gray-200 rounded-2xl p-6 relative">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-4xl font-bold text-white">Play to win</h2>
             
            </div>

            <p className="text-radial-gradient text-sm mb-4">View leaderboard</p>

            <img src={dino} alt="dino" className="relative w-full h-auto top-40" />
            
           
          </div>

          {/* Bottom Component - Get our Merch (Smaller) */}
          <div className="flex-[1] bg-black border border-gray-200 rounded-2xl p-6 overflow-hidden relative">
            <h2 className="text-2xl font-bold text-white mb-4">Get your Merch</h2>

            <button
              className="text-black text-sm mb-4 bg-white border-none p-3 mt-3 text-bold rounded-2xl hover:underline focus:outline-none cursor-pointer text-left w-fit"
              type="button"
            >
              Register For Merch
            </button>

            {/* Placeholder Image Area */}
            <img src={tiltT} alt="tilted T logo" className="absolute w-[60%] h-auto mx-auto -bottom-12 -right-12" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero1;
