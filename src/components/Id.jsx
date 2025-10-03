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

extend({ MeshLineGeometry, MeshLineMaterial });
useGLTF.preload('src/assets/card.glb');
useTexture.preload('src/assets/images/tag_texture.png');

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
    <div className="relative h-screen w-full bg-cover bg-center bg-no-repeat overflow-hidden" style={{ backgroundImage: `url(${herobg})` }}>
      {/* Close button */}
      {onClose && (
        <button
          onClick={onClose}
          className="absolute top-6 right-6 z-50 bg-white text-black px-4 py-2 rounded-lg shadow-lg hover:bg-gray-200 transition-colors font-bold"
        >
          ✕ Close
        </button>
      )}
      {/* Hero component positioned absolutely to overlay with Canvas */}
      <div className="absolute top-0 left-0 w-full h-full z-10 pointer-events-none">
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
