particlesJS.load('particles-js', 'particlesjs-config.json', function() {
  console.log('✨ Partículas cargadas correctamente');
});

// Agregar validación para verificar si el contenedor existe
if (!document.getElementById('particles-js')) {
  console.error('El contenedor particles-js no existe en el DOM');
}
