import { useState, useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";

const Stars = (props) => { // The Stars component renders a group of points in a 3D space, which will look like stars.

  const ref = useRef(); // Create a reference to the Points object, which will be used to update its rotation in each frame.
  const [sphere] = useState(() => random.inSphere(new Float32Array(5000), { radius: 1.2 })); // Initialize a state variable with a random distribution of points inside a sphere.

  useFrame((state, delta) => { // The useFrame hook updates the rotation of the Points object in each frame.
    ref.current.rotation.x -= delta / 10;
    ref.current.rotation.y -= delta / 15;
  });

  return ( // Return the Points object, with the PointMaterial component defining how the points will look like.
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          color='#f272c8'
          size={0.002}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

const StarsCanvas = () => { // The StarsCanvas component renders the Canvas object from react-three-fiber, which will hold the 3D scene.
  return (
    <div className='w-full h-auto absolute inset-0 z-[-1]'>
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Suspense fallback={null}>
          <Stars />
        </Suspense>

        <Preload all />
      </Canvas>
    </div>
  );
};

export default StarsCanvas;