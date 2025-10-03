import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";


const CountdownTimer = ({ targetDate, finalText, render }) => {
  const [daysLeft, setDaysLeft] = useState(null);
  const [showFinalText, setShowFinalText] = useState(false);

  useEffect(() => {
    const updateDaysLeft = () => {
      const now = new Date();
      const diff = targetDate - now;
      const days = Math.ceil(diff / (1000 * 60 * 60 * 24));
      if (days <= 0) {
        setShowFinalText(true);
      } else {
        setDaysLeft(days);
      }
    };

    updateDaysLeft();

    const now = new Date();
    const nextMidnight = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
    const msToMidnight = nextMidnight - now;

    // Update at next midnight, then every 24h
    const midnightTimeout = setTimeout(() => {
      updateDaysLeft();
      setInterval(updateDaysLeft, 24 * 60 * 60 * 1000);
    }, msToMidnight);

    return () => {
      clearTimeout(midnightTimeout);
    };
  }, [targetDate]);

  if (render) {
    return render({ daysLeft, showFinalText, finalText });
  }

 
  return (
    <div className="mt-2 flex items-end gap-6">
      {showFinalText ? (
        <span className="text-[3vw] sm:text-[2vw] md:text-[1.5vw] lg:text-[1vw] font-bold text-white leading-tight">{finalText}</span>
      ) : (
        <>
          <span className="text-[22vw] sm:text-[18vw] md:text-[14vw] lg:text-[10vw] font-extrabold text-white leading-none">{daysLeft}</span>
          <div className="flex flex-col justify-center text-left ">
            <span className="text-[9vw] sm:text-[7vw] md:text-[5vw] lg:text-[4vw] font-bold text-white leading-tight">Days</span>
            <span className="text-[9vw] sm:text-[7vw] md:text-[5vw] lg:text-[4vw] font-bold text-white leading-tight">To Go</span>
          </div>
        </>
      )}
    </div>
  );
};

export default CountdownTimer;
