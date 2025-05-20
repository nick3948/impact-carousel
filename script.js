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
        if (carousel.scrollLeft >= track.scrollWidth / 2) {
            carousel.scrollLeft = 0;
        }
    }
    requestAnimationFrame(autoScroll);
}

autoScroll();

carousel.addEventListener('mouseenter', () => isPaused = true);
carousel.addEventListener('mouseleave', () => isPaused = false);

const dots = document.querySelectorAll('.dot');
const card = document.querySelector('.card');
const cardGap = 0;

function updateIndicators() {
  const cardWidth = card.offsetWidth + cardGap;
  const index = Math.round(carousel.scrollLeft / cardWidth) % dots.length;
  dots.forEach((dot, i) => {
    dot.classList.toggle('active', i === index);
  });
}

carousel.addEventListener('scroll', () => {
  updateIndicators();
});
