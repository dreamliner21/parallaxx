const animatedElements = document.querySelectorAll('.animate');

const onScroll = () => {
  animatedElements.forEach((el) => {
    const rect = el.getBoundingClientRect();
    if (rect.top <= window.innerHeight * 0.8) {
      el.classList.add('active');
    }
  });
};

window.addEventListener('scroll', onScroll);
window.addEventListener('load', onScroll);

// Play video function
function playVideo(videoId, cardElement) {
  const video = document.getElementById(videoId);
  const image = cardElement.querySelector('.project-image');

  // Pause and hide all videos
  const allVideos = document.querySelectorAll('.project-video');
  allVideos.forEach(v => {
    v.pause();
    v.currentTime = 0; // Reset the video
    v.style.display = "none"; // Hide all videos
  });

  // Show the selected video and hide its associated image
  video.style.display = "block"; // Show the video
  image.style.opacity = "0"; // Hide the image of the clicked card
  video.play(); // Play the selected video

  // Show image again when video ends
  video.onended = function() {
    video.style.display = "none"; // Hide the video
    image.style.opacity = "1"; // Show the image again
  };
}
