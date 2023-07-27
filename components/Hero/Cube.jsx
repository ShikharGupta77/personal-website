"use client"

import Head from 'next/head'
import { Suspense } from "react"
import { Canvas, useLoader, useFrame, useThree } from "@react-three/fiber"
import { Environment, OrbitControls, useAnimations, useGLTF } from "@react-three/drei"
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"
import { useEffect, useRef } from 'react'
import * as THREE from 'three';
import { BloomFilter } from 'next/dist/shared/lib/bloom-filter'

const Model = () => {
  const groupRef = useRef();
  const gltf = useLoader(GLTFLoader, "/cube.gltf");
  const { actions, mixer } = useAnimations(gltf.animations, groupRef)

  const box = new THREE.Box3().setFromObject(gltf.scene);
  const center = box.getCenter(new THREE.Vector3());

  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.x += delta * 0.5;
      groupRef.current.rotation.y += delta * 0.5;
    }
    mixer.timeScale = 0.35;
    mixer.update(delta)
  });

  const { gl, scene, camera } = useThree(); 

  useEffect(() => {
    gl.shadowMap.enabled = true;
    gl.outputEncoding = THREE.sRGBEncoding;
  }, [gl]);

  useEffect(() => {
    if(actions.Animation) {
      actions.Animation.play();
    }
  }, [actions.Animation])

  
  return (
    <group ref={groupRef}>
        <primitive object={gltf.scene} scale={1}/>
    </group>
  );
};

export default function Cube() {
  return (
      <div className="globe flex-grow hover:cursor-grab active:cursor-grabbing">
        <Canvas shadows dpr={[1, 2]} camera={{ position: [80, 80, 80], fov: 5 }} >
        <pointLight position={[10, 10, 10]} intensity={0.35} power={3} castShadow color="#b8f6ff"/>
        <pointLight position={[10, 10, -10]} intensity={0.35} power={3} castShadow color="#b8f6ff"/>
        <pointLight position={[10, -10, 10]} intensity={0.35} power={3}  castShadow color="#b8f6ff"/>
        <pointLight position={[10, -10, -10]} intensity={0.35} power={3} castShadow color="#b8f6ff"/>
        <pointLight position={[-10, 10, 10]} intensity={0.35} power={3} castShadow color="#b8f6ff"/>
        <pointLight position={[-10, -10, 10]} intensity={0.35} power={3} castShadow color="#b8f6ff"/>
        <pointLight position={[-10, -10, -10]} intensity={0.35} power={3} castShadow color="#b8f6ff"/>
        <pointLight position={[-10, 10, -10]} intensity={0.35} power={3} castShadow color="#b8f6ff"/>
          <Suspense fallback={null}>
            <Model />
          </Suspense>
          <OrbitControls enablePan={true} enableZoom={false}/>
        </Canvas>
      </div>
  )
}
