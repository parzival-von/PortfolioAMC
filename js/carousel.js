document.addEventListener("DOMContentLoaded", () => {
    const container = document.querySelector('.container-proyectos');
    const projects = document.querySelectorAll('.proyecto');
    const projectInfo = document.querySelector('.project-info');
    const proyectosSection = document.querySelector('.proyectos-section');
    let currentIndex = 0;

    if (!projectInfo || !proyectosSection) {
        console.error('Elementos necesarios para el carrusel no encontrados');
        return;
    }

    const projectDetails = [
        { 
            title: "OrbiTails", 
            content: "OrbiTails es un videojuego desarrollado como parte de nuestro trabajo final en Integración de Objetos Digitales. En este divertido título, tres astronautas animales –un cerdo, un gato y un conejo– se estrellan en un planeta desconocido y deben competir para recolectar materiales y construir sus bases antes que los demás. Durante la aventura, cada personaje enfrenta emocionantes desafíos, desde esquivar meteoritos hasta evitar a un travieso alienígena decidido a sabotear su progreso. La combinación de diseño atractivo, narrativa creativa y mecánicas interactivas hace de OrbiTails una experiencia entretenida y memorable. Este proyecto muestra nuestras capacidades técnicas en diseño de videojuegos, programación interactiva y narrativa visual, enfatizando nuestro enfoque en la creación de experiencias digitales únicas y cautivadoras.", 
            software: "Mi rol y contribuciones:En este proyecto, me encargué de modelar, texturizar y animar a mi personaje, Piggy, un cerdo espacial que sufrió un accidente con su nave. Integré a Piggy en Unity, creé su avatar y configuré el animator con todas sus animaciones. Además, modelé y texturicé los materiales que los personajes recolectan en el juego (madera, engranajes y rubíes) y diseñé las estalagmitas y su textura de suelo con lava. También trabajé en el diseño de materiales y la interfaz de usuario en Illustrator, y realicé ajustes en Unity para asegurarme de que todo se viera y funcionara correctamente.",
            logos: ['img/logos/photoshop.png', 'img/logos/illustrator.png'],
            media: '<video src="video/proyecto1.mp4" controls></video>',
            backgroundImage: 'img/proyecto1.webp'
        },
        { 
            title: "Proyecto 2", 
            content: "Contenido del Proyecto 2", 
            software: "Software utilizado: Blender, Unity", 
            logos: ['img/logos/blender.png', 'img/logos/unity.png'],
            media: '<video src="video/proyecto2.mp4" controls></video>',
            backgroundImage: 'img/proyecto2.jpg'
        },
        { 
            title: "Proyecto 3", 
            content: "Contenido del Proyecto 3", 
            software: "Software utilizado: Maya, Unreal Engine", 
            logos: ['img/logos/maya.png', 'img/logos/unreal.png'],
            media: '<img src="img/proyecto3.jpg" alt="Proyecto 3"><video src="video/proyecto3.mp4" controls></video>',
            backgroundImage: 'img/proyecto3.jpg'
        },
        { 
            title: "Proyecto 4", 
            content: "Contenido del Proyecto 4", 
            software: "Software utilizado: After Effects, Premiere Pro", 
            logos: ['img/logos/aftereffects.png', 'img/logos/premiere.png'],
            media: '<img src="img/proyecto4.jpg" alt="Proyecto 4"><video src="video/proyecto4.mp4" controls></video>',
            backgroundImage: 'img/proyecto4.jpg'
        },
        { 
            title: "Proyecto 5", 
            content: "Contenido del Proyecto 5", 
            software: "Software utilizado: Sketch, Figma", 
            logos: ['img/logos/sketch.png', 'img/logos/figma.png'],
            media: '<img src="img/proyecto5.jpg" alt="Proyecto 5"><video src="video/proyecto5.mp4" controls></video>',
            backgroundImage: 'img/proyecto5.jpg'
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
        proyectosSection.style.backgroundImage = `url(${details.backgroundImage})`;
        proyectosSection.style.backgroundSize = 'cover';
        proyectosSection.style.backgroundPosition = 'center';
    }

    projects.forEach((project, index) => {
        project.addEventListener('click', () => {
            currentIndex = index;
            updateProjects();
        });
    });

    updateProjects(); // Inicializar el estado del carrusel
});