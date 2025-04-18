import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';

const Controller = () => {
  const { scene } = useGLTF('/models/playstation/scene.gltf'); // adjust path if needed
  return <primitive object={scene} scale={15} />;
};

const ControllerModel = () => {
  return (
    <Canvas camera={{ position: [-2, 0, -5], fov: 75 }}>
      <ambientLight />
      <directionalLight position={[5, 5, 5]} />
      <Suspense fallback={null}>
        <Controller />
      </Suspense>
      <OrbitControls enableZoom={false} />
    </Canvas>
  );
};

export default ControllerModel;
