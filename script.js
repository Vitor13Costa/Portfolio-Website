let currentIndex1 = 0;
const images1 = document.querySelectorAll('.carousel-image');
const totalImages1 = images1.length +5;
const carouselWrapper1 = document.querySelector('.carousel-wrapper');
const prevButton1 = document.querySelector('.prev1');
const nextButton1 = document.querySelector('.next1');


const slideshowImages1 = {
    'carousel-image-1': ['images/websiteImage19.png', 'images/websiteImage20.png'],
    'carousel-image-2': ['images/websiteImage25.png', 'images/websiteImage26.png'],

    'carousel-image-4': ['images/websiteImage21.png', 'images/websiteImage22.png', 'images/websiteImage23.png', 'images/websiteImage24.png'],
    'carousel-image-5': ['images/websiteImage16.jpg', 'images/websiteImage17.jpg']
}


const slideIntervals1 = {
    'carousel-image-1': 5000,   
    'carousel-image-2': 5000,   
    'carousel-image-3': 5000,   
    'carousel-image-4': 5000,   
    'carousel-image-5': 5000    
};


function changeImage1(slideId, interval) {
    const imgEl = document.getElementById(slideId);
    const arr = slideshowImages1[slideId];
    let idx = 0;

    setInterval(() => {
        idx = (idx + 1) % arr.length;
        imgEl.src = arr[idx];
    }, interval);
}


for (const slideId in slideshowImages1) {
    const interval = slideIntervals1[slideId];
    changeImage1(slideId, interval);
}

// Navigation for Carousel 1
function moveSlide1(step) {

    if (currentIndex1 === 0 && step === -1) return;
    if (currentIndex1 === totalImages1 - 3 && step === 1) return; 

    currentIndex1 = (currentIndex1 + step + totalImages1) % totalImages1;
    carouselWrapper1.style.transform = `translateX(-${currentIndex1 * (600+25)}px)`;

    prevButton1.disabled = (currentIndex1 === 0);
    nextButton1.disabled = (currentIndex1 === totalImages1 + 3);
}


prevButton1.addEventListener('click', () => moveSlide1(-1));
nextButton1.addEventListener('click', () => moveSlide1(1));

moveSlide1(0);



let currentIndex2 = 0;
const images2 = document.querySelectorAll('.carousel-image2');
const totalImages2 = images2.length;
const carouselWrapper2 = document.querySelector('.carousel-wrapper2');    
const prevButton2 = document.querySelector('.prev2');
const nextButton2 = document.querySelector('.next2');

const slideshowImages2 = {
    'carousel-image2-1': ['images/websiteImage3.jpg', 'images/websiteImage7.jpg'],
    'carousel-image2-2': ['images/websiteImage5.png', 'images/websiteImage6.png'],
    'carousel-image2-3': ['images/websiteImage10.jpg', 'images/websiteImage11.jpg'],
    'carousel-image2-4': ['images/websiteImage15.jpg', 'images/websiteImage12.jpg', 'images/websiteImage13.jpg', 'images/websiteImage14.jpg'],
    'carousel-image2-5': ['images/websiteImage16.jpg', 'images/websiteImage17.jpg']
};

const slideIntervals2 = {
    'carousel-image2-1': 4000,   // 4 sec
    'carousel-image2-2': 7000,   // 7 sec
    'carousel-image2-3': 5000,   // 5 sec
    'carousel-image2-4': 8000,   // 8 sec
    'carousel-image2-5': 6000    // 6 sec
};

function changeImage2(slideId, interval) {
    const imgEl = document.getElementById(slideId);
    const arr = slideshowImages2[slideId];
    let idx = 0;

    setInterval(() => {
        idx = (idx + 1) % arr.length;
        imgEl.src = arr[idx];
    }, interval);
}

for (const slideId in slideshowImages2) {
    const interval = slideIntervals2[slideId];
    changeImage2(slideId, interval);
}

function moveSlide2(step) {
    if (currentIndex2 === 0 && step === -1) return;
    if (currentIndex2 === totalImages2 - 3 && step === 1) return; // assume 3 visible

    currentIndex2 = (currentIndex2 + step + totalImages2) % totalImages2;
    carouselWrapper2.style.transform = `translateX(-${currentIndex2 * (300 + 30)}px)`;

    prevButton2.disabled = (currentIndex2 === 0);
    nextButton2.disabled = (currentIndex2 === totalImages2 - 3);
}


prevButton2.addEventListener('click', () => moveSlide2(-1));
nextButton2.addEventListener('click', () => moveSlide2(1));

moveSlide2(0);
