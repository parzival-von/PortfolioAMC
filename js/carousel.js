document.addEventListener("DOMContentLoaded", () => {
    const container = document.querySelector('.container-proyectos');
    const projects = document.querySelectorAll('.proyecto');
    const projectInfo = document.querySelector('.project-info');
    let currentIndex = 0;

    const projectDetails = [
        { 
            title: "Proyecto 1", 
            content: "Contenido del Proyecto 1", 
            software: "Software utilizado: Photoshop, Illustrator", 
            logos: ['img/photoshop.png', 'img/illustrator.png'],
            media: '<img src="img/proyecto1.jpg" alt="Proyecto 1"><video src="video/proyecto1.mp4" controls></video>' 
        },
        { 
            title: "Proyecto 2", 
            content: "Contenido del Proyecto 2", 
            software: "Software utilizado: Blender, Unity", 
            logos: ['img/blender.png', 'img/unity.png'],
            media: '<img src="img/proyecto2.jpg" alt="Proyecto 2"><video src="video/proyecto2.mp4" controls></video>' 
        },
        { 
            title: "Proyecto 3", 
            content: "Contenido del Proyecto 3", 
            software: "Software utilizado: Maya, Unreal Engine", 
            logos: ['img/maya.png', 'img/unreal.png'],
            media: '<img src="img/proyecto3.jpg" alt="Proyecto 3"><video src="video/proyecto3.mp4" controls></video>' 
        },
        { 
            title: "Proyecto 4", 
            content: "Contenido del Proyecto 4", 
            software: "Software utilizado: After Effects, Premiere Pro", 
            logos: ['img/aftereffects.png', 'img/premiere.png'],
            media: '<img src="img/proyecto4.jpg" alt="Proyecto 4"><video src="video/proyecto4.mp4" controls></video>' 
        },
        { 
            title: "Proyecto 5", 
            content: "Contenido del Proyecto 5", 
            software: "Software utilizado: Sketch, Figma", 
            logos: ['img/sketch.png', 'img/figma.png'],
            media: '<img src="img/proyecto5.jpg" alt="Proyecto 5"><video src="video/proyecto5.mp4" controls></video>' 
        }
    ];

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

        const details = projectDetails[currentIndex];
        const logos = details.logos.map(logo => `<img src="${logo}" alt="Logo">`).join('');
        projectInfo.innerHTML = `
            <div class="text-content">
                <h3>${details.title}</h3>
                <p>${details.content}</p>
                <p>${details.software}</p>
                <div class="software-logos">${logos}</div>
            </div>
            <div class="media-content">
                ${details.media}
            </div>
        `;
        projectInfo.style.display = 'flex';
    }

    projects.forEach((project, index) => {
        project.addEventListener('click', () => {
            currentIndex = index;
            updateProjects();
        });
    });

    updateProjects(); // Inicializar el estado del carrusel
});