import React from "react";

// Returns the number of days left from today to October 10, 2025
function getDaysLeft() {
  const today = new Date();
  const target = new Date(2025, 9, 10); // October is month 9 (0-indexed)
  const diffTime = target - today;
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  return diffDays;
}

const DaysToGo = () => {
  const days = getDaysLeft();
  return (
    <div style={{ color: "white", fontFamily: 'Neue Haas Grotesk Display, sans-serif', fontWeight: 400, fontSize: 18, letterSpacing: 0.5, background: 'transparent' }}>
      {days} Days To Go
    </div>
  );
};

export default DaysToGo;
