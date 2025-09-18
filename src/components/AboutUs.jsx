import React, { useState } from "react";


// Import all card images properly for deployment
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
  const [current, setCurrent] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const shuffleImages = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => {
      setCurrent((prev) => (prev + 1) % images.length);
      setIsAnimating(false);
    }, 250);
  };	return (
		<section className="w-full min-h-[500px] bg-black flex flex-col md:flex-row items-center justify-center py-16 px-6 md:px-24">
			<div className="flex-1 text-left">
				<div className="text-5xl md:text-6xl mb-8 text-left text-radial-gradient font-neue-roman">About Us</div>
				<p className="text-white text-lg md:text-xl mb-6 max-w-2xl font-neue-roman leading-relaxed">
					Welcome to TransfiNITTe'25, NIT Trichy's premiere hackathon, hosted by the Technical Council and SCIENT. This is where innovation meets action.
				</p>
				<p className="text-white text-lg md:text-xl max-w-2xl font-neue-roman leading-relaxed">
					Building on the success of TransfiNITTe'24, where 300+ participants pushed the limits in a 42-hour coding marathon, we're taking it up a notch. With 500+ participants and 100+ teams expected, TransfiNITTe'25 is set to redefine the hackathon experience.
				</p>
			</div>
			<div className="flex-1 flex flex-col items-end justify-center mt-12 md:mt-0 md:pr-16">
				<div className="relative w-[280px] h-[360px] md:w-[350px] md:h-[450px] overflow-visible">
					{/* Pattern glow behind cards */}
					<div className="absolute top-2 -left-12 md:top-3 md:-left-16 w-full h-full z-0 transform -rotate-6">
						<img 
							src={PatternImg}
							alt="pattern glow" 
							className="w-full h-full object-cover rounded-2xl md:rounded-3xl"
						/>
					</div>
					
					{/* Back card - next image */}
					<div className={`absolute top-1 -left-10 md:top-1 md:-left-12 w-full h-full rounded-2xl md:rounded-3xl bg-white z-5 flex items-center justify-center overflow-hidden transition-all duration-500 ease-out transform -rotate-6 ${isAnimating ? 'top-0 left-0 rotate-0' : ''}`}>
						<img 
							src={images[(current + 1) % images.length]} 
							alt="next card" 
							className="w-full h-full object-cover rounded-2xl md:rounded-3xl"
						/>
					</div>
					
					{/* Front card - current image */}
					<div className={`absolute top-0 left-0 w-full h-full rounded-2xl md:rounded-3xl bg-white z-10 flex items-center justify-center overflow-hidden transition-all duration-500 ease-in ${isAnimating ? 'transform translate-x-8 -translate-y-8 md:translate-x-10 md:-translate-y-10 opacity-0' : ''}`}>
						<img 
							src={images[current]} 
							alt="current card" 
							className="w-full h-full object-cover rounded-2xl md:rounded-3xl"
						/>
					</div>
					
					{/* Pattern.png glow behind cards */}
					<div className="absolute -top-[30%] -left-[48%] w-[170%] h-[170%] z-[2]">
						<img 
							src={PatternImg}
							alt="pattern glow" 
							className="w-full h-full object-cover rounded-2xl md:rounded-3xl"
						/>
					</div>
				</div>
				
				{/* Shuffle button below the card stack - centered to cards */}
				<div className="w-[280px] md:w-[350px] flex justify-center -mt-11">
					<button 
						onClick={shuffleImages} 
						className="px-6 py-2 md:px-8 md:py-3 bg-black text-white rounded-full border border-white text-base md:text-lg shadow-lg z-50 transition-all duration-200 hover:bg-gray-800 hover:scale-110 active:scale-95"
						disabled={isAnimating}
					>
						<img src={shuffle} alt="shuffle icon" className="inline-block w-5 h-5 mr-2 align-middle" />
						Shuffle
					</button>
					
				</div>
			</div>
		</section>
	);
};

export default AboutUs;
