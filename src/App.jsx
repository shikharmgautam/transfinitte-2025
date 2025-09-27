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

  return (
    <>
      <Hero1 expandedCard={expandedCard} setExpandedCard={setExpandedCard} />
      {expandedCard === 'left' && (
        <>
          <MobileStickyNavbar className="block" />
          <TabStickyNavbar />
          <AboutUs />
          <Timeline />
          <Sponsors />
          {/* <Judges /> */}
          <Faq />
          <Footer />
        </>
      )}
    </>
  );
}

export default App
