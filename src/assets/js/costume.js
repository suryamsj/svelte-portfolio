import Aos from "aos"

// AOS
Aos.init({
    once: true
});

// SCROLL
var scroll = new SmoothScroll('a[href*="#"]', {
    speed: 500,
    speedAsDuration: true
});