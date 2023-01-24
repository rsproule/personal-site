import { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, PointMaterial, Points } from "@react-three/drei";
import { random } from "maath";

export const Background = () => {
  return (
    <div
      style={{
        backgroundColor: "#242424",
        height: "100vh",
        width: "100%",
        zIndex: 0,
        position: "fixed",
      }}
    >
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Environment files="adamsbridge.hdr" />
        <Stars />
      </Canvas>
    </div>
  );
};

function Stars(props: any) {
  const ref = useRef();
  const [sphere] = useState(() =>
    random.inSphere(new Float32Array(5000), { radius: 1.5 })
  );
  useFrame((state, delta) => {
    //@ts-ignore
    ref.current.rotation.x -= delta / 10;
    //@ts-ignore
    ref.current.rotation.y -= delta / 15;
  });
  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points
        ref={ref}
        positions={sphere}
        stride={3}
        frustumCulled={false}
        {...props}
      >
        <PointMaterial
          transparent
          color="#ffa0e0"
          size={0.005}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
}
