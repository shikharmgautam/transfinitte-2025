import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import AboutUs from './components/AboutUs';
import Judges from './components/Judges';
import Hero from './components/hero.jsx';
import Footer from './components/Footer';
import Faq from './components/Faq';
import Header from './components/Header.jsx';
import Sponsors from './components/Sponsors.jsx';
import Timeline from './components/timeline.jsx';
// import StickyNavbar from './components/Navbar.jsx';
import StickyNavbar from './components/Nav.jsx';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <Hero />
 
      {/* <StickyNavbar /> */}

      
      <Timeline />
      
      <AboutUs />
      <Judges />
      <Sponsors />
  <Faq />
      <Footer />
      
     
    </>
  );
}

export default App
