const particlesContainer = document.getElementById('particles-js');
if (particlesContainer) {
  particlesJS.load('particles-js', 'particlesjs-config.json', function() {
    console.log('✨ Partículas cargadas correctamente');
  });
} else {
  console.warn('El contenedor particles-js no está presente en este archivo HTML');
}
