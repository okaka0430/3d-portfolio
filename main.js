
function openModal(modelPath) {
  const modal = document.getElementById('modal');
  const container = document.getElementById('model-viewer');
  modal.style.display = 'flex';

  const width = container.clientWidth;
  const height = 500;

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
  camera.position.z = 2;

  const renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(width, height);
  container.innerHTML = '';
  container.appendChild(renderer.domElement);

  const light = new THREE.HemisphereLight(0xffffff, 0x444444, 1);
  scene.add(light);

  const loader = new THREE.GLTFLoader();
  loader.load(modelPath, function (gltf) {
    const model = gltf.scene;
    scene.add(model);

    function animate() {
      requestAnimationFrame(animate);
      model.rotation.y += 0.01;
      renderer.render(scene, camera);
    }
    animate();
  });
}

function closeModal() {
  document.getElementById('modal').style.display = 'none';
  document.getElementById('model-viewer').innerHTML = '';
}
