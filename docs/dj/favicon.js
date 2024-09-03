// Array of image URLs for the animation
const faviconFrames = [
    'GIF/DJ1.png',
    'GIF/DJ2.png',
    'GIF/DJ3.png',
    'GIF/DJ4.png',
    'GIF/DJ5.png',
    'GIF/DJ6.png',
    'GIF/DJ7.png'
];

// Set the initial frame index and animation speed (in milliseconds)
let currentFrame = 0;
const animationSpeed = 200; // Change frame every 200ms

// Function to update the favicon
function updateFavicon() {
  const link = document.getElementById('favicon');

  // Update the favicon's href to the current frame
  link.href = faviconFrames[currentFrame];

  // Update the frame index, looping back to 0 if at the end
  currentFrame = (currentFrame + 1) % faviconFrames.length;
}

// Function to initialize the favicon animation
function initializeFaviconAnimation() {
  // Check if the browser supports animated favicons (basic check, more can be added)
  if (document.visibilityState === 'visible' && 'querySelector' in document) {
    setInterval(updateFavicon, animationSpeed);
  }
}

// Start the favicon animation when the page is fully loaded
document.addEventListener('DOMContentLoaded', initializeFaviconAnimation);
