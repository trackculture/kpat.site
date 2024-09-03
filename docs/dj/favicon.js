// Array of image URLs for the animation
const faviconFrames = [
    'GIF/DJ1.png',
    'GIF/DJ2.png',
    'GIF/DJ3.png',
    'GIF/DJ4.png',
    'GIF/DJ5.png',
    'iGIF/DJ6.png',
    'GIF/DJ7.png'
  ];
 
// Set the initial frame index and animation speed (in milliseconds)
let currentFrame = 0;
const animationSpeed = 200; // Change frame every 200ms

// Function to update the favicon
function updateFavicon() {
  // Select the existing favicon link element or create it if not found
  let link = document.querySelector("link[rel*='icon']");
  if (!link) {
    link = document.createElement('link');
    link.rel = 'icon';
    document.getElementsByTagName('head')[0].appendChild(link);
  }

  // Update the favicon's href to the current frame
  link.href = faviconFrames[currentFrame];

  // Update the frame index, looping back to 0 if at the end
  currentFrame = (currentFrame + 1) % faviconFrames.length;
}

// Start the animation loop
setInterval(updateFavicon, animationSpeed);