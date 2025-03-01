function initThreeJS() {
    // Simplified geometry for better performance
    const geometry = new THREE.TetrahedronGeometry(3, 1);
    const material = new THREE.MeshBasicMaterial({
        color: 0x64ffda,
        wireframe: true,
        transparent: true,
        opacity: 0.1
    });
    
    const icosahedron = new THREE.Mesh(geometry, material);
    scene.add(icosahedron);
    
    // Lighting
    const ambientLight = new THREE.AmbientLight(0x404040);
    scene.add(ambientLight);
    
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
    directionalLight.position.set(5, 5, 5);
    scene.add(directionalLight);
    
    camera.position.z = 5;

    // Animation
    function animate() {
        requestAnimationFrame(animate);
        icosahedron.rotation.x += 0.005;
        icosahedron.rotation.y += 0.005;
        renderer.render(scene, camera);
    }

    // Resize Handler
    window.addEventListener('resize', () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    });

    renderer.setSize(window.innerWidth, window.innerHeight);
    animate();
}

// Initialize when Three.js is loaded
window.onload = initThreeJS;
