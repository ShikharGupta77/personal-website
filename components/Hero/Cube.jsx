"use client";

import Head from "next/head";
import { Suspense } from "react";
import { Canvas, useLoader, useFrame, useThree } from "@react-three/fiber";
import { Environment, OrbitControls, useAnimations, useGLTF } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useEffect, useRef } from "react";
import * as THREE from "three";
import { PiHandSwipeRightLight } from "react-icons/pi";

const Model = () => {
  const groupRef = useRef();
  const gltf = useLoader(GLTFLoader, "/cube.gltf");
  const { actions, mixer } = useAnimations(gltf.animations, groupRef);

  const box = new THREE.Box3().setFromObject(gltf.scene);
  const center = box.getCenter(new THREE.Vector3());

  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.x += delta * 0.4;
      groupRef.current.rotation.y += delta * 0.4;
    }
    mixer.timeScale = 0.3;
    mixer.update(delta);
  });

  const { gl, scene, camera } = useThree();

  useEffect(() => {
    gl.shadowMap.enabled = true;
    gl.outputColorSpace = THREE.sRGBEncoding;
  }, [gl]);

  useEffect(() => {
    if (actions.Animation) {
      actions.Animation.play();
    }
  }, [actions.Animation]);

  return (
    <group ref={groupRef}>
      <primitive object={gltf.scene} scale={1} />
    </group>
  );
};

export default function Cube({ pointerRef }) {
  return (
    <div className="w-full flex-1">
      <Canvas className="w-full flex-1 hover:cursor-grab active:cursor-grabbing" shadows dpr={[1, 2]} camera={{ position: [75, 75, 75], fov: 5 }}>
        <pointLight position={[10, 10, 10]} intensity={0.35} power={3} castShadow color="#b8f6ff" />
        <pointLight position={[10, 10, -10]} intensity={0.35} power={3} castShadow color="#b8f6ff" />
        <pointLight position={[10, -10, 10]} intensity={0.35} power={3} castShadow color="#b8f6ff" />
        <pointLight position={[10, -10, -10]} intensity={0.35} power={3} castShadow color="#b8f6ff" />
        <pointLight position={[-10, 10, 10]} intensity={0.35} power={3} castShadow color="#b8f6ff" />
        <pointLight position={[-10, -10, 10]} intensity={0.35} power={3} castShadow color="#b8f6ff" />
        <pointLight position={[-10, -10, -10]} intensity={0.35} power={3} castShadow color="#b8f6ff" />
        <pointLight position={[-10, 10, -10]} intensity={0.35} power={3} castShadow color="#b8f6ff" />
        <Suspense fallback={null}>
          <Model />
        </Suspense>
        <OrbitControls enablePan={false} enableZoom={false} rotateSpeed={1} />
      </Canvas>
      <div className="absolute inset-y-0 left-[5%] flex overflow-x-hidden text-secondary-color opacity-0 transition duration-300" ref={pointerRef}>
        <div className="my-auto">
          <PiHandSwipeRightLight className="h-20 w-20 lg:h-32 lg:w-32" />
        </div>
      </div>
    </div>
  );
}
