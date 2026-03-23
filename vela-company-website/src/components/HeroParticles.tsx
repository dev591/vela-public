import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const HeroParticles: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    // Scene Setup
    const scene = new THREE.Scene();
    
    // Camera Setup
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 10;

    // Renderer Setup
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    mountRef.current.appendChild(renderer.domElement);

    // Particles Data
    const N = 150;
    const positions = new Float32Array(N * 3);
    const velocities: { x: number; y: number; z: number; offset: number }[] = [];

    // Ethereal Theme Colors
    const particleColor = new THREE.Color('#00F0FF');
    const lineColor = new THREE.Color('#0EA5E9');

    for (let i = 0; i < N * 3; i += 3) {
      positions[i] = (Math.random() - 0.5) * 16;     // x
      positions[i + 1] = (Math.random() - 0.5) * 16; // y
      positions[i + 2] = (Math.random() - 0.5) * 16; // z

      velocities.push({
        x: (Math.random() - 0.5) * 0.01,
        y: (Math.random() - 0.5) * 0.01,
        z: (Math.random() - 0.5) * 0.01,
        offset: Math.random() * Math.PI * 2
      });
    }

    // Geometry & Materials
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    const material = new THREE.PointsMaterial({
      color: particleColor,
      size: 0.04,
      transparent: true,
      opacity: 0.5,
      blending: THREE.AdditiveBlending
    });

    const particles = new THREE.Points(geometry, material);
    scene.add(particles);

    // Lines
    const linesMaterial = new THREE.LineBasicMaterial({
      color: lineColor,
      transparent: true,
      opacity: 0.15,
      blending: THREE.AdditiveBlending
    });
    
    const linesGeometry = new THREE.BufferGeometry();
    const linePositions = new Float32Array(N * N * 3);
    linesGeometry.setAttribute('position', new THREE.BufferAttribute(linePositions, 3));
    const linesMesh = new THREE.LineSegments(linesGeometry, linesMaterial);
    scene.add(linesMesh);

    // Mouse Interaction
    let mouseX = 0;
    let mouseY = 0;
    const handleMouseMove = (event: MouseEvent) => {
      mouseX = (event.clientX / window.innerWidth) * 2 - 1;
      mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener('mousemove', handleMouseMove);

    // Animation Loop
    let time = 0;
    const animate = () => {
      requestAnimationFrame(animate);
      time += 0.01;

      particles.rotation.y += 0.0004;
      linesMesh.rotation.y += 0.0004;

      const posAttribute = geometry.attributes.position;
      const array = posAttribute.array as Float32Array;

      let lineIndex = 0;

      for (let i = 0; i < N; i++) {
        const i3 = i * 3;
        const v = velocities[i];
        
        // Float effect via sin waves
        array[i3 + 1] += Math.sin(time + v.offset) * 0.002;
        
        // Bounds checking
        if (array[i3] > 8 || array[i3] < -8) v.x *= -1;
        if (array[i3 + 1] > 8 || array[i3 + 1] < -8) v.y *= -1;
        if (array[i3 + 2] > 8 || array[i3 + 2] < -8) v.z *= -1;

        array[i3] += v.x;
        array[i3 + 1] += v.y;
        array[i3 + 2] += v.z;

        // Form lines if distance < 2.5
        for (let j = i + 1; j < N; j++) {
          const j3 = j * 3;
          const dx = array[i3] - array[j3];
          const dy = array[i3 + 1] - array[j3 + 1];
          const dz = array[i3 + 2] - array[j3 + 2];
          const distSq = dx*dx + dy*dy + dz*dz;

          if (distSq < 6.25) { // 2.5^2
            linePositions[lineIndex++] = array[i3];
            linePositions[lineIndex++] = array[i3 + 1];
            linePositions[lineIndex++] = array[i3 + 2];
            linePositions[lineIndex++] = array[j3];
            linePositions[lineIndex++] = array[j3 + 1];
            linePositions[lineIndex++] = array[j3 + 2];
          }
        }
      }

      posAttribute.needsUpdate = true;
      linesGeometry.setDrawRange(0, lineIndex / 3);
      linesGeometry.attributes.position.needsUpdate = true;

      // Parallax Camera (Lerp)
      camera.position.x += (mouseX * 0.6 - camera.position.x) * 0.05;
      camera.position.y += (mouseY * 0.4 - camera.position.y) * 0.05;
      camera.lookAt(scene.position);

      renderer.render(scene, camera);
    };

    animate();

    // Resize Handler
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      if (mountRef.current) {
        mountRef.current.removeChild(renderer.domElement);
      }
      geometry.dispose();
      material.dispose();
      linesGeometry.dispose();
      linesMaterial.dispose();
      renderer.dispose();
    };
  }, []);

  return <div ref={mountRef} style={{ position: 'absolute', inset: 0, zIndex: 0 }} />;
};

export default HeroParticles;
