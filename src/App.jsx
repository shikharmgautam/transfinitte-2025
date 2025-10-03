import { useState } from "react";
import "./App.css";
import AboutUs from "./components/AboutUs";
import Judges from "./components/Judges";
import Hero1 from "./components/hero1.jsx";
import Footer from "./components/Footer";
import Faq from "./components/Faq";
import Sponsors from "./components/Sponsors.jsx";
import Timeline from "./components/timeline.jsx";
import MobileStickyNavbar from "./components/navmobile.jsx";
import TabStickyNavbar from "./components/navTab.jsx";
import Id from "./components/Id";

function App() {
  const [expandedCard, setExpandedCard] = useState(null);
  const [mobileMainExpanded, setMobileMainExpanded] = useState(false);

  // Determine if we should show the rest of the content
  // Desktop: when left card is expanded
  // Mobile: when main card is expanded
  const showRestOfContent = expandedCard === 'left' || mobileMainExpanded;

  return (
    <>
      {/* Hero1 always renders */}
      <Hero1
        expandedCard={expandedCard}
        setExpandedCard={setExpandedCard}
        mobileMainExpanded={mobileMainExpanded}
        setMobileMainExpanded={setMobileMainExpanded}
      />
      <Id />

      {/* Rest of the content appears AFTER Hero1 when expanded */}
      {showRestOfContent && (
        <div>
          <MobileStickyNavbar />
          <TabStickyNavbar />
          <AboutUs />
          <Timeline />
          <Sponsors />
          <Judges />
          <Faq />
          <Footer />
        </div>
      )}
    </>
  );
}

export default App;