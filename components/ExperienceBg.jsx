"use client";
import {
  MeshReflectorMaterial,
  Text3D,
  Center,
  PivotControls,
  OrbitControls,
} from "@react-three/drei";
import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";
import { useRef } from "react";
import { useThree, useFrame } from "@react-three/fiber";

export default function IntroExperience() {
  const textGroupRef = useRef();
  const textRef = useRef();
  const { camera } = useThree();

  const matcapTexture = useLoader(TextureLoader, "textures/matcaps/3.png");
  const logoTexture = useLoader(TextureLoader, "textures/logo-texture.png");

  useFrame((state, delta) => {
    textGroupRef.current.rotation.y += delta * 0.25;
  });

  return (
    <>
      <OrbitControls makeDefault />

      <directionalLight position={[1, 2, 3]} intensity={1.5} />
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1.5} />

      <Center ref={textGroupRef} position-z={0} position-x={0} position-y={1}>
        <group>
          <mesh position-y={3.5} position-x={2.75} scale={2}>
            <boxGeometry />
            <meshStandardMaterial color="#ffffff" map={logoTexture} />
          </mesh>
        </group>
      </Center>

      <mesh
        position-y={-1}
        rotation-x={-Math.PI * 0.5}
        position-z={0}
        scale={80}
      >
        <planeGeometry />
        <MeshReflectorMaterial
          resolution={1080}
          blur={[1000, 1000]}
          mixBlur={0.9}
          mirror={0.6}
          color="#a0a0a0"
        />
      </mesh>
    </>
  );
}
