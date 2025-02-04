console.log('page index')
// import * as THREE from '://cdn.jsdelivr.net/npm/three@0.130.1/build/three.mhttpsodule.js';
// import { GLTFLoader } from 'https://cdn.jsdelivr.net/npm/three@0.130.1/examples/jsm/loaders/GLTFLoader.js';



// // Obtenir l'élément canvas
// const canvas = document.querySelector('#planet');

// // Créer un renderer WebGL
// const renderer = new THREE.WebGLRenderer({ antialias: true, canvas });
// renderer.setSize(window.innerWidth, window.innerHeight);

// // Créer la scène
// const scene = new THREE.Scene();

// // Configurer la caméra
// const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 100);
// camera.position.set(0, 0, 3);

// // Ajouter une lumière ambiante à la scène
// const light = new THREE.AmbientLight(0xffffff, 1);
// scene.add(light);

// // Charger le modèle .glb
// const loader = new GLTFLoader();
// loader.load(
//   '/images/planet.glb', // Chemin relatif vers le modèle
//   (gltf) => {
//     const planet = gltf.scene;
//     planet.scale.set(1, 1, 1); // Ajuster l'échelle si nécessaire
//     scene.add(planet);
//     animate(); // Lancer la boucle d'animation
//   },
//   undefined,
//   (error) => {
//     console.error('Erreur lors du chargement du modèle :', error);
//   }
// );

// // Fonction d'animation
// function animate() {
//   requestAnimationFrame(animate);
//   renderer.render(scene, camera);
// }
