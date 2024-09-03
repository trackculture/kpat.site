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

// Static fallback favicon URL
const staticFavicon = 'images/static-favicon.png';

// Function to check browser compatibility
function isAnimationSupported() {
    const ua = navigator.userAgent;
    const isIOS = /iPhone|iPad|iPod/i.test(ua);
    const isSafari = /Safari/i.test(ua) && !/Chrome/i.test(ua);

    return !(isIOS && isSafari);
}

// Function to update the favicon
function updateFavicon() {
    let link = document.querySelector("link[rel*='icon']") || document.createElement('link');
    link.rel = 'icon';
    link.href = faviconFrames[currentFrame];
    document.head.appendChild(link);

    currentFrame = (currentFrame + 1) % faviconFrames.length;
}

// Initialize favicon based on browser compatibility
function initializeFavicon() {
    if (isAnimationSupported()) {
        // Start the animation loop
        setInterval(updateFavicon, animationSpeed);
    } else {
        // Use the static favicon as fallback
        const link = document.querySelector("link[rel*='icon']") || document.createElement('link');
        link.rel = 'icon';
        link.href = staticFavicon;
        document.head.appendChild(link);
    }
}

// Start the favicon setup
initializeFavicon();
