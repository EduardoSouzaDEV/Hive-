document.addEventListener('DOMContentLoaded', () => {
    const gallery = document.querySelector('.service-block:nth-child(2) .image-gallery');
    const images = gallery.querySelectorAll('.service-image');
    let currentIndex = 0;

    gallery.querySelector('.prev-arrow').addEventListener('click', () => {
        images[currentIndex].classList.remove('active');
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        images[currentIndex].classList.add('active');
    });

    gallery.querySelector('.next-arrow').addEventListener('click', () => {
        images[currentIndex].classList.remove('active');
        currentIndex = (currentIndex + 1) % images.length;
        images[currentIndex].classList.add('active');
    });
});
