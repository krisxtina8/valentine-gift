// PASSWORD
const correctPassword = "1234";

// LETTER TEXT
const letterText = `My dearest ❤️,

This is our first Valentine’s Day together,
and I wanted to make something just for you.

You make my world brighter,
my days happier,
and my heart fuller.

Happy Valentine’s Day ❤️`;

// ELEMENTS
const password = document.getElementById("password");
const lockScreen = document.getElementById("lockScreen");
const letterPage = document.getElementById("letterPage");
const photoPage = document.getElementById("photoPage");
const letterBox = document.getElementById("letter");
const hint = document.getElementById("hint");
const music = document.getElementById("music");
const slide = document.getElementById("slide");

// LETTER TYPING
let letterIndex = 0;

function unlock() {
    if (password.value === correctPassword) {
        lockScreen.style.display = "none";
        letterPage.style.display = "block";
        typeLetter();
    } else {
        hint.style.display = "block";
    }
}

function typeLetter() {
    if (letterIndex < letterText.length) {
        letterBox.innerHTML += letterText.charAt(letterIndex);
        letterIndex++;
        setTimeout(typeLetter, 35);
    }
}

// GO TO PHOTOS
function goToPhotos() {
    letterPage.style.display = "none";
    photoPage.style.display = "block";
    music.play();
    startSlideshow();
}

// SLIDESHOW
const photos = [
    "image1.jpeg",
    "image2.jpeg",
    "image3.jpeg",
    "image4.jpeg",
    "image5.jpeg"
];

let photoIndex = 0;
let slideshowInterval = null;

function startSlideshow() {
    slide.src = photos[photoIndex];

    slideshowInterval = setInterval(() => {
        slide.style.opacity = 0;

        setTimeout(() => {
            photoIndex = (photoIndex + 1) % photos.length;
            slide.src = photos[photoIndex];
            slide.style.opacity = 1;
        }, 500);
    }, 2500);
}

console.log("Slideshow running ✅");
