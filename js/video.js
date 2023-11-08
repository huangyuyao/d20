var video = document.getElementById("player1");


// Assume global variable 'video' is defined
window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video.autoplay = false;
	video.loop = false;
});

document.querySelector("#play").addEventListener("click", function() {
    console.log("Play Video");
	video.play();
	updateVolume();
 });

// Play Button
document.querySelector("#play").addEventListener("click", function() {
	console.log("play video");
	document.getElementById("volume").textContent = video.volume * 100 + "%";
	video.play();
});

// Pause Button
document.querySelector("#pause").addEventListener("click", function() {
    console.log("Pause Video");
    video.pause();
});

// Slow Down
document.querySelector("#slower").addEventListener("click", function() {
    video.playbackRate *= 0.9;
    console.log("New speed: " + video.playbackRate);
});

// Speed Up
document.querySelector("#faster").addEventListener("click", function() {
    video.playbackRate /= 0.9;
    console.log("New speed: " + video.playbackRate);
});

// Skip Ahead
document.querySelector("#skip").addEventListener("click", function() {
	if (video.currentTime + 10 < video.duration) {
        video.currentTime += 10;
    } else {
        video.currentTime = 0;
    }
    console.log("Current Time: " + video.currentTime);

// Mute
document.querySelector("#mute").addEventListener("click", function() {
	if (video.muted) {
        video.muted = false;
        muteButton.textContent = "Mute";
    } else {
        video.muted = true;
        muteButton.textContent = "Unmute";
    }
});

// Volume Slider
document.querySelector("#slider").addEventListener("change", function() {
	video.volume = (this.value / 100.0);
	document.querySelector("#volume").innerHTML = ((video.volume * 100.0) + "%");
    video.slider();
});


// Styled Button
document.querySelector("#vintage").addEventListener("click", function() {
    video.classList.add("oldSchool");
});

// Original Button
document.querySelector("#orig").addEventListener("click", function() {
    video.classList.remove("oldSchool");
});


// document.querySelector("#play").addEventListener("click", function() {
//  console.log("Play Video");
// });


