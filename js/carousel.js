document.addEventListener("DOMContentLoaded", () => {
    const container = document.querySelector('.container-proyectos');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    let scrollAmount = 0;

    nextBtn.addEventListener('click', () => {
        container.scrollBy({ left: 320, behavior: 'smooth' });
        scrollAmount += 320;
        if (scrollAmount >= container.scrollWidth - container.clientWidth) {
            scrollAmount = 0;
            container.scrollTo({ left: 0, behavior: 'smooth' });
        }
    });

    prevBtn.addEventListener('click', () => {
        container.scrollBy({ left: -320, behavior: 'smooth' });
        scrollAmount -= 320;
        if (scrollAmount < 0) {
            scrollAmount = container.scrollWidth - container.clientWidth;
            container.scrollTo({ left: scrollAmount, behavior: 'smooth' });
        }
    });
});