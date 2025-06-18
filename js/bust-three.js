// Quitar imports tipo module y usar THREE global
// import * as THREE from 'https://cdn.jsdelivr.net/npm/three/build/three.module.js';
// import { GLTFLoader } from 'https://cdn.jsdelivr.net/npm/three/examples/jsm/loaders/GLTFLoader.js';

// Cargar GLTFLoader desde CDN UMD
function loadGLTFLoader(callback) {
  const script = document.createElement('script');
  script.src = 'https://cdn.jsdelivr.net/npm/three@0.177.0/examples/js/loaders/GLTFLoader.min.js';
  script.onload = callback;
  document.head.appendChild(script);
}

console.log('bust-three.js cargado sin módulos');

// Inicializar escena, cámara y renderizador
let scene, camera, renderer, model;

function initThreeJS() {
  const container = document.getElementById('threejs-bust');
  if (!container) {
    console.error('No existe #threejs-bust');
    return;
  }

  

  // Cargar GLTFLoader y luego el modelo
  loadGLTFLoader(function() {
    const loader = new THREE.GLTFLoader();
    const modelUrl = 'assets/models/ImageToStl.com_man_bust.glb';
    loader.load(
      modelUrl,
      function(gltf) {
        model = gltf.scene;
        model.scale.set(1.2, 1.2, 1.2);
        scene.add(model);
        animate();
      },
      function(xhr) { console.log(`Progreso: ${(xhr.loaded/xhr.total*100).toFixed(1)}%`); },
      function(err) { console.error('Error cargando GLTF:', err); }
    );
    scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(35, container.clientWidth / container.clientHeight, 0.1, 100);
  camera.position.set(0, 1.5, 3);

  renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.setSize(container.clientWidth, container.clientHeight);
  renderer.setPixelRatio(window.devicePixelRatio);
  container.appendChild(renderer.domElement);

  const ambient = new THREE.HemisphereLight(0xffffff, 0x444444, 1.2);
  scene.add(ambient);
  const dir = new THREE.DirectionalLight(0xffffff, 0.8);
  dir.position.set(5, 10, 7);
  scene.add(dir);
  });

  

  window.addEventListener('resize', onResize);
}

function onResize() {
  const container = document.getElementById('threejs-bust');
  camera.aspect = container.clientWidth / container.clientHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(container.clientWidth, container.clientHeight);
}

function animate() {
  requestAnimationFrame(animate);
  if (model) model.rotation.y += 0.005;
  renderer.render(scene, camera);
}

// Inicializar three.js cuando el DOM esté listo (ya que el script de three.js está antes en el HTML)
document.addEventListener('DOMContentLoaded', function() {
  initThreeJS();
});