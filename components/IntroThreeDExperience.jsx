"use client";

import { Canvas } from "@react-three/fiber";
import IntroExperience from "./ExperienceBg";

const IntroThreeDExperience = ({ children }) => {
  return (
    <>
      <div className="absolute bottom-0 left-0 right-0 top-0 z-0 h-screen bg-black">
        <Canvas
          shadows
          camera={{
            fov: 45,
            near: 0.1,
            far: 200,
            position: [1, -0.9, 15],
          }}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: "0",
            height: "100vh",
            background: "black",
          }}
        >
          <IntroExperience />
        </Canvas>
        {children}
      </div>
    </>
  );
};

export default IntroThreeDExperience;
