// Navegación suave al hacer clic en los enlaces
const navLinks = document.querySelectorAll('.nav-links a');

navLinks.forEach(link => {
    link.addEventListener('click', event => {
        event.preventDefault(); // Prevenir el comportamiento por defecto
        const targetId = event.target.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop - 50, // Ajustar para evitar el solapamiento con el header
                behavior: 'smooth' // Animación suave
            });
        }
    });
});

// Validación básica del formulario de contacto
const contactForm = document.querySelector('form');

contactForm.addEventListener('submit', event => {
    event.preventDefault(); // Prevenir el envío del formulario por defecto

    const name = contactForm.querySelector('input[type="text"]').value.trim();
    const email = contactForm.querySelector('input[type="email"]').value.trim();
    const message = contactForm.querySelector('textarea').value.trim();

    if (!name || !email || !message) {
        alert('Por favor, completa todos los campos antes de enviar.');
        return;
    }

    // Simular envío del formulario (integrar esto con un backend más adelante)
    alert('¡Gracias por tu mensaje! Me pondré en contacto contigo pronto.');
    contactForm.reset();
});

// Configuración del círculo y sus elementos
const items = document.querySelectorAll('.circle-item');
const radius = 250; // Ajusta la distancia desde el centro al modelo 3D
let scrollPosition = 0;

// Posicionar los elementos en círculo
function positionItems() {
    const totalItems = items.length;
    items.forEach((item, index) => {
        const angle = (index * (360 / totalItems)) + scrollPosition;
        const x = radius * Math.cos((angle * Math.PI) / 180);
        const y = radius * Math.sin((angle * Math.PI) / 180);
        item.style.transform = `translate(${x}px, ${y}px)`; // Ajusta la posición en relación con el modelo
    });
}

// Escuchar el evento de desplazamiento
window.addEventListener('wheel', (event) => {
    event.preventDefault();
    scrollPosition += event.deltaY * 0.1; // Ajusta la sensibilidad del scroll
    positionItems();
}, { passive: false });

// Inicializa las posiciones al cargar
positionItems();
