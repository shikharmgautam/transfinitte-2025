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
  const [showIdComponent, setShowIdComponent] = useState(false);
  const [idAnimating, setIdAnimating] = useState(false);

  // Determine if we should show the rest of the content
  // Desktop: when left card is expanded
  // Mobile: when main card is expanded
  const showRestOfContent = expandedCard === 'left' || mobileMainExpanded;

  // Handle play card click - first expand the card, then show Id component
  const handlePlayCardClick = () => {
    // Step 1: Expand the play card
    setExpandedCard('play');
    
    // Step 2: After card expansion animation, show Id component
    setTimeout(() => {
      setShowIdComponent(true);
      setIdAnimating(true);
      
      // Step 3: Reset Id animation state after it completes
      setTimeout(() => {
        setIdAnimating(false);
      }, 1000); // Id animation duration
    }, 500); // Wait for card expansion
  };

  // Handle closing Id component
  const handleCloseId = () => {
    setShowIdComponent(false);
    setIdAnimating(false);
    setExpandedCard(null); // Also reset expanded card
  };

  return (
    <>
      {/* Hero1 renders with smooth transitions */}
      <Hero1
        expandedCard={expandedCard}
        setExpandedCard={setExpandedCard}
        mobileMainExpanded={mobileMainExpanded}
        setMobileMainExpanded={setMobileMainExpanded}
        onPlayCardClick={handlePlayCardClick}
        showIdComponent={showIdComponent}
      />
      
      {/* Id component with animation - only show when play card is clicked */}
      {showIdComponent && (
        <div 
          className={`id-overlay ${idAnimating ? 'animating' : 'visible'}`}
        >
          <Id onClose={handleCloseId} />
        </div>
      )}

      {/* Rest of the content appears AFTER Hero1 when expanded */}
      {showRestOfContent && !showIdComponent && (
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