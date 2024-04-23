// JavaScript for Slider Functionality

const slides = document.querySelector('.slides');
const slideImages = document.querySelectorAll('.slides img');
const arrowLeft = document.querySelector('.arrow-left');
const arrowRight = document.querySelector('.arrow-right');
const dotsContainer = document.querySelector('.pagination');
const dots = Array.from(document.querySelectorAll('.dot'));

let currentIndex = 0;
const intervalTime = 5000; // Change slide every 5 seconds
let slideInterval;

// Function to show slide
function showSlide(index) {
    slides.style.transform = `translateX(-${index * 100}%)`;
    dots.forEach((dot, idx) => {
        dot.classList.toggle('active', idx === index);
    });
}

// Function to move to next slide
function nextSlide() {
    currentIndex = (currentIndex + 1) % slideImages.length;
    showSlide(currentIndex);
}

// Function to move to previous slide
function prevSlide() {
    currentIndex = currentIndex === 0 ? slideImages.length - 1 : currentIndex - 1;
    showSlide(currentIndex);
}

// Function to start autoplay
function startSlideShow() {
    slideInterval = setInterval(nextSlide, intervalTime);
}

// Event listeners for navigation arrows
arrowLeft.addEventListener('click', () => {
    prevSlide();
    clearInterval(slideInterval);
    startSlideShow();
});

arrowRight.addEventListener('click', () => {
    nextSlide();
    clearInterval(slideInterval);
    startSlideShow();
});

// Event listener for pagination dots
dotsContainer.addEventListener('click', (e) => {
    if (e.target.classList.contains('dot')) {
        const targetIndex = dots.indexOf(e.target);
        currentIndex = targetIndex;
        showSlide(currentIndex);
        clearInterval(slideInterval);
        startSlideShow();
    }
});

// Start autoplay
startSlideShow();
