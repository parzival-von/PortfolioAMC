// Navegación suave al hacer clic en los enlaces
const navLinks = document.querySelectorAll(".nav-links a");

navLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
        event.preventDefault(); // Prevenir el comportamiento por defecto
        const targetId = event.target.getAttribute("href").substring(1);
        const targetSection = document.getElementById(targetId);

        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop - 50, // Ajustar para evitar el solapamiento con el header
                behavior: "smooth", // Animación suave
            });
        }
    });
});

// Código para abrir contenidos con cada hotspot
document.addEventListener("DOMContentLoaded", () => {
    let hotspots = document.querySelectorAll(".Hotspot");

    hotspots.forEach((hotspot) => {
        hotspot.addEventListener("click", (event) => {
            event.stopPropagation();

            let hotspotName = hotspot.getAttribute("slot"); // Obtener el nombre del hotspot

            let item1 = document.getElementById("item1");
            let item2 = document.getElementById("item2");
            let item3 = document.getElementById("item3");
            let item4 = document.getElementById("item4");
            let item5 = document.getElementById("item5");
            let item6 = document.getElementById("item6");

            // Ocultar todos los items antes de mostrar el seleccionado
            item1.classList.remove("mostrarItem1");
            item2.classList.remove("mostrarItem2");
            item3.classList.remove("mostrarItem3");
            item4.classList.remove("mostrarItem4");
            item5.classList.remove("mostrarItem5");
            item6.classList.remove("mostrarItem6");

            if (hotspotName === "hotspot-1") {
                item1.classList.add("mostrarItem1");
                console.log("Muestra el item 1");
            } else if (hotspotName === "hotspot-2") {
                item2.classList.add("mostrarItem2");
                console.log("Muestra el item 2");
                } else if (hotspotName === "hotspot-3") {
                item3.classList.add("mostrarItem3");
                console.log("Muestra el item 3");
                    } else if (hotspotName === "hotspot-4") {
                item4.classList.add("mostrarItem4");
                console.log("Muestra el item 4");
                        } else if (hotspotName === "hotspot-5") {
                item5.classList.add("mostrarItem5");
                console.log("Muestra el item 5");
                            } else if (hotspotName === "hotspot-6") {
                item6.classList.add("mostrarItem6");
                console.log("Muestra el item 6");
            }
        });
    });
});

