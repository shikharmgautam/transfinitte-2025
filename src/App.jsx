import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import AboutUs from "./components/AboutUs";
import Judges from "./components/Judges";
import Hero from "./components/hero.jsx";
import Hero1 from "./components/hero1.jsx";
import Footer from "./components/Footer";
import Faq from "./components/Faq";
import Header from "./components/Header.jsx";
import Sponsors from "./components/Sponsors.jsx";
import Timeline from "./components/timeline.jsx";
// import StickyNavbar from "./components/Navbar.jsx";
import StickyNavbar from "./components/Nav.jsx";
import MobileStickyNavbar from "./components/navmobile.jsx";
import TabStickyNavbar from "./components/navTab.jsx";



function App() {
  const [expandedCard, setExpandedCard] = useState(null);
  const [showHero, setShowHero] = useState(false);

  // Callback to show Hero and hide Hero1
  const handleShowHero = () => {
    setShowHero(true);
  };

  // Callback to go back to Hero1 (optional, e.g. if you want to allow toggling back)
  const handleShowHero1 = () => {
    setShowHero(false);
  };

  return (
    <>
      {/* Show Hero1 unless showHero is true */}
      {!showHero && (
        <Hero1
          expandedCard={expandedCard}
          setExpandedCard={setExpandedCard}
          onMainCardClick={handleShowHero}
          className="hidden sm:block"
        />
      )}
      {/* Show Hero when showHero is true */}
      {showHero && (
        <div>
        <Hero />
        <MobileStickyNavbar className="block" />
          <TabStickyNavbar />
          <AboutUs />
          <Timeline />
          <Sponsors />
          <Judges />
          <Faq />
          <Footer />
        </div>
      )}
      {/* The rest of your app (unchanged) */}
      {expandedCard === 'left' && (
        <div className="hidden sm:block">
          <MobileStickyNavbar className="block" />
          <TabStickyNavbar />
          <AboutUs />
          <Timeline />
          <Sponsors />
          <Judges />
          <Faq />
          <Footer />
        </div>
      )}
      <div className="block sm:hidden">
        <MobileStickyNavbar className="block" />
        <TabStickyNavbar />
        <AboutUs />
        <Timeline />
        <Sponsors />
        <Judges />
        <Faq />
        <Footer />
      </div>
    </>
  );
}

export default App
