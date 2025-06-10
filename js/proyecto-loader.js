document.addEventListener("DOMContentLoaded", () => {
  const lista = document.getElementById("lista-proyectos");
  const info = document.getElementById("project-info");
  let proyectoSeleccionado = 0; // Nuevo: índice del proyecto seleccionado

  function mostrarProyectos(tema, idxSeleccionado = 0) {
    document.querySelectorAll(".Hotspot").forEach(btn => {
      if (btn.dataset.tema === tema) {
        btn.classList.add("active");
      } else {
        btn.classList.remove("active");
      }
    });

    const proyectos = proyectosPorTema[tema];
    lista.innerHTML = "";
    info.style.display = "none";

    proyectos.forEach((proy, i) => {
      if (!proy) return; // Previene errores si el proyecto es undefined
      const div = document.createElement("div");
      div.className = "proyecto";
      div.textContent = i + 1;
      div.addEventListener("click", (e) => {
        e.stopPropagation();
        if (!proy) return;
        mostrarInfo(proy);
        document.querySelectorAll('.proyecto').forEach(p => p.classList.remove('proyecto-activo'));
        div.classList.add('proyecto-activo');
        proyectoSeleccionado = i;
      });
      lista.appendChild(div);
    });

    // Mostrar el proyecto seleccionado (por defecto el primero)
    if (proyectos.length > 0 && proyectos[idxSeleccionado]) {
      setTimeout(() => {
        const activos = document.querySelectorAll('.proyecto');
        if (activos[idxSeleccionado]) activos[idxSeleccionado].classList.add('proyecto-activo');
      }, 0);
      mostrarInfo(proyectos[idxSeleccionado]);
    }
  }

  function mostrarInfo(proy) {
    if (!proy || !proy.programas || !proy.media || !proy.media.imagenes) {
      info.innerHTML = '<div class="text-content">No hay información disponible para este proyecto.</div>';
      info.style.display = "flex";
      return;
    }
    // Mapeo de programas a iconos FontAwesome/Iconify
    const iconos = {
      'HTML5': '<i class="fab fa-html5"></i>',
      'CSS3': '<i class="fab fa-css3-alt"></i>',
      'JavaScript': '<i class="fab fa-js"></i>',
      'TypeScript': '<i class="fas fa-code"></i>',
      'Bootstrap': '<i class="fab fa-bootstrap"></i>',
      'TailwindCSS': '<i class="fab fa-tailwind"></i>',
      'Vite': '<i class="fas fa-bolt"></i>',
      'Vue': '<i class="fab fa-vuejs"></i>',
      'Vue.js': '<i class="fab fa-vuejs"></i>',
      'WordPress': '<i class="fab fa-wordpress"></i>',
      'PrestaShop': '<i class="fas fa-shopping-cart"></i>',
      'WooCommerce': '<i class="fas fa-shopping-bag"></i>',
      'Git': '<i class="fab fa-git-alt"></i>',
      'Unity': '<i class="fab fa-unity"></i>',
      'C#': '<i class="fas fa-code"></i>',
      'XR Interaction Toolkit': '<i class="fas fa-vr-cardboard"></i>',
      'Vuforia': '<i class="fas fa-atom"></i>',
      'Arduino': '<i class="fas fa-microchip"></i>',
      'Figma': '<i class="fab fa-figma"></i>',
      'Sketch': '<i class="fas fa-pencil-ruler"></i>',
      'Diseño responsivo': '<i class="fas fa-mobile-alt"></i>',
      'Jerarquía visual': '<i class="fas fa-eye"></i>',
      'Accesibilidad': '<i class="fas fa-universal-access"></i>',
      'Blender': '<i class="fab fa-blender-phone"></i>',
      'Maya': '<span class="iconify" data-icon="simple-icons:autodesk" data-inline="false"></span>',
      'ZBrush': '<i class="fas fa-sculpture"></i>',
      'Rhinoceros': '<span class="iconify" data-icon="mdi:rhino" data-inline="false"></span>',
      'Grasshopper': '<span class="iconify" data-icon="simple-icons:grasshopper" data-inline="false"></span>',
      'Fusion 360': '<span class="iconify" data-icon="simple-icons:autodesk" data-inline="false"></span>',
      'Onshape': '<i class="fas fa-cube"></i>',
      'AutoCAD': '<span class="iconify" data-icon="simple-icons:autodesk" data-inline="false"></span>',
      'Impresión 3D': '<i class="fas fa-print"></i>',
      'Lightroom': '<span class="iconify" data-icon="simple-icons:adobelightroom" data-inline="false"></span>',
      'Photoshop': '<span class="iconify" data-icon="simple-icons:adobephotoshop" data-inline="false"></span>'
    };
    info.innerHTML = `
      <div class="text-content">
        <h3>${proy.titulo}</h3>
        <p>${proy.descripcion}</p>
        <h5>Programas utilizados:</h5>
        <div class="skill-list d-flex flex-wrap gap-2">
          ${proy.programas.map(p => `<span class="badge-tech">${iconos[p] || ''} ${p}</span>`).join(' ')}
        </div>
        <a href="${proy.enlace}" target="_blank" class="btn btn-primary mt-2">Ver Proyecto</a>
      </div>
      <div class="media-content">
        <div class="mb-2">
          ${proy.media.imagenes.map(img => `<img src="${img}" class="img-fluid rounded mb-2" alt="">`).join("")}
        </div>
        ${proy.media.video ? `<video controls width="100%" class="rounded">
          <source src="${proy.media.video}" type="video/mp4">
          Tu navegador no soporta videos HTML5.
        </video>` : ''}
      </div>
    `;
    info.style.display = "flex";
  }

  document.querySelectorAll(".Hotspot").forEach(btn =>
    btn.addEventListener("click", () => {
      proyectoSeleccionado = 0;
      mostrarProyectos(btn.dataset.tema, 0);
    })
  );

  // --- NUEVO: Detectar parámetro tema en la URL ---
  const params = new URLSearchParams(window.location.search);
  const temaURL = params.get("tema");
  if (temaURL && ["interactivos","web","fabricacion","fotografia"].includes(temaURL)) {
    mostrarProyectos(temaURL, 0);
  } else {
    mostrarProyectos("interactivos", 0); // Solo por omisión si no hay parámetro
  }
});

// CSS sugerido para resaltar el proyecto activo:
// .proyecto-activo { background: var(--color-primary); color: #fff; box-shadow: 0 0 0 2px #2272ff; }
