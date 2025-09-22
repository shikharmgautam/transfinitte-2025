import React, { useState } from "react";


import aboutusImg from "../assets/images/aboutus.jpeg";
import adwaithImg from "../assets/images/adwaith.jpeg";
import anandImg from "../assets/images/Anand Kumar.jpg";
import anirudhImg from "../assets/images/anirudh.jpg";
import ayushImg from "../assets/images/ayush.jpeg";
import kumarImg from "../assets/images/kumar.jpg";
import muditImg from "../assets/images/mudit.jpeg";
import ogImg from "../assets/images/og.png";
import rakeshImg from "../assets/images/rakesh.jpeg";
import ramImg from "../assets/images/ram.jpeg";
import subashImg from "../assets/images/subash.jpg";
import PatternImg from "../assets/images/Pattern.png";
import { shuffle } from '../assets';

const images = [
  aboutusImg,
  adwaithImg,
  anandImg,
  anirudhImg,
  ayushImg,
  kumarImg,
  muditImg,
  ogImg,
  rakeshImg,
  ramImg,
  subashImg
];const AboutUs = () => {
  const [isAnimating, setIsAnimating] = useState(false);
  const [imageOrder, setImageOrder] = useState(images.map((_, index) => index));
  const [animationStage, setAnimationStage] = useState("idle");

  const shuffleImages = () => {
    if (isAnimating) return;
    setIsAnimating(true);

    setAnimationStage("moving-right");

    setTimeout(() => {
      setAnimationStage("returning-center");
    }, 300);

    setTimeout(() => {
      setImageOrder((prev) => {
        const newOrder = [...prev];
        const firstImage = newOrder.shift();
        newOrder.push(firstImage);
        return newOrder;
      });
      setAnimationStage("idle");
      setIsAnimating(false);
    }, 600);
  };

  return (
    <section className="w-full min-h-[500px] bg-black flex flex-col md:flex-row items-center justify-center py-16 px-6 md:px-24">
      <div className="flex-1 text-left">
        <div className="text-6xl md:text-6xl lg:7xl mb-8 text-left text-radial-gradient bg-clip-text text-transparent font-bold">
          About Us
        </div>
        <p className="text-white text-lg md:text-xl mb-6 max-w-2xl leading-relaxed">
          Welcome to TransfiNITTe'25, NIT Trichy's premiere hackathon, hosted by the Technical Council and SCIENT. This
          is where innovation meets action.
        </p>
        <p className="text-white text-lg md:text-l lg:text-xl max-w-2xl leading-relaxed">
          Building on the success of TransfiNITTe'24, where 300+ participants pushed the limits in a 42-hour coding
          marathon, we're taking it up a notch. With 500+ participants and 100+ teams expected, TransfiNITTe'25 is set
          to redefine the hackathon experience.
        </p>
      </div>

      <div className="flex-1 flex flex-col items-end justify-center mt-12 md:mt-0 md:mr-10 lg:pr-16">
        <div className="relative w-[280px] h-[360px] md:w-[300px] md:h-[410px] lg:w-[350px] lg:h-[450px] overflow-visible">
          <div className="absolute -top-20 -left-20 md:-top-15 md:-left-25 w-full h-full md:w-[150%] md:h-[150%] z-0 transform -rotate-6">
						<img 
							src={PatternImg}
							alt="pattern glow" 
							className="w-full h-full object-cover rounded-2xl md:rounded-3xl"
						/>
					</div>
          
          {imageOrder.map((imageIndex, stackIndex) => {
            const isFirst = stackIndex === 0;
            const rotations = [-8, -3, 2, 7, -5, 1, 6, -2, 4, -6, 3];
            const rotation = rotations[stackIndex] || 0;
            const leftOffset = -(stackIndex * 3);
            const topOffset = stackIndex * 1;
            const zIndex = images.length - stackIndex;

            let transformClass = "";
            let currentZIndex = zIndex;

            if (isFirst && isAnimating) {
              if (animationStage === "moving-right") {
                transformClass = "translate-x-[120%]";
                currentZIndex = zIndex;
              } else if (animationStage === "returning-center") {
                transformClass = "translate-x-0";
                currentZIndex = 0;
              }
            }

            return (
              <div
                key={`${imageIndex}-${stackIndex}`}
                className={`absolute w-full h-full rounded-2xl md:rounded-3xl bg-white flex items-center justify-center overflow-hidden transition-all duration-300 ease-out ${transformClass}`}
                style={{
                  transform: `rotate(${rotation}deg)`,
                  left: `${leftOffset}px`,
                  top: `${topOffset}px`,
                  zIndex: currentZIndex,
                }}
              >
                <img
                  src={images[imageIndex]}
                  alt={`team member ${imageIndex + 1}`}
                  className="w-full h-full object-cover rounded-2xl md:rounded-3xl"
                />
              </div>
            );
          })}

          <div className="absolute -top-[30%] -left-[48%] w-[170%] h-[170%] z-[1] pointer-events-none">
           
          </div>
        </div>

        <div className="w-[280px] md:w-[350px] flex justify-center -mt-11">
          <button
            onClick={shuffleImages}
            className="px-6 py-2 md:px-8 md:py-3 bg-black text-white rounded-full border border-white text-base md:text-lg shadow-lg z-50 transition-all duration-200 hover:bg-gray-800 hover:scale-110 active:scale-95 flex items-center gap-2"
            disabled={isAnimating}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
              />
            </svg>
            Shuffle
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
