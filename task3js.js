// Gallery Image Switching
const displayedImage = document.getElementById("displayed-image");
const thumbnails = document.querySelectorAll(".thumbnail");

thumbnails.forEach(thumbnail => {
    thumbnail.addEventListener("click", function() {
        displayedImage.src = this.src;
    });
});

// Audio Player Logic
const audio = document.getElementById("audio");
const playPauseBtn = document.getElementById("play-pause-btn");
const songInfo = document.getElementById("song-info");

let isPlaying = false;

playPauseBtn.addEventListener("click", () => {
    if (isPlaying) {
        audio.pause();
        playPauseBtn.textContent = "Play";
    } else {
        audio.play();
        playPauseBtn.textContent = "Pause";
    }
    isPlaying = !isPlaying;
});

// Add functionality to switch song information when a new image is clicked
thumbnails.forEach((thumbnail, index) => {
    thumbnail.addEventListener("click", function() {
        // Switch audio track and song info based on the clicked image
        audio.src = `music/song${index + 1}.mp3`; // Assuming song1.mp3, song2.mp3, etc.
        songInfo.textContent = `Song ${index + 1}`;
        
        // Auto-play new song after clicking thumbnail
        if (isPlaying) {
            audio.play();
        }
    });
});
