import React, {Suspense} from 'react';
import { Canvas } from '@react-three/fiber';
import { Decal, Float,OrbitControls, Preload, useTexture } from '@react-three/drei';
import CanvasLoader from '../Loader';

// Ball component that renders the 3D ball with a texture image
const Ball = (props) => {
  // Load texture image with useTexture hook from drei library
  const [decal] = useTexture([props.imgUrl]);
  
  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      {/* Add ambient light */}
      <ambientLight intensity={0.25}/>
      {/* Add directional light */}
      <directionalLight position={[0, 0, 0.05]}/>
      {/* Create mesh with icosahedronBufferGeometry */}
      <mesh castShadow receiveShadow scale={2.75}>
        <icosahedronBufferGeometry args={[1,1]}/>
        {/* Create meshStandardMaterial with flat shading and polygon offset */}
        <meshStandardMaterial
          color="#fff8eb"
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        {/* Add Decal with texture image to mesh */}
        <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          flatShading
          map={decal}
        />
      </mesh>
    </Float>
  )
}

// BallCanvas component that renders the 3D ball in a canvas with orbit controls
const BallCanvas = ({ icon }) => {
  return (
    <Canvas frameloop='demand' gl={{preserveDrawingBuffer: true}}>
      {/* Use Suspense to handle loading state */}
      <Suspense fallback={<CanvasLoader />}>
        {/* Add OrbitControls to canvas */}
        <OrbitControls enableZoom={false} />
        {/* Render Ball component with texture image passed as prop */}
        <Ball imgUrl={icon}/>
      </Suspense>
      {/* Preload all assets */}
      <Preload all/>
    </Canvas>
  )
}

export default BallCanvas;
