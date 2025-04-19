import React, { Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';

const Controller = () => {
  const modelRef = useRef();
  const { scene } = useGLTF('/models/playstation/scene.gltf'); // adjust path if needed

  // Auto-rotate the model
  useFrame(() => {
    if (modelRef.current) {
      modelRef.current.rotation.y += 0.004;
    }
  });

  return <primitive ref={modelRef} object={scene} scale={13} />;
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
