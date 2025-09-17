import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import AboutUs from './components/AboutUs';
import Judges from './components/Judges';
import Hero from './components/hero.jsx';
import Footer from './components/Footer';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Hero />
      <AboutUs />
      <Judges />
      <Footer />
     
    </>
  );
}

export default App
