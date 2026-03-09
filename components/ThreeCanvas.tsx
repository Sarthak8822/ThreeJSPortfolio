"use client";

import { useEffect, useRef } from "react";

export default function ThreeCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // All state lives here — outside async so cleanup always has access
    let animId = -1;
    let stopped = false;

    (async () => {
      const THREE = await import("three");
      if (stopped) return; // component unmounted before THREE loaded

      const isMobile = window.innerWidth < 768;

      // ── Renderer
      const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.setClearColor(0x000000, 0);
      container.appendChild(renderer.domElement);

      // ── Scene & Camera
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(
        60,
        window.innerWidth / window.innerHeight,
        0.1,
        200
      );
      camera.position.set(0, 0, isMobile ? 7 : 6);

      // ── Lights
      scene.add(new THREE.AmbientLight(0xffffff, 0.4));
      const pl1 = new THREE.PointLight(0x00ffe0, 5, 30);
      pl1.position.set(5, 5, 5);
      scene.add(pl1);
      const pl2 = new THREE.PointLight(0xff4d6d, 3, 25);
      pl2.position.set(-5, -4, 3);
      scene.add(pl2);
      const pl3 = new THREE.PointLight(0xffe94d, 2, 20);
      pl3.position.set(0, -5, 7);
      scene.add(pl3);

      // ── Torus Knot — the star of the show
      const knot = new THREE.Mesh(
        new THREE.TorusKnotGeometry(1.2, 0.35, 200, 32, 2, 3),
        new THREE.MeshStandardMaterial({
          color: 0x00ffe0,
          metalness: 0.9,
          roughness: 0.1,
          emissive: new THREE.Color(0x003322),
          emissiveIntensity: 0.4,
        })
      );
      knot.position.set(isMobile ? 1.2 : 3.2, 0, 0);
      scene.add(knot);

      // ── Wireframe Sphere
      const sphere = new THREE.Mesh(
        new THREE.SphereGeometry(isMobile ? 1.0 : 1.6, 20, 20),
        new THREE.MeshBasicMaterial({
          color: 0xff4d6d,
          wireframe: true,
          transparent: true,
          opacity: 0.2,
        })
      );
      sphere.position.set(isMobile ? -2 : -4.5, 2, -2);
      scene.add(sphere);

      // ── Gold Ring
      const ring = new THREE.Mesh(
        new THREE.TorusGeometry(0.7, 0.05, 16, 80),
        new THREE.MeshStandardMaterial({
          color: 0xffe94d,
          metalness: 1,
          roughness: 0.05,
          emissive: new THREE.Color(0x553300),
          emissiveIntensity: 0.5,
        })
      );
      ring.position.set(isMobile ? -1.5 : -2.8, -2, 0);
      scene.add(ring);

      // ── Icosahedron
      const ico = new THREE.Mesh(
        new THREE.IcosahedronGeometry(0.9, 1),
        new THREE.MeshStandardMaterial({
          color: 0xff4d6d,
          metalness: 0.9,
          roughness: 0.1,
          emissive: new THREE.Color(0x330011),
          emissiveIntensity: 0.3,
        })
      );
      ico.position.set(isMobile ? -1 : -3.0, -1.5, 0.5);
      scene.add(ico);

      // ── Octahedron
      const oct = new THREE.Mesh(
        new THREE.OctahedronGeometry(0.55),
        new THREE.MeshStandardMaterial({
          color: 0x00ffe0,
          metalness: 0.95,
          roughness: 0.05,
          emissive: new THREE.Color(0x002211),
          emissiveIntensity: 0.5,
        })
      );
      oct.position.set(isMobile ? 1 : 1.8, -2.5, 0.5);
      scene.add(oct);

      // ── Particles
      const pCount = isMobile ? 600 : 1600;
      const pPositions = new Float32Array(pCount * 3);
      for (let i = 0; i < pCount * 3; i++) {
        pPositions[i] = (Math.random() - 0.5) * 30;
      }
      const pGeo = new THREE.BufferGeometry();
      pGeo.setAttribute("position", new THREE.BufferAttribute(pPositions, 3));
      const particles = new THREE.Points(
        pGeo,
        new THREE.PointsMaterial({
          color: 0x00ffe0,
          size: 0.05,
          transparent: true,
          opacity: 0.5,
          sizeAttenuation: true,
        })
      );
      scene.add(particles);

      // ── Mouse tracking
      let mouseX = 0, mouseY = 0;
      let targetX = 0, targetY = 0;

      const handleMouseMove = (e: MouseEvent) => {
        mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
        mouseY = -(e.clientY / window.innerHeight - 0.5) * 2;
      };
      const handleTouch = (e: TouchEvent) => {
        if (e.touches[0]) {
          mouseX = (e.touches[0].clientX / window.innerWidth - 0.5) * 1.5;
          mouseY = -(e.touches[0].clientY / window.innerHeight - 0.5) * 1.5;
        }
      };
      const handleResize = () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
      };

      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("touchmove", handleTouch, { passive: true });
      window.addEventListener("resize", handleResize);

      // ── Clock for time-based animation
      const clock = new THREE.Clock();

      // ── THE ANIMATION LOOP — this MUST run every frame
      const loop = () => {
        if (stopped) return;
        animId = requestAnimationFrame(loop);

        const t = clock.getElapsedTime();

        // Smooth mouse lerp
        targetX += (mouseX - targetX) * 0.05;
        targetY += (mouseY - targetY) * 0.05;

        // Torus Knot — continuous spin + float
        knot.rotation.x = t * 0.3;
        knot.rotation.y = t * 0.4;
        knot.rotation.z = t * 0.15;
        knot.position.y = Math.sin(t * 0.6) * 0.5;

        // Sphere — slow drift
        sphere.rotation.y = t * 0.2;
        sphere.rotation.x = t * 0.1;
        sphere.position.y = 2 + Math.cos(t * 0.4) * 0.6;

        // Gold Ring — gyroscope spin
        ring.rotation.x = t * 0.5 + targetY * 0.8;
        ring.rotation.y = t * 0.3;
        ring.rotation.z = t * 0.4;
        ring.position.y = -2 + Math.sin(t * 0.8) * 0.5;

        // Icosahedron — tumble
        ico.rotation.x = t * 0.4;
        ico.rotation.y = t * 0.5;
        ico.rotation.z = t * 0.2;
        ico.position.y = -1.5 + Math.cos(t * 0.7) * 0.5;

        // Octahedron — bounce
        oct.rotation.x = t * 0.6;
        oct.rotation.y = t * 0.4;
        oct.position.y = -2.5 + Math.abs(Math.sin(t * 1.0)) * 0.8;

        // Particles — slow cosmic drift
        particles.rotation.y = t * 0.02;
        particles.rotation.x = t * 0.01;

        // Camera parallax with mouse
        camera.position.x += (targetX * 0.5 - camera.position.x) * 0.04;
        camera.position.y += (targetY * 0.3 - camera.position.y) * 0.04;
        camera.lookAt(scene.position);

        renderer.render(scene, camera);
      };

      loop(); // 🚀 Start the loop

      // Store cleanup on container element so the outer cleanup can call it
      (container as any).__threeCleanup = () => {
        window.removeEventListener("mousemove", handleMouseMove);
        window.removeEventListener("touchmove", handleTouch);
        window.removeEventListener("resize", handleResize);
        renderer.dispose();
        if (renderer.domElement.parentNode === container) {
          container.removeChild(renderer.domElement);
        }
      };
    })();

    return () => {
      stopped = true;
      cancelAnimationFrame(animId);
      (container as any).__threeCleanup?.();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-0 pointer-events-none"
      aria-hidden="true"
    />
  );
}
