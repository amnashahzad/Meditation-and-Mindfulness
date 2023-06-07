// Get DOM elements
const audioPlayer = document.getElementById('audio-player');
const playBtn = document.getElementById('play-btn');
const pauseBtn = document.getElementById('pause-btn');
const mindfulnessText = document.getElementById('mindfulness-text');

// Add event listeners
playBtn.addEventListener('click', () => {
  audioPlayer.play();
});

pauseBtn.addEventListener('click', () => {
  audioPlayer.pause();
});

mindfulnessText.addEventListener('click', () => {
  mindfulnessText.textContent = 'Take a deep breath in... and exhale slowly.';
});
