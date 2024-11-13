document.addEventListener("DOMContentLoaded", function() {
    const zoomContainers = document.querySelectorAll('.zoom-container');

    zoomContainers.forEach(zoomContainer => {
        const zoomImage = zoomContainer.querySelector('.zoom-image');
        const zoomResult = zoomContainer.querySelector('.zoom-result');

        zoomContainer.addEventListener('mousemove', function(event) {
            const rect = zoomContainer.getBoundingClientRect();
            const posX = (event.clientX - rect.left) / zoomContainer.offsetWidth * 100;
            const posY = (event.clientY - rect.top) / zoomContainer.offsetHeight * 100;

            zoomResult.style.backgroundImage = `url(${zoomImage.src})`;
            zoomResult.style.backgroundPosition = `${posX}% ${posY}%`;
            zoomResult.style.display = 'block';
            zoomResult.style.left = `${event.clientX - rect.left}px`;
            zoomResult.style.top = `${event.clientY - rect.top}px`;
        });

        zoomContainer.addEventListener('mouseleave', function() {
            zoomResult.style.display = 'none';
        });
    });
});