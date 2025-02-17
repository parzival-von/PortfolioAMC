document.addEventListener("DOMContentLoaded", () => {
    const container = document.querySelector('.container-proyectos');
    const projects = document.querySelectorAll('.proyecto');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const totalProjects = projects.length;
    let angle = 0;
    const angleStep = 360 / totalProjects;

    function updateProjects() {
        projects.forEach((project, index) => {
            const projectAngle = angle + index * angleStep;
            project.style.transform = `rotateY(${projectAngle}deg) translateZ(500px)`;
            project.style.opacity = index === 0 ? 1 : 0.5;
        });
    }

    nextBtn.addEventListener('click', () => {
        angle -= angleStep;
        updateProjects();
    });

    prevBtn.addEventListener('click', () => {
        angle += angleStep;
        updateProjects();
    });

    updateProjects(); // Inicializar el estado del carrusel
});