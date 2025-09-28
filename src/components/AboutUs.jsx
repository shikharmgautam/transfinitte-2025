import React, { useState, useEffect } from "react";


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

];

// FadeCarousel component for infinite fade in/out
const FadeCarousel = ({ images }) => {
  const [current, setCurrent] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const fadeOutTimeout = setTimeout(() => setFade(false), 2500); // fade out after 2.5s
    const nextTimeout = setTimeout(() => {
      setCurrent((prev) => (prev + 1) % images.length);
      setFade(true);
    }, 3000); // switch image every 3s
    return () => {
      clearTimeout(fadeOutTimeout);
      clearTimeout(nextTimeout);
    };
  }, [current, images.length]);

  return (
    <div className="relative w-[80vw] h-[70vw] md:w-[400px] md:h-[390px] lg:w-[450px] lg:h-[400px] transform md:translate-x-[40px] overflow-visible z-40">
      <div className="absolute w-full h-full flex items-center justify-center">
        <div className="p-[3px] rounded-2xl md:rounded-3xl bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 w-full h-full">
          <div className="w-full h-full rounded-2xl md:rounded-3xl bg-black flex items-center justify-center">
            <img
              src={images[current]}
              alt={`team member ${current + 1}`}
              className={`w-full h-full object-cover rounded-2xl md:rounded-3xl transition-opacity duration-700 ${fade ? 'opacity-100' : 'opacity-0'}`}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const AboutUs = () => {
  return (
    <section className="w-full min-h-[500px] bg-black flex flex-col md:flex-row items-center justify-center pb-16 pt-6 px-6 md:px-24">
      <div className="flex-1 text-left">
        <div className="text-6xl md:text-6xl lg:8xl mb-8 text-left text-radial-gradient bg-clip-text text-transparent font-neue-roman">
          About Us
        </div>
        <p className="text-white text-lg md:text-xl mb-6 max-w-2xl leading-relaxed">
          Welcome to TransfiNITTe'25, NIT Trichy's premiere hackathon, hosted by the Technical Council and SCIENT. This
          is where innovation meets action.
        </p>
        <p className="text-white text-lg md:text-xl lg:text-2xl max-w-2xl leading-relaxed">
          Building on the success of TransfiNITTe'24, where 300+ participants pushed the limits in a 42-hour coding
          marathon, we're taking it up a notch. With 500+ participants and 100+ teams expected, TransfiNITTe'25 is set
          to redefine the hackathon experience.
        </p>
      </div>

      <div className="flex-1 flex flex-col items-end justify-center mt-12 md:mt-0 md:mr-0 lg:pr-2">
        <FadeCarousel images={images} />
      </div>
    </section>
  );
};

export default AboutUs;
