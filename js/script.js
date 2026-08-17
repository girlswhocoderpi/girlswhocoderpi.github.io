document.addEventListener("DOMContentLoaded", function () {
    
    const carouselElement = document.getElementById("myCarousel");

    if (!carouselElement || typeof bootstrap === "undefined") {
        return;
    }

    const carousel = bootstrap.Carousel.getOrCreateInstance(carouselElement, {
        interval: 5000,
        pause: "hover",
        ride: "carousel",
        touch: true,
        wrap: true
    });

    carouselElement.addEventListener("mouseenter", function () {
        carousel.pause();
    });

    carouselElement.addEventListener("mouseleave", function () {
        carousel.cycle();
    });
});