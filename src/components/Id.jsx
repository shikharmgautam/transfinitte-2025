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
import Band from "./band";
import Hero from "./rsvp";
import herobg from "../assets/images/hero-bg.png";

extend({ MeshLineGeometry, MeshLineMaterial });
useGLTF.preload('/src/assets/card.glb');
useTexture.preload('https://assets.vercel.com/image/upload/contentful/image/e5382hct74si/SOT1hmCesOHxEYxL7vkoZ/c57b29c85912047c414311723320c16b/band.jpg');

export default function Id() {
  return (
    <div className="relative h-screen w-full bg-cover bg-center bg-no-repeat overflow-hidden" style={{ backgroundImage: `url(${herobg})` }}>
      {/* Background overlay for better contrast */}
  
      
      {/* Hero component positioned absolutely to overlay with Canvas */}
      <div className="absolute top-0 left-0 w-full h-full z-10 pointer-events-none">
        <Hero />
      </div>
      
      <div className="flex h-screen w-full ">
        <Canvas
          camera={{ position: [0, 0, 13], fov: 25 }}
          style={{ backgroundColor: "transparent" }}
        >
          <ambientLight intensity={Math.PI} />
          <Physics
            debug={false}
            interpolate
            gravity={[0, -20, 0]}
            timeStep={0.5/ 60}
          >
            <Band />
          </Physics>
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
      </div>
    </div>
  );
}
