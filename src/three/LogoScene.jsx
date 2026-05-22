import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  Environment
} from "@react-three/drei";

import FloatingRing from "./FloatingRing";

export default function LogoScene() {

  return (
    <Canvas>

      <ambientLight intensity={2} />

      <pointLight
        intensity={50}
        color="#f6b300"
        position={[0,3,3]}
      />

      <FloatingRing />

      <mesh>
        <cylinderGeometry
          args={[1.7,1.7,0.5,64]}
        />

        <meshStandardMaterial
          color="#f6b300"
          emissive="#f6b300"
          emissiveIntensity={1}
        />
      </mesh>

      <Environment preset="city" />

      <OrbitControls
        autoRotate
        enableZoom={false}
      />

    </Canvas>
  );
}