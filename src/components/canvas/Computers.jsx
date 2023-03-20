import React, { Suspense, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';

import CanvasLoader from "../Loader"; 

// Define a component to render the 3D model of the computer
const Computers = ({ isMobile }) => {
  // Load the 3D model using the `useGLTF` hook from Drei
  const computer = useGLTF("./desktop_pc/scene.gltf");

  // Render the 3D model as a mesh with various lights and shadows
  return (
    <mesh>
      <hemisphereLight intensity={0.15}
      groundColor="black" />
      <pointLight intensity={1} />
      <spotLight 
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-maps={1024}
      />
      <primitive 
        object={computer.scene}
        scale={ isMobile ? 0.4 : 0.75}
        position={ isMobile ? [0,-4,-2.2] : [0, -3.25, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  )
}

// Define a component to render the canvas for the 3D model
const ComputersCanvas = () => {
    const [isMobile, setIsMobile] = useState(false);

    // Use the `useEffect` hook to determine if the screen is mobile
    useEffect(() => {
      // Add a listener for changes to the screen size
      const mediaQuery = window.matchMedia("(max-width: 500px)");
  
      // Set the initial value of the `isMobile` state variable
      setIsMobile(mediaQuery.matches);
  
      // Define a callback function to handle changes to the media query
      const handleMediaQueryChange = (event) => {
        setIsMobile(event.matches);
      };
  
      // Add the callback function as a listener for changes to the media query
      mediaQuery.addEventListener("change", handleMediaQueryChange);
  
      // Remove the listener when the component is unmounted
      return () => {
        mediaQuery.removeEventListener("change", handleMediaQueryChange);
      };
    }, []);

  // Render the canvas with the 3D model and various controls
  return (
    <Canvas 
    frameloop='demand'
    shadows
    camera={{position: [20, 3, 5], fov: 25 }}
    gl= {{preserveDrawingBuffer: true}}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls 
          enableZoom={false} 
          maxPolarAngle={Math.PI/ 2}
          minPolarAngle={Math.PI/ 2}  
        />
        <Computers isMobile={isMobile} />
      </Suspense>

      <Preload all/>
    </Canvas>
  )
}

export default ComputersCanvas;
