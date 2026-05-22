import { Float } from "@react-three/drei";

export default function FloatingRing() {
  return (
    <Float
      speed={2}
      rotationIntensity={2}
      floatIntensity={2}
    >
      <mesh rotation={[1.5,0,0]}>
        <torusGeometry args={[2.2,0.08,32,200]} />
        <meshStandardMaterial
          emissive="#f6b300"
          emissiveIntensity={3}
          color="#f6b300"
        />
      </mesh>
    </Float>
  );
}