// 🎥 Select Video and Controls
const video = document.querySelector(".video-player");
const playBtn = document.querySelector(".toggle");
const rewindBtn = document.querySelector(".rewind");
const forwardBtn = document.querySelector(".forward");
const progressBar = document.querySelector(".progress-bar");
const volumeBar = document.querySelector(".volume-bar"); // Select volume input
const speed = document.querySelector(".speed");
const speedBar = document.querySelector(".speed-bar");

// ✅ Set Default Volume to 75%
video.volume = 0.75;
volumeBar.value = 0.75;

// 🎬 Toggle Play/Pause
function togglePlay() {
  if (video.paused) {
    video.play();
    playBtn.textContent = "❚ ❚";
  } else {
    video.pause();
    playBtn.textContent = "►";
  }
}

// ⏳ Update Progress Bar
function updateProgress() {
  const progressPercent = (video.currentTime / video.duration) * 100;
  progressBar.value = progressPercent;
}

// ⏩ Seek Video
function setProgress() {
  video.currentTime = (progressBar.value / 100) * video.duration;
}
const progressValue = progressBar.value || 0;
expect(progressValue).to.be.a("number");


function changeVolume() {
  video.volume = volumeBar.value;
}

// ⏮ Rewind 10s
function rewind() {
  video.currentTime -= 10;
}

// ⏭ Forward 25s
function forward() {
  video.currentTime += 25;
}

// ⏩ Change Speed
function changeSpeed(e) {
  const percent = e.offsetY / speed.offsetHeight;
  const minSpeed = 0.5;
  const maxSpeed = 2.0;
  const newSpeed = minSpeed + percent * (maxSpeed - minSpeed);

  video.playbackRate = newSpeed;
  speedBar.style.height = `${percent * 100}%`;
  speedBar.textContent = `${newSpeed.toFixed(1)}×`;
}

// 🎯 Event Listeners
playBtn.addEventListener("click", togglePlay);
video.addEventListener("timeupdate", updateProgress);
progressBar.addEventListener("input", setProgress);
volumeBar.addEventListener("input", changeVolume); // Volume control
rewindBtn.addEventListener("click", rewind);
forwardBtn.addEventListener("click", forward);
speed.addEventListener("mousemove", changeSpeed);
