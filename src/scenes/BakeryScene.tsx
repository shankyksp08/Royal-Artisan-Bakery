import { useEffect, useMemo, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { isSoftwareWebGL } from '../hooks/useEnv';

function createSoftParticleTexture() {
  const canvas = document.createElement('canvas');
  canvas.width = 64;
  canvas.height = 64;
  const ctx = canvas.getContext('2d');
  if (ctx) {
    const grad = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
    grad.addColorStop(0, 'rgba(243, 212, 168, 1)');
    grad.addColorStop(0.35, 'rgba(183, 123, 67, 0.55)');
    grad.addColorStop(1, 'rgba(183, 123, 67, 0)');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, 64, 64);
  }
  const texture = new THREE.CanvasTexture(canvas);
  texture.needsUpdate = true;
  return texture;
}

function GoldenDust({
  pointer,
  mobile,
  reduced,
}: {
  pointer: React.MutableRefObject<{ x: number; y: number }>;
  mobile: boolean;
  reduced: boolean;
}) {
  const groupRef = useRef<THREE.Group>(null);
  const count = mobile ? 38 : 72;

  const { geometry, sprite } = useMemo(() => {
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      // Spread subtly across the hero viewport, slightly denser toward the pastry highlight on the right
      positions[i * 3] = (Math.random() - 0.35) * 11;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 7;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 4;
    }
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    return { geometry: geo, sprite: createSoftParticleTexture() };
  }, [count]);

  useEffect(() => {
    return () => {
      geometry.dispose();
      sprite.dispose();
    };
  }, [geometry, sprite]);

  useFrame((state, delta) => {
    if (!groupRef.current || reduced) return;
    const t = state.clock.elapsedTime;
    groupRef.current.position.x = THREE.MathUtils.lerp(
      groupRef.current.position.x,
      pointer.current.x * 0.25,
      delta * 1.5,
    );
    groupRef.current.position.y = THREE.MathUtils.lerp(
      groupRef.current.position.y,
      -pointer.current.y * 0.18 + Math.sin(t * 0.35) * 0.08,
      delta * 1.5,
    );
    groupRef.current.rotation.y = Math.sin(t * 0.08) * 0.08;
  });

  return (
    <group ref={groupRef}>
      <points geometry={geometry}>
        <pointsMaterial
          map={sprite}
          size={mobile ? 0.16 : 0.14}
          transparent
          opacity={0.45}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
          sizeAttenuation
        />
      </points>
    </group>
  );
}

export default function BakeryScene({
  mobile,
  reduced,
}: {
  mobile: boolean;
  reduced: boolean;
}) {
  const pointer = useRef({ x: 0, y: 0 });
  const softwareGl = useMemo(() => isSoftwareWebGL(), []);

  useEffect(() => {
    const on = (e: PointerEvent) => {
      pointer.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      pointer.current.y = (e.clientY / window.innerHeight) * 2 - 1;
    };
    window.addEventListener('pointermove', on, { passive: true });
    return () => window.removeEventListener('pointermove', on);
  }, []);

  return (
    <Canvas
      dpr={softwareGl ? 1 : mobile ? [1, 1.5] : [1, 2]}
      camera={{ position: [0, 0, 7.5], fov: 38 }}
      gl={{ alpha: true, antialias: !mobile && !softwareGl, powerPreference: 'high-performance' }}
      frameloop={reduced ? 'demand' : 'always'}
      aria-hidden="true"
    >
      <GoldenDust pointer={pointer} mobile={mobile} reduced={reduced} />
    </Canvas>
  );
}
