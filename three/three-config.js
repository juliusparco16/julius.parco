function init3DScene() {
    // 1. Scene Setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    
    // 2. Canvas Configuration
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    document.body.prepend(renderer.domElement);
    
    // 3. Geometry
    const geometry = new THREE.IcosahedronGeometry(4, 2);
    const material = new THREE.MeshPhongMaterial({
        color: 0x64ffda,
        wireframe: true,
        transparent: true,
        opacity: 0.15
    });
    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);
    
    // 4. Lighting
    const ambientLight = new THREE.AmbientLight(0x404040);
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
    directionalLight.position.set(10, 10, 10);
    scene.add(ambientLight, directionalLight);
    
    // 5. Camera Position
    camera.position.z = 8;

    // 6. Animation Loop
    function animate() {
        requestAnimationFrame(animate);
        mesh.rotation.x += 0.005;
        mesh.rotation.y += 0.005;
        renderer.render(scene, camera);
    }

    // 7. Responsive Handling
    window.addEventListener('resize', () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    });

    animate();
}

// Initialize when loaded
window.addEventListener('DOMContentLoaded', init3DScene);