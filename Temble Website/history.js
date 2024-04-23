const slides = document.querySelector('.slides');
const prevBtn = document.querySelector('.arrow-left');
const nextBtn = document.querySelector('.arrow-right');
const slideWidth = document.querySelector('.slider').offsetWidth;
let slideIndex = 0;
let autoSlideInterval;

prevBtn.addEventListener('click', () => {
  slideIndex = (slideIndex > 0) ? slideIndex - 1 : slides.children.length - 1;
  updateSlidePosition();
});

nextBtn.addEventListener('click', () => {
  slideIndex = (slideIndex < slides.children.length - 1) ? slideIndex + 1 : 0;
  updateSlidePosition();
});

function updateSlidePosition() {
  slides.style.transform = `translateX(-${slideIndex * slideWidth}px)`;
}

// Automatic slideshow
function startAutoSlide() {
  autoSlideInterval = setInterval(() => {
    slideIndex = (slideIndex < slides.children.length - 1) ? slideIndex + 1 : 0;
    updateSlidePosition();
  }, 5000); // Change slide every 5 seconds
}

function stopAutoSlide() {
  clearInterval(autoSlideInterval);
}

// Start auto slide on page load
startAutoSlide();

// Pause auto slide on mouseover
slides.addEventListener('mouseover', stopAutoSlide);

// Resume auto slide on mouseout
slides.addEventListener('mouseout', startAutoSlide);
