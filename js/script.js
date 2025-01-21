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
