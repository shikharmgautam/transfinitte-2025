"use client";
import { Canvas, extend } from "@react-three/fiber";
import {
  useGLTF,
  useTexture,
  Environment,
  Lightformer,
} from "@react-three/drei";
import { Physics } from "@react-three/rapier";
import { MeshLineGeometry, MeshLineMaterial } from "meshline";
import { Suspense, useState, useEffect } from "react";
import Band from "./band";
import Hero from "./Rsvp";
import herobg from "../assets/images/hero-bg.png";
import tfBadge from "../assets/images/svg/tf-badge.svg";
import whitearrow from "../assets/images/svg/whitearrow.svg";
import { supabase } from "./supabase";
import { data, useNavigate } from "react-router-dom";
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;



const Auth = async () => {
    console.log("supabase");
    const supabase = createClient(supabaseUrl, supabaseKey);
    const {

  data: { session }

} = await supabase.auth.getSession()
const result = await supabase.auth.getSession()
console.log(result);

}
  const handleRegisterClick = () => {
    window.location.href="https://register.transfinitte.com/rsvp";
    // toast("Registrations opening soon", {
    //   description: "Stay tuned for updates!",
    //   duration: 3000,
    // });
  };
extend({ MeshLineGeometry, MeshLineMaterial });
useGLTF.preload('/assets/card.glb');
useTexture.preload('/assets/images/tag_texture.png');

// Chrome-compatible Physics wrapper with proper WASM initialization
function SafePhysics({ children }) {
  const [ready, setReady] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    let mounted = true;

    const initializePhysics = async () => {
      try {
        // Import and initialize Rapier WASM module
        const RAPIER = await import('@dimforge/rapier3d-compat');
        await RAPIER.init();
        
        // Additional delay for Chrome stability
        await new Promise(resolve => setTimeout(resolve, 500));
        
        if (mounted) {
          setReady(true);
        }
      } catch (err) {
        console.error('Physics initialization failed:', err);
        if (mounted) {
          setError(err);
        }
      }
    };

    initializePhysics();

    return () => {
      mounted = false;
    };
  }, []);

  if (error || !ready) {
    // Return null when not ready - parent will handle loading state
    return null;
  }

  return (
    <Physics
      debug={false}
      interpolate={true}
      gravity={[0, -20, 0]}
      timeStep={1/60}
    >
      {children}
    </Physics>
  );
}

export default function Id({ onClose }) {
  return (
    <div className="relative h-screen w-full bg-cover bg-center bg-no-repeat overflow-hidden bg-black" style={{ backgroundImage: `url(${herobg})` }}>
      <div className="absolute bg-black z-[999] h-[100vh] w-[100vw] top-0 left-0 animate-slideDownBlackDiv"></div>
      {/* Close button */}
      {/* {onClose && (
        <button
          onClick={onClose}
          className="absolute top-6 right-6 z-50 bg-white text-black px-4 py-2 rounded-lg shadow-lg hover:bg-gray-200 transition-colors font-bold"
        >
          ✕ Close
        </button>
      )} */}
      {/* Hero component positioned absolutely to overlay with Canvas */}

                    <div className="flex items-center w-full px-3 sm:px-19  absolute left-0 top-0 backdrop-blur-xl z-[999]" style={{height: '10vh', minHeight: 40}}>
            <div className="flex items-center justify-between w-[100vw]">
              <img src={tfBadge} alt="TF 25 logo" className="h-7 sm:h-10 w-auto" />
              <div className="inline-flex items-center gap-6">
                <button className="cursor-pointer hover:underline" onClick={onClose}>Home</button>
                <button className="cursor-pointer hover:underline hidden sm:block" onClick={handleRegisterClick}>Register</button>
                <button className="cursor-pointer hover:underline hidden sm:block" onClick={() => window.open("http://wa.me/+919969647124", "_blank")}>Contact Us</button>
              </div>
                <button className=" items-center hidden sm:flex  gap-2  bg-gray-200 text-gray-800 px-5 py-3 rounded-lg border border-gray-300 hover:bg-gray-300 transition-colors" 
                //onClick={handleRegisterClick}
                >
                  <span className="text-sm font-medium cursor-pointer  ">RSVP Soon</span>
                
                </button>
            </div>
           
          </div>
      <div className="absolute top-0 left-0 w-full h-full z-10 cursor-pointer">
         
        <Hero />
      </div>
      
      <div className="flex h-screen w-full">
        <Suspense fallback={<div className="w-full h-full flex items-center justify-center text-white">Loading...</div>}>
          <Canvas
            camera={{ position: [0, 0, 13], fov: 25 }}
            style={{ backgroundColor: "transparent" }}
            gl={{ antialias: true, alpha: true }}
            dpr={[1, 2]}
          >
            <ambientLight intensity={Math.PI} />
            <SafePhysics>
             
              <Band />
             
            </SafePhysics>
            <Environment blur={0.75}>
              <Lightformer
                intensity={2}
                color="white"
                position={[0, -1, 5]}
                rotation={[0, 0, Math.PI / 3]}
                scale={[100, 0.1, 1]}
              />
              <Lightformer
                intensity={3}
                color="white"
                position={[-1, -1, 1]}
                rotation={[0, 0, Math.PI / 3]}
                scale={[100, 0.1, 1]}
              />
              <Lightformer
                intensity={3}
                color="white"
                position={[1, 1, 1]}
                rotation={[0, 0, Math.PI / 3]}
                scale={[100, 0.1, 1]}
              />
              <Lightformer
                intensity={10}
                color="white"
                position={[-10, 0, 14]}
                rotation={[0, Math.PI / 2, Math.PI / 3]}
                scale={[100, 10, 1]}
              />
            </Environment>
          </Canvas>
        </Suspense>
      </div>
    </div>
  );
}
