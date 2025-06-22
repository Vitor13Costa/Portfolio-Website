let currentIndex1 = 0;
const images1 = document.querySelectorAll('.carousel-image');
const images = DocumentFragment.querySelectorAll('.carousel-wrappper');
const prevButton1 = document.querySelector('.prev');
const nextButton1 = document.querySelector('.next');

const slideshowImages1 = {
    'carousel-image-1': ['websiteImage3.jpg', 'websiteImage7.jpg'],
    'carousel-image-2': ['websiteImage5.png', 'websiteImage6.png'],

    'carousel-image-4': ['websiteImage15.jpg', 'websiteImage12.jpg', 'websiteImage13.jpg', 'websiteImage14.jpg'],
    'carousel-image5': ['websiteImage16.jpg', 'websiteImage17.jpg']
}

// Assign a unique interval (ms) for each carousel‐1 slide (by its <img id>)
const slideIntervals1 = {
    'carousel-image-1': 5000,   // changes every 5 sec
    'carousel-image-2': 8000,   // changes every 8 sec
    'carousel-image-3': 6000,   // changes every 6 sec
    'carousel-image-4': 7000,   // changes every 7 sec
    'carousel-image-5': 9000    // changes every 9 sec (if present)
};

// Function to start the slideshow for Carousel 1
function changeImage1(slideId, interval) {
    const imgEl = document.getElementById(slideId);
    const arr = slideshowImages1[slideId];
    let idx = 0;

    setInterval(() => {
        idx = (idx + 1) % arr.length;
        imgEl.src = arr[idx];
    }, interval);
}

// Initialize all slideshows in Carousel 1
for (const slideId in slideshowImages1) {
    const interval = slideIntervals1[slideId];
    changeImage1(slideId, interval);
}

// Navigation for Carousel 1
function moveSlide1(step) {
    // Prevent overshooting on left or right
    if (currentIndex1 === 0 && step === -1) return;
    if (currentIndex1 === totalImages1 - 3 && step === 1) return; // assume 3 visible at once

    currentIndex1 = (currentIndex1 + step + totalImages1) % totalImages1;
    carouselWrapper1.style.transform = `translateX(-${currentIndex1 * (300 + 30)}px)`;

    prevButton1.disabled = (currentIndex1 === 0);
    nextButton1.disabled = (currentIndex1 === totalImages1 - 3);
}

// Wire up the buttons for Carousel 1
prevButton1.addEventListener('click', () => moveSlide1(-1));
nextButton1.addEventListener('click', () => moveSlide1(1));

// On page load, ensure the first image is visible and buttons are correct:
moveSlide1(0);



let currentIndex2 = 0;
const images2 = document.querySelectorAll('.carousel-image2');            // All <img> elements in Carousel 2
const totalImages2 = images2.length;
const carouselWrapper2 = document.querySelector('.carousel-wrapper2');     // The flex container for Carousel 2

const slideshowImages2 = {
    'carousel-image2-1': ['websiteImage3.jpg', 'websiteImage7.jpg'],
    'carousel-image2-2': ['websiteImage5.png', 'websiteImage6.png'],
    'carousel-image2-3': ['websiteImage10.jpg', 'websiteImage11.jpg'],
    'carousel-image2-4': ['websiteImage15.jpg', 'websiteImage12.jpg', 'websiteImage13.jpg', 'websiteImage14.jpg'],
    'carousel-image2-5': ['websiteImage16.jpg', 'websiteImage17.jpg']
};

// Unique intervals for each slide in Carousel 2 (ms)
const slideIntervals2 = {
    'carousel-image2-1': 4000,   // 4 sec
    'carousel-image2-2': 7000,   // 7 sec
    'carousel-image2-3': 5000,   // 5 sec
    'carousel-image2-4': 8000,   // 8 sec
    'carousel-image2-5': 6000    // 6 sec
};

// Function to start the slideshow for Carousel 2
function changeImage2(slideId, interval) {
    const imgEl = document.getElementById(slideId);
    const arr = slideshowImages2[slideId];
    let idx = 0;

    setInterval(() => {
        idx = (idx + 1) % arr.length;
        imgEl.src = arr[idx];
    }, interval);
}

// Initialize all slideshows in Carousel 2
for (const slideId in slideshowImages2) {
    const interval = slideIntervals2[slideId];
    changeImage2(slideId, interval);
}

// Navigation for Carousel 2
function moveSlide2(step) {
    // Prevent overshooting on left or right
    if (currentIndex2 === 0 && step === -1) return;
    if (currentIndex2 === totalImages2 - 3 && step === 1) return; // assume 3 visible

    currentIndex2 = (currentIndex2 + step + totalImages2) % totalImages2;
    carouselWrapper2.style.transform = `translateX(-${currentIndex2 * (300 + 30)}px)`;

    // We must reference the same buttons (.prev / .next)
    prevButton1.disabled = (currentIndex2 === 0);
    nextButton1.disabled = (currentIndex2 === totalImages2 - 3);
}

// Wire up the same Prev/Next buttons to Carousel 2 as well
// (Note: they share .prev / .next in the HTML, so clicking either arrow affects whichever carousel is currently in front)
prevButton1.addEventListener('click', () => moveSlide2(-1));
nextButton1.addEventListener('click', () => moveSlide2(1));

// On page load, ensure the first image in Carousel 2 is visible
moveSlide2(0);
