import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';


const WhyUsSVG = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    // Create a scene
    const scene = new THREE.Scene();

    // Create a camera
    const camera = new THREE.PerspectiveCamera(45, containerRef.current.clientWidth / containerRef.current.clientHeight, 0.1, 2000);

    // Create a renderer
    const renderer = new THREE.WebGLRenderer({ alpha: true });

    renderer.setClearAlpha(0);
    renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
    //renderer.setPixelRatio(window.devicePixelRatio);

    // Append the renderer's DOM element to the container
    containerRef.current.appendChild(renderer.domElement);

    // Load the texture
    const texture = new THREE.TextureLoader().load('line_earth_2.png');

    // Create a sphere
    const geometry = new THREE.SphereGeometry(containerRef.current.clientHeight*0.6, 200, 200);
    const material = new THREE.MeshStandardMaterial({ map: texture, transparent: true });
    const sphere = new THREE.Mesh(geometry, material);
    scene.add(sphere);

    // Create an origin mesh
    const originGeometry = new THREE.SphereGeometry(1, 1, 1);
    const originMesh = new THREE.Mesh(originGeometry, material);
    scene.add(originMesh);

    // Add lights
    const light = new THREE.AmbientLight(0x404040, 0.7);
    scene.add(light);

    const pointLight = new THREE.PointLight(0xffffff, 1.5, 200, 0);
    pointLight.position.set(800, 800, 800);
    originMesh.add(pointLight);

    // Set camera position
    camera.position.z = 1200;

    // Animation function
    function animate() {
      requestAnimationFrame(animate);
      sphere.rotation.y += 0.01;
      renderer.render(scene, camera);
    }
    animate();

    return () => {
      // Clean up when the component unmounts
      containerRef.current.removeChild(renderer.domElement);
      renderer.dispose();
    };

  }, []);

  return (
    <div ref={containerRef} style={{height: '100%'}}>
      {/* The Three.js scene will be rendered inside this div */}
    </div>
  );
};

export default WhyUsSVG;