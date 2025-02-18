document.addEventListener("DOMContentLoaded", () => {
    const container = document.querySelector('.container-proyectos');
    const projects = document.querySelectorAll('.proyecto');
    let currentIndex = 0;

    function updateProjects() {
        projects.forEach((project, index) => {
            if (index === currentIndex) {
                project.style.opacity = 1;
                project.style.transform = 'scale(1.2)';
            } else {
                project.style.opacity = 0.5;
                project.style.transform = 'scale(1)';
            }
        });
    }

    projects.forEach((project, index) => {
        project.addEventListener('click', () => {
            currentIndex = index;
            updateProjects();
        });
    });

    updateProjects(); // Inicializar el estado del carrusel
});