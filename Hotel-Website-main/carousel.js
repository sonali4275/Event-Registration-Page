function toggleRegistration() {
    var registrationContainer = document.getElementById('registration-container');
    registrationContainer.style.display = (registrationContainer.style.display === 'none' || registrationContainer.style.display === '') ? 'block' : 'none';
}


var currentIndex = 0;
var totalImages = document.querySelectorAll('.carousel-image').length;
var intervalId;
var direction = 1; // 1 for forward, -1 for reverse

function showImage(index) {
    document.getElementById('image-carousel').style.transform = 'translateX(' + (-index * 100) + '%)';
}

function nextImage() {
    currentIndex += direction;

    // Check if we have reached the last image
    if (currentIndex >= totalImages - 1) {
        currentIndex = 0; // Set index to the first image for smooth forward transition
    }

    showImage(currentIndex);
}

function startAutomaticSlide() {
    intervalId = setInterval(function () {
        nextImage();
    }, 3000); // Adjust the time interval (in milliseconds) between automatic slides
}

function stopAutomaticSlide() {
    clearInterval(intervalId);
}

// Start automatic sliding when the page loads
startAutomaticSlide();

// Pause automatic sliding when the user interacts with the carousel
document.getElementById('carousel-container').addEventListener('mouseenter', stopAutomaticSlide);
document.getElementById('carousel-container').addEventListener('mouseleave', startAutomaticSlide);

function toggleAnswer(question) {
    var answer = question.nextElementSibling;
    var arrow = question.lastElementChild;
    if (answer.style.display === 'none' || answer.style.display === '') {
        answer.style.display = 'block';
        arrow.innerHTML = '&#9650;';
    } else {
        answer.style.display = 'none';
        arrow.innerHTML = '&#9660;';
    }
}

