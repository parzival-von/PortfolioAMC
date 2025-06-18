document.addEventListener("DOMContentLoaded", () => {
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
    let hotspots = document.querySelectorAll(".Hotspot");

    hotspots.forEach((hotspot, index) => {
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

            let selectedItem;
            if (hotspotName === "hotspot-1") {
                item1.classList.add("mostrarItem1");
                selectedItem = item1;
                console.log("Muestra el item 1");
            } else if (hotspotName === "hotspot-2") {
                item2.classList.add("mostrarItem2");
                selectedItem = item2;
                console.log("Muestra el item 2");
            } else if (hotspotName === "hotspot-3") {
                item3.classList.add("mostrarItem3");
                selectedItem = item3;
                console.log("Muestra el item 3");
            } else if (hotspotName === "hotspot-4") {
                item4.classList.add("mostrarItem4");
                selectedItem = item4;
                console.log("Muestra el item 4");
            } else if (hotspotName === "hotspot-5") {
                item5.classList.add("mostrarItem5");
                selectedItem = item5;
                console.log("Muestra el item 5");
            } else if (hotspotName === "hotspot-6") {
                item6.classList.add("mostrarItem6");
                selectedItem = item6;
                console.log("Muestra el item 6");
            }
        });
    });

    // Código para cerrar los items al hacer clic fuera de ellos
    document.addEventListener("click", function(event) {
        const items = document.querySelectorAll('.item1, .item2, .item3, .item4, .item5, .item6');
        let isClickInside = false;

        items.forEach(item => {
            if (item.contains(event.target)) {
                isClickInside = true;
            }
        });

        if (!isClickInside) {
            items.forEach(item => {
                item.classList.remove('mostrarItem1', 'mostrarItem2', 'mostrarItem3', 'mostrarItem4', 'mostrarItem5', 'mostrarItem6');
            });
        }
    });

    // Detectar el evento de scroll y aplicar la clase
    window.addEventListener('scroll', () => {
        const header = document.querySelector('header');

        if (header) {
            const scrollPosition = window.scrollY;

            if (scrollPosition > header.offsetHeight + 10) {
                header.style.position = 'fixed';
                header.style.top = '0';
            } else {
                header.style.position = 'relative';
                header.style.top = 'auto';
            }
        } else {
            console.error('Elemento header no encontrado en el DOM.');
        }
    });

    // Activar animación de .visible al hacer scroll
    window.addEventListener("scroll", () => {
        const visibleElement = document.querySelector(".visible");
        const triggerPoint = window.innerHeight / 2; // Punto de activación en el scroll

        if (visibleElement) {
            const elementTop = visibleElement.getBoundingClientRect().top;

            if (elementTop < triggerPoint) {
                visibleElement.classList.add("animate"); // Activar animación
            } else {
                visibleElement.classList.remove("animate"); // Desactivar animación
            }
        }
    });

    i18next.init({
        lng: localStorage.getItem('i18nextLng') || 'es',
        fallbackLng: 'es',
        load: 'languageOnly', // Fuerza a usar solo el código corto (es, en, ca)
        backend: {
            loadPath: '/locales/{{lng}}/translation.json'
        }
    }, function(err, t) {
        if (typeof translateAll === 'function') translateAll();
    });
});