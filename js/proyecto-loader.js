console.log('[DEBUG] proyecto-loader.js: script ejecutándose');

// Elimina el bloque DOMContentLoaded y ejecuta el código principal directamente
let proyectoSeleccionado = 0; // Nuevo: índice del proyecto seleccionado

window.mostrarProyectos = mostrarProyectos;

function mostrarProyectos(tema, idxSeleccionado = 0) {
  const lista = document.getElementById("lista-proyectos");
  const info = document.getElementById("project-info");

  document.querySelectorAll(".Hotspot").forEach(btn => {
    if (btn.dataset.tema === tema) {
      btn.classList.add("active");
    } else {
      btn.classList.remove("active");
    }
  });

  const proyectos = window.proyectosPorTema ? window.proyectosPorTema[tema] : undefined;
  lista.innerHTML = "";
  info.style.display = "none";

  if (!proyectos || proyectos.length === 0) {
    return;
  }

  proyectos.forEach((proy, i) => {
    if (!proy) return;
    const div = document.createElement("div");
    div.className = "proyecto";
    // Solo número centrado SIEMPRE, nunca imagen
    const num = document.createElement('span');
    num.className = 'proyecto-numero';
    num.textContent = i + 1;
    div.appendChild(num);
    div.title = proy.titulo || '';
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
  const info = document.getElementById("project-info");
  // Feed Instagram especial
  if (proy.instagramFeed) {
    info.innerHTML = `
      <div class="text-content">
        <h3>${proy.titulo}</h3>
        <p>${proy.descripcion}</p>
        <a href="${proy.enlace}" target="_blank" class="btn btn-primary mt-2">Ver en Instagram</a>
      </div>
      <div class="media-content d-flex justify-content-center align-items-center">
        <!-- Instagram embed: usuario real -->
        <iframe src="https://www.instagram.com/ottermarc/embed" width="400" height="480" frameborder="0" scrolling="no" allowtransparency="true" style="border-radius:16px; background:#fff;"></iframe>
      </div>
    `;
    info.style.display = "flex";
    return;
  }
  // Iframe especial para galactic-assault
  if (proy.titulo && proy.titulo.toLowerCase().includes('galactic assault')) {
    // Mapeo de programas a iconos FontAwesome/Iconify
    const iconos = {
      'HTML5': '<i class="fab fa-html5"></i>',
      'CSS3': '<i class="fab fa-css3-alt"></i>',
      'JavaScript': '<i class="fab fa-js"></i>',
      'Vercel': '<span class="iconify" data-icon="simple-icons:vercel"></span>',
      'ChatGPT': '<span class="iconify" data-icon="simple-icons:openai"></span>',
      'DALL·E': '<span class="iconify" data-icon="simple-icons:openai"></span>',
      'AIVA': '<span class="iconify" data-icon="simple-icons:aiva"></span>',
      'Ideogram.ai': '<span class="iconify" data-icon="simple-icons:ideogram"></span>',
      'MyEdit': '<span class="iconify" data-icon="simple-icons:myedit"></span>',
    };
    info.innerHTML = `
      <div class="text-content">
        <h3>${proy.titulo}</h3>
        <p>${proy.descripcion}</p>
        <h5>${i18next.t('ar.programsTitle')}:</h5>
        <div class="skill-list d-flex flex-wrap gap-2">
          ${proy.programas.map(p => `<span class='badge-tech'>${iconos[p] || ''} ${p}</span>`).join(' ')}
        </div>
        <a href="${proy.enlace}" target="_blank" class="btn btn-primary mt-2">${i18next.t('ar.seeProject')}</a>
      </div>
      <div class="media-content">
        <iframe src="https://galactic-assault.vercel.app" width="100%" height="600" style="border: none;" allowfullscreen></iframe>
      </div>
    `;
    info.style.display = "flex";
    return;
  }
  // Iframe especial para Unió de Fotògrafs Castellers
  if (proy.titulo && proy.titulo.toLowerCase().includes('fotògrafs castellers')) {
    // Mapeo de programas a iconos FontAwesome/Iconify
    const iconos = {
      'WordPress': '<i class="fab fa-wordpress"></i>',
    };
    info.innerHTML = `
      <div class="text-content">
        <h3>${proy.titulo}</h3>
        <p>${proy.descripcion}</p>
        <h5>${i18next.t('ar.programsTitle')}:</h5>
        <div class="skill-list d-flex flex-wrap gap-2">
          ${proy.programas.map(p => `<span class='badge-tech'>${iconos[p] || ''} ${p}</span>`).join(' ')}
        </div>
        <a href="${proy.enlace}" target="_blank" class="btn btn-primary mt-2">${i18next.t('ar.seeProject')}</a>
      </div>
      <div class="media-content">
        <iframe src="https://asiercorona.es/wordpress14/" width="100%" height="600" style="border: none;" allowfullscreen></iframe>
      </div>
    `;
    info.style.display = "flex";
    return;
  }
  // Iframe especial para Notion App
  if (proy.titulo && proy.titulo.toLowerCase().includes('notion app')) {
    // Mapeo de programas a iconos FontAwesome/Iconify
    const iconos = {
      'Vue.js': '<i class="fab fa-vuejs"></i>',
      'TailwindCSS': '<span class="iconify" data-icon="simple-icons:tailwindcss"></span>',
      'TypeScript': '<i class="fas fa-code"></i>',
      'Vite': '<i class="fas fa-bolt"></i>',
    };
    info.innerHTML = `
      <div class="text-content">
        <h3>${proy.titulo}</h3>
        <p>${proy.descripcion}</p>
        <h5>${i18next.t('ar.programsTitle')}:</h5>
        <div class="skill-list d-flex flex-wrap gap-2">
          ${proy.programas.map(p => `<span class='badge-tech'>${iconos[p] || ''} ${p}</span>`).join(' ')}
        </div>
        <a href="${proy.enlace}" target="_blank" class="btn btn-primary mt-2">${i18next.t('ar.seeProject')}</a>
      </div>
      <div class="media-content">
        <iframe src="https://notionappasier.netlify.app/" width="100%" height="600" style="border: none;" allowfullscreen></iframe>
      </div>
    `;
    info.style.display = "flex";
    return;
  }
  if (!proy || !proy.programas || !proy.media || !proy.media.imagenes) {
    info.innerHTML = '<div class="text-content">No hay información disponible para este proyecto.</div>';
    info.style.display = "flex";
    return;
  }
  // Mapeo de programas a iconos FontAwesome/Iconify
  const iconos = {
    // Font Awesome (Free)
    'HTML5': '<i class="fab fa-html5"></i>',
    'CSS3': '<i class="fab fa-css3-alt"></i>',
    'JavaScript': '<i class="fab fa-js"></i>',
    'TypeScript': '<i class="fab fa-js"></i>', // no hay ícono específico en FA
    'Bootstrap': '<i class="fab fa-bootstrap"></i>',
    'Vue.js': '<i class="fab fa-vuejs"></i>',
    'WordPress': '<i class="fab fa-wordpress"></i>',
    'Git': '<i class="fab fa-git-alt"></i>',
    'Figma': '<i class="fab fa-figma"></i>',
    'Diseño responsivo': '<i class="fas fa-mobile-alt"></i>',
    'Jerarquía visual': '<i class="fas fa-eye"></i>',
    'Accesibilidad': '<i class="fas fa-universal-access"></i>',
    'Onshape': '<i class="fas fa-cube"></i>',
    'Impresión 3D': '<i class="fas fa-print"></i>',
    'WooCommerce': '<i class="fas fa-shopping-bag"></i>',
    'PrestaShop': '<i class="fas fa-shopping-cart"></i>',
    'C#': '<i class="fas fa-code"></i>',
    'Arduino': '<i class="fas fa-microchip"></i>',
    'Sketch': '<i class="fas fa-pencil-ruler"></i>',
    'Vite': '<i class="fas fa-bolt"></i>',
    'CNC': '<i class="fas fa-cogs"></i>', // O bien usar Iconify (láser, engranaje)

    // Iconify (requiere <script src="https://code.iconify.design/3/iconify.min.js"></script>)
    'TailwindCSS': '<span class="iconify" data-icon="simple-icons:tailwindcss"></span>',
    'Unity': '<span class="iconify" data-icon="simple-icons:unity"></span>',
    'XR Interaction Toolkit': '<span class="iconify" data-icon="mdi:virtual-reality"></span>',
    'Vuforia': '<span class="iconify" data-icon="simple-icons:vuforia"></span>',
    'Blender': '<span class="iconify" data-icon="simple-icons:blender"></span>',
    'Maya': '<span class="iconify" data-icon="simple-icons:autodesk"></span>',
    'ZBrush': '<span class="iconify" data-icon="ph:paint-brush-duotone"></span>',
    'Rhinoceros': '<span class="iconify" data-icon="file-icons:rhinoceros"></span>', // Alternativa mejor visualizada
    'Grasshopper': '<span class="iconify" data-icon="devicon:grasshopper"></span>', // Alternativa que sí carga
    'Fusion 360': '<span class="iconify" data-icon="simple-icons:autodesk"></span>',
    'AutoCAD': '<span class="iconify" data-icon="simple-icons:autodesk"></span>',
    'Lightroom': '<span class="iconify" data-icon="simple-icons:adobelightroom"></span>',
    'Photoshop': '<span class="iconify" data-icon="simple-icons:adobephotoshop"></span>'
  };

  info.innerHTML = `
    <div class="text-content">
      <h3>${proy.titulo}</h3>
      <p>${proy.descripcion}</p>
      <h5>${i18next.t('ar.programsTitle')}:</h5>
      <div class="skill-list d-flex flex-wrap gap-2">
        ${proy.programas.map(p => `<span class="badge-tech">${iconos[p] || ''} ${p}</span>`).join(' ')}
      </div>
      ${proy.enlace ? `<a href="${proy.enlace}" target="_blank" class="btn btn-primary mt-2">${i18next.t('ar.seeProject')}</a>` : ''}
    </div>
    <div class="media-content">
      <div class="mb-2">
        ${proy.media.imagenes.map(img => `<img src="${img}" class="img-fluid rounded mb-2 project-img-zoom" alt="">`).join("")}
      </div>
      ${proy.media.video ?
        (proy.titulo && proy.titulo.toLowerCase().includes('mitoia')
          ? `<video muted playsinline autoplay loop width="100%" class="rounded" style="pointer-events:none;">
              <source src="${proy.media.video}" type="video/mp4">
              Tu navegador no soporta videos HTML5.
            </video>`
          : `<video controls width="100%" class="rounded">
              <source src="${proy.media.video}" type="video/mp4">
              Tu navegador no soporta videos HTML5.
            </video>`
        )
      : ''}
    </div>
  `;
  // Añadir funcionalidad de zoom a las imágenes
  setTimeout(() => {
    document.querySelectorAll('.project-img-zoom').forEach(img => {
      img.style.cursor = 'zoom-in';
      img.addEventListener('click', function(e) {
        e.stopPropagation();
        if (!img.classList.contains('zoomed')) {
          img.classList.add('zoomed');
          img.style.position = 'fixed';
          img.style.zIndex = '9999';
          img.style.left = '50%';
          img.style.top = '50%';
          img.style.transform = 'translate(-50%, -50%) scale(1)';
          img.style.width = 'auto';
          img.style.height = 'auto';
          img.style.maxWidth = '90vw';
          img.style.maxHeight = '90vh';
          img.style.boxShadow = '0 0 40px 10px rgba(0,0,0,0.7)';
          img.style.background = '#fff';
          img.style.borderRadius = '16px';
          img.style.cursor = 'zoom-out';
          document.body.style.overflow = 'hidden';

          // Cerrar al hacer clic fuera
          function closeZoom(ev) {
            if (ev.target !== img) {
              img.classList.remove('zoomed');
              img.removeAttribute('style');
              document.body.style.overflow = '';
              img.removeEventListener('click', closeZoom, true);
            }
          }
          setTimeout(() => {
            document.addEventListener('click', closeZoom, true);
          }, 0);
        } else {
          img.classList.remove('zoomed');
          img.removeAttribute('style');
          document.body.style.overflow = '';
        }
      });
    });
  }, 0);
  info.style.display = "flex";
}

document.querySelectorAll(".Hotspot").forEach(btn =>
  btn.addEventListener("click", () => {
    proyectoSeleccionado = 0;
    mostrarProyectos(btn.dataset.tema, 0);
  })
);

function waitForProyectosPorTema(cb) {
  if (window.proyectosPorTema) {
    cb();
  } else {
    setTimeout(() => waitForProyectosPorTema(cb), 30);
  }
}

// --- Detectar parámetro tema en la URL ---
const params = new URLSearchParams(window.location.search);
const temaURL = params.get("tema");

// --- Renderizado ÚNICO y ROBUSTO ---
waitForProyectosPorTema(() => {
  mostrarProyectos(
    temaURL && ["interactivos", "web", "fabricacion", "fotografia"].includes(temaURL)
      ? temaURL
      : "interactivos",
    0
  );
});

console.log('¿Existe window.getProyectosPorTema?', typeof window.getProyectosPorTema);
console.log('¿Existe window.proyectosPorTema?', window.proyectosPorTema);
console.log('¿Claves de proyectosPorTema?', window.proyectosPorTema ? Object.keys(window.proyectosPorTema) : 'No definido');

// --- CIERRE CORRECTO DEL BLOQUE PRINCIPAL ---
