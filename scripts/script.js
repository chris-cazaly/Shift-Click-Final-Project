// ELEMENT VARIABLES

const buttonNextImage = document.querySelector(".button-next");
const buttonPreviousImage = document.querySelector(".button-previous");
const image = document.querySelector(".image");

// - images array -

const images = [
    "images/img1.jpg",
    "images/img2.jpg",
    "images/img3.jpg",
    "images/img4.jpg",
    "images/img5.jpg"
];
let imageIndex = 0;

// ==================================
// ========= IMAGE CAROUSEL =========
// ==================================

// --- BUTTON CLICK EVENTS ---

let isScrolling = true;

// - declare functions -

function nextImage() {
    // increment index
    (imageIndex < images.length - 1) ? imageIndex++ : imageIndex = 0;
    // set new image
    image.src = images[imageIndex];
    // stop scrolling
    isScrolling = false;
}

function previousImage() {
    // decrement index
    (imageIndex > 0) ? imageIndex-- : imageIndex = images.length-1;
    // set new image
    image.src = images[imageIndex];
    // stop scrolling
    isScrolling = false;
}

// - event listeners -

// next button
buttonNextImage.addEventListener("click", e => {nextImage();} );

// previous button
buttonPreviousImage.addEventListener("click", e => {previousImage();} );

// arrow keys
window.addEventListener("keydown", (e) => 
{
    let keyCode = e.code;

    switch (keyCode) 
    {
        case "ArrowRight":
            nextImage();
            break;
        case "ArrowLeft":
            previousImage();
            break;
    }
});

// --- TIMED SCROLLING ---

setInterval( function()
    {
        if (isScrolling)
        {
            // increment index
            (imageIndex < images.length - 1) ? imageIndex++ : imageIndex = 0;
            // set new image
            image.src = images[imageIndex]; 
        }
        else
        {   
            // allow scrolling again
            isScrolling = true;
        }
        
    }, 3500 );
    

