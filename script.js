// Image list - manually maintained list of images in the pictures directory
const images = [
    'pictures/IMG_2475%202.jpg',
    'pictures/IMG_2476.jpg',
    'pictures/IMG_2477%202.jpg',
    'pictures/IMG_2478.jpg',
    'pictures/IMG_2479.jpg',
    'pictures/IMG_2480.jpg',
    'pictures/IMG_2481%202.jpg',
    'pictures/IMG_2482.jpg',
    'pictures/IMG_2483.jpg',
    'pictures/IMG_2484.jpg',
    'pictures/IMG_2485.jpg',
    'pictures/IMG_2486.jpg',
    'pictures/IMG_2487.jpg',
    'pictures/IMG_2488.jpg',
    'pictures/IMG_2490.jpg',
    'pictures/IMG_2494%202.jpg',
    'pictures/IMG_2495.jpg'
];

let currentIndex = 0;

function initCarousel() {
    const carouselInner = document.getElementById('carouselInner');
    const dotsContainer = document.getElementById('dots');
    const totalImages = document.getElementById('totalImages');

    // Create carousel items
    images.forEach((image, index) => {
        const item = document.createElement('div');
        item.className = 'carousel-item' + (index === 0 ? ' active' : '');
        item.innerHTML = `<img src="${image}" alt="Gallery image ${index + 1}" loading="lazy">`;
        carouselInner.appendChild(item);

        // Create dot
        const dot = document.createElement('button');
        dot.className = 'dot' + (index === 0 ? ' active' : '');
        dot.setAttribute('aria-label', `Go to image ${index + 1}`);
        dot.addEventListener('click', () => goToSlide(index));
        dotsContainer.appendChild(dot);
    });

    totalImages.textContent = images.length;

    // Event listeners
    document.getElementById('prevBtn').addEventListener('click', prevSlide);
    document.getElementById('nextBtn').addEventListener('click', nextSlide);

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') prevSlide();
        if (e.key === 'ArrowRight') nextSlide();
    });
}

function updateCarousel() {
    const items = document.querySelectorAll('.carousel-item');
    const dots = document.querySelectorAll('.dot');

    items.forEach((item, index) => {
        item.classList.toggle('active', index === currentIndex);
    });

    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentIndex);
    });

    document.getElementById('currentIndex').textContent = currentIndex + 1;
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % images.length;
    updateCarousel();
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateCarousel();
}

function goToSlide(index) {
    currentIndex = index;
    updateCarousel();
}

// Initialize carousel when DOM is ready
document.addEventListener('DOMContentLoaded', initCarousel);
