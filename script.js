document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', () => {
        window.location.href = 'page.html';
    });
});

const carousel = document.querySelector('.carousel');
const track = document.querySelector('.carousel-track');

let scrollSpeed = 1;
let isPaused = false;

function autoScroll() {
    if (!isPaused) {
        carousel.scrollLeft += scrollSpeed;
        if (carousel.scrollLeft + carousel.clientWidth >= track.scrollWidth) {
            carousel.scrollLeft = 0;
        }
    }

    requestAnimationFrame(autoScroll);
}

autoScroll();

carousel.addEventListener('mouseenter', () => isPaused = true);
carousel.addEventListener('mouseleave', () => isPaused = false);