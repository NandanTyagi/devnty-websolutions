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

      {/* <PivotControls
            anchor={[-0.5, -0.5, -0.5]}
            depthTest={false}
            lineWidth={4}
            axisColors={['#ffffff', '#ffffff', '#ffffff']}
            scale={400}
            fixed={true}
            visible={false}
        > */}
      <Center ref={textGroupRef} position-z={0} position-x={0}>
        <group>
          <Text3D
            position-y={1.7}
            position-x={1.4}
            font="./fonts/Crimson Pro Light_Regular.json"
            size={0.6}
            height={0.2}
            curveSegments={12}
            bevelEnabled
            bevelThickness={0.02}
            bevelSize={0.02}
            bevelOffset={0}
            bevelSegments={5}
            castShadow
            ref={textRef}
          >
            DEVNTY
            <meshMatcapMaterial matcap={matcapTexture} />
          </Text3D>
          <Text3D
            position-y={1}
            position-x={0}
            font="./fonts/Crimson Pro ExtraLight_Regular.json "
            size={0.6}
            height={0.2}
            curveSegments={12}
            bevelEnabled
            bevelThickness={0.02}
            bevelSize={0.02}
            bevelOffset={0}
            bevelSegments={5}
            castShadow
          >
            <meshMatcapMaterial matcap={matcapTexture} />
            WEBSOLUTIONS
          </Text3D>
        </group>
      </Center>
      {/* </PivotControls> */}

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
