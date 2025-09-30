import React, { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Sphere, Text } from "@react-three/drei";
import * as THREE from "three";

// Componente de partículas de código
const CodeParticles: React.FC = () => {
  const particlesRef = useRef<THREE.Points>(null);
  const count = 100;

  const particles = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 10;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 10;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 10;

      // Cores gradiente roxo/rosa/azul
      const colorChoice = Math.random();
      if (colorChoice < 0.33) {
        colors.set([0.54, 0.36, 0.96], i * 3); // roxo
      } else if (colorChoice < 0.66) {
        colors.set([0.96, 0.25, 0.37], i * 3); // rosa
      } else {
        colors.set([0.02, 0.71, 0.83], i * 3); // azul
      }
    }

    return { positions, colors };
  }, [count]);

  useFrame(({ clock }) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y = clock.getElapsedTime() * 0.05;
      particlesRef.current.rotation.x = clock.getElapsedTime() * 0.02;
    }
  });

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[particles.positions, 3]}
        />
        <bufferAttribute
          attach="attributes-color"
          args={[particles.colors, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.05}
        vertexColors
        transparent
        opacity={0.6}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
};

// Esfera central holográfica
const HolographicSphere: React.FC = () => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = clock.getElapsedTime() * 0.2;
      meshRef.current.rotation.y = clock.getElapsedTime() * 0.3;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
      <Sphere ref={meshRef} args={[1.2, 64, 64]}>
        <MeshDistortMaterial
          color="#8b5cf6"
          distort={0.4}
          speed={2}
          roughness={0}
          metalness={1}
          transparent
          opacity={0.8}
          wireframe={false}
        />
      </Sphere>

      {/* Anel interno */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[1.3, 0.02, 16, 100]} />
        <meshBasicMaterial color="#ec4899" transparent opacity={0.6} />
      </mesh>

      {/* Anel externo */}
      <mesh rotation={[0, Math.PI / 4, 0]}>
        <torusGeometry args={[1.5, 0.02, 16, 100]} />
        <meshBasicMaterial color="#06b6d4" transparent opacity={0.6} />
      </mesh>
    </Float>
  );
};

// Símbolos de código flutuantes
const FloatingCodeSymbol: React.FC<{
  position: [number, number, number];
  symbol: string;
  color: string;
  delay: number;
}> = ({ position, symbol, color, delay }) => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    if (meshRef.current) {
      meshRef.current.position.y =
        position[1] + Math.sin(clock.getElapsedTime() + delay) * 0.3;
      meshRef.current.rotation.z = clock.getElapsedTime() * 0.5;
    }
  });

  return (
    <group ref={meshRef} position={position}>
      <boxGeometry args={[0.3, 0.3, 0.3]} />
      <meshStandardMaterial
        color={color}
        emissive={color}
        emissiveIntensity={0.5}
        metalness={0.8}
        roughness={0.2}
      />
      <Text
        position={[0, 0, 0.4]}
        fontSize={0.2}
        color={color}
        anchorX="center"
        anchorY="middle"
      >
        {symbol}
      </Text>
    </group>
  );
};

// Linhas conectoras animadas
const ConnectingLines: React.FC = () => {
  const lineRef = useRef<THREE.Line>(null);

  useFrame(({ clock }) => {
    if (lineRef.current) {
      lineRef.current.rotation.y = clock.getElapsedTime() * 0.1;
    }
  });

  const points = useMemo(() => {
    const p = [];
    for (let i = 0; i < 50; i++) {
      const angle = (i / 50) * Math.PI * 2;
      const radius = 2 + Math.sin(i * 0.5) * 0.5;
      p.push(
        new THREE.Vector3(
          Math.cos(angle) * radius,
          Math.sin(i * 0.3) * 0.5,
          Math.sin(angle) * radius
        )
      );
    }
    return p;
  }, []);

  const lineGeometry = new THREE.BufferGeometry().setFromPoints(points);

  return (
<primitive object={new THREE.Line(lineGeometry, new THREE.LineBasicMaterial({ color: "#8b5cf6", transparent: true, opacity: 0.3 }))} />
  );
};

const HeroScene: React.FC = () => {
  return (
    <div className="w-full h-full">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 60 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
      >
        {/* Iluminação aprimorada */}
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={1} color="#ffffff" />
        <pointLight position={[-5, -5, -5]} intensity={0.5} color="#8b5cf6" />
        <pointLight position={[5, 5, 5]} intensity={0.5} color="#06b6d4" />

        {/* Fog para profundidade */}
        <fog attach="fog" args={["#1e1b4b", 5, 15]} />

        {/* Esfera central holográfica */}
        <HolographicSphere />

        {/* Partículas de código */}
        <CodeParticles />

        {/* Linhas conectoras */}
        <ConnectingLines />

        {/* Símbolos de código flutuantes */}
        <FloatingCodeSymbol position={[2.5, 0, 0]} symbol="<>" color="#06b6d4" delay={0} />
        <FloatingCodeSymbol position={[-2.5, 1, 0]} symbol="{}" color="#ec4899" delay={1} />
        <FloatingCodeSymbol position={[0, 2, -1]} symbol="[]" color="#8b5cf6" delay={2} />
        <FloatingCodeSymbol position={[2, -1.5, 0]} symbol="()" color="#10b981" delay={3} />
        <FloatingCodeSymbol position={[-2, -1, 1]} symbol="//" color="#f59e0b" delay={4} />
      </Canvas>
    </div>
  );
};

export default HeroScene;
