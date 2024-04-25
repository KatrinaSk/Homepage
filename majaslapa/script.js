// Get references to the images
var images = document.querySelectorAll('.img-container1 img');

// Hide all images except the first one
for (var i = 1; i < images.length; i++) {
  images[i].style.display = 'none';
}

// Set initial index
var currentIndex = 0;

// Function to switch images
function changeImage() {
  // Hide all images
  for (var i = 0; i < images.length; i++) {
    images[i].style.display = 'none';
  }

  // Show the current image
  images[currentIndex].style.display = 'block';

  // Increment index
  currentIndex++;

  // Reset index if it exceeds the number of images
  if (currentIndex >= images.length) {
    currentIndex = 0;
  }
}

// Call the changeImage function every 3000ms
setInterval(changeImage, 3000);
