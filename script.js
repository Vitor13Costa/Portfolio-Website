const MANUAL_SHIFT_1  = 625;
const TOTAL_SLIDES_1  = 9;
const AUTO_SHIFT_1    = 1250;
const AUTO_INTERVAL_1 = 13000;

let currentOffset1 = 0;
let autoTimer1     = null;
let hasInteracted1 = false;

const wrapper1 = document.querySelector('.carousel-wrapper');
const prev1    = document.querySelector('.prev1');
const next1    = document.querySelector('.next1');

const slideshowImages1 = {
  'carousel-image-1': ['images/websiteImage19.png', 'images/websiteImage20.png'],
  'carousel-image-2': ['images/websiteImage25.png', 'images/websiteImage26.png'],
  'carousel-image-4': [
    'images/websiteImage21.png',
    'images/websiteImage22.png',
    'images/websiteImage23.png',
    'images/websiteImage24.png'
  ],
  'carousel-image-5': ['images/websiteImage16.jpg', 'images/websiteImage17.jpg'],
};
const slideIntervals1 = {
  'carousel-image-1': 4000,
  'carousel-image-2': 4000,
  'carousel-image-4': 4000,
  'carousel-image-5': 4000,
};

function changeImage1(slideId, interval) {
  const imgEl = document.getElementById(slideId);
  const arr   = slideshowImages1[slideId];
  let idx = 0;
  setInterval(() => {
    idx = (idx + 1) % arr.length;
    imgEl.src = arr[idx];
  }, interval);
}
for (const slideId in slideshowImages1) {
  changeImage1(slideId, slideIntervals1[slideId]);
}

function moveSlide1By(px) {
  const maxOffset = (TOTAL_SLIDES_1 - 1) * MANUAL_SHIFT_1;
  let nextOffset  = currentOffset1 + px;

  if (px === AUTO_SHIFT_1 && nextOffset > maxOffset) {
    nextOffset = 0;
  }

  currentOffset1 = Math.max(0, Math.min(nextOffset, maxOffset));
  wrapper1.style.transform = `translateX(-${currentOffset1}px)`;

  prev1.disabled = (currentOffset1 === 0);
  next1.disabled = (currentOffset1 === maxOffset);

  if (hasInteracted1) resetAuto1();
}

function moveSlide1(step) {
  hasInteracted1 = true;
  moveSlide1By(step * MANUAL_SHIFT_1);
}

function autoSlide1() {
  moveSlide1By(AUTO_SHIFT_1);
}

function resetAuto1() {
  clearInterval(autoTimer1);
  autoTimer1 = setInterval(autoSlide1, AUTO_INTERVAL_1);
}

prev1.addEventListener('click', () => moveSlide1(-1));
next1.addEventListener('click', () => moveSlide1(1));

wrapper1.style.transform = 'translateX(0)';
prev1.disabled = true;
next1.disabled = false;


let currentIndex2 = 0;
const images2 = document.querySelectorAll('.carousel-image2');
const totalImages2 = images2.length;
const carouselWrapper2 = document.querySelector('.carousel-wrapper2');    
const prevButton2 = document.querySelector('.prev2');
const nextButton2 = document.querySelector('.next2');

const slideshowImages2 = {
    'carousel-image2-1': ['images/websiteImage28.png', 'images/websiteImage29.jpeg', 'images/websiteImage31.png'],
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
    if (currentIndex2 === totalImages2 - 3 && step === 1) return; 

    currentIndex2 = (currentIndex2 + step + totalImages2) % totalImages2;
    carouselWrapper2.style.transform = `translateX(-${currentIndex2 * (300 + 30)}px)`;

    prevButton2.disabled = (currentIndex2 === 0);
    nextButton2.disabled = (currentIndex2 === totalImages2 - 3);
}


prevButton2.addEventListener('click', () => moveSlide2(-1));
nextButton2.addEventListener('click', () => moveSlide2(1));

moveSlide2(0);
