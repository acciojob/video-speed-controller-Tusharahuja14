const video = document.querySelector(".video-player");
const playBtn = document.querySelector(".player__video");
const speed = document.querySelector(".speed");
const speedBar = document.querySelector(".speed-bar");

// Function to toggle play/pause
function togglePlay() {
  if (video.paused) {
    video.play();
    playBtn.textContent = "❚ ❚"; // Change to Pause
  } else {
    video.pause();
    playBtn.textContent = "►"; // Change to Play
  }
}

// Function to change video speed
function changeSpeed(e) {
    const percent = e.offsetY / speed.offsetHeight;
    const minSpeed = 0.5;
    const maxSpeed = 2.0;
    const newSpeed = minSpeed + percent * (maxSpeed - minSpeed);

    video.playbackRate = newSpeed;
    speedBar.style.height = `${percent * 100}%`;
    speedBar.textContent = `${newSpeed.toFixed(1)}×`;
}

// Event Listeners
playBtn.addEventListener("click", togglePlay);
speed.addEventListener("mousemove", changeSpeed);
