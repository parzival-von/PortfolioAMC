document.addEventListener("DOMContentLoaded", () => {
  const lista = document.getElementById("lista-proyectos");
  const info = document.getElementById("project-info");

  function mostrarProyectos(tema) {
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
      const div = document.createElement("div");
      div.className = "proyecto";
      div.textContent = i + 1;
      div.addEventListener("click", () => mostrarInfo(proy));
      lista.appendChild(div);
    });

    // Mostrar el primer proyecto automáticamente
    if (proyectos.length > 0) {
      mostrarInfo(proyectos[0]);
    }
  }

  function mostrarInfo(proy) {
    info.innerHTML = `
      <div class="text-content">
        <h3>${proy.titulo}</h3>
        <p>${proy.descripcion}</p>
        <h5>Programas utilizados:</h5>
        <ul>${proy.programas.map(p => `<li>${p}</li>`).join("")}</ul>
        <a href="${proy.enlace}" target="_blank" class="btn btn-primary mt-2">Ver Proyecto</a>
      </div>
      <div class="media-content">
        <div class="mb-2">
          ${proy.media.imagenes.map(img => `<img src="${img}" class="img-fluid rounded mb-2" alt="">`).join("")}
        </div>
        <video controls width="100%" class="rounded">
          <source src="${proy.media.video}" type="video/mp4">
          Tu navegador no soporta videos HTML5.
        </video>
      </div>
    `;
    info.style.display = "flex";
  }

  document.querySelectorAll(".Hotspot").forEach(btn =>
    btn.addEventListener("click", () => mostrarProyectos(btn.dataset.tema))
  );

  // Mostrar proyectos interactivos de forma predefinida al cargar la página
  mostrarProyectos("interactivos");
});
