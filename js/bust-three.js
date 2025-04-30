console.log('bust-three.js cargado como módulo');
import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.152.2/build/three.module.js';
import { GLTFLoader } from 'https://cdn.jsdelivr.net/npm/three@0.152.2/examples/jsm/loaders/GLTFLoader.js';

let scene, camera, renderer, model;

function init() {
  console.log('DOMContentLoaded — arrancando Three.js');
  const container = document.getElementById('threejs-bust');
  console.log('Contenedor:', container, 'size:', container.clientWidth, container.clientHeight);
  if (!container) return console.error('No existe #threejs-bust');

  // Escena y cámara  
  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(35, container.clientWidth / container.clientHeight, 0.1, 100);
  camera.position.set(0, 1.5, 3);

  // Renderizador  
  renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.setSize(container.clientWidth, container.clientHeight);
  renderer.setPixelRatio(window.devicePixelRatio);
  container.appendChild(renderer.domElement);

  // Iluminación  
  const ambient = new THREE.HemisphereLight(0xffffff, 0x444444, 1.2);
  scene.add(ambient);
  const dir = new THREE.DirectionalLight(0xffffff, 0.8);
  dir.position.set(5, 10, 7);
  scene.add(dir);

  // Resuelve la URL del modelo relativo al módulo  
  const modelUrl = new URL('../assets/models/ImageToStl.com_man_bust.glb', import.meta.url).href;
  console.log('Cargando GLB desde:', modelUrl);

  const loader = new GLTFLoader();
  loader.load(
    modelUrl,
    gltf => {
      console.log('GLTF cargado:', gltf);
      model = gltf.scene;
      model.scale.set(1.2, 1.2, 1.2);
      scene.add(model);
      animate();
    },
    xhr => console.log(`Progreso: ${(xhr.loaded/xhr.total*100).toFixed(1)}%`),
    err => console.error('Error cargando GLTF:', err)
  );

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

document.addEventListener('DOMContentLoaded', init);