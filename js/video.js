var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window")

});

// Assume global variable 'video' is defined
window.addEventListener("load", function() {
	console.log("Good job opening the window");
	video = document.querySelector("video");
	video.autoplay = false;
	video.loop = false;
});

// Play Button
document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
	updateVolume();
});

// Pause Button
document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
});

// Slow Down
document.querySelector("#slower").addEventListener("click", function() {
	video.playbackRate *= 0.9;
	console.log("New speed is " + video.playbackRate);
});

// Speed Up
document.querySelector("#faster").addEventListener("click", function() {
	video.playbackRate /= 0.9;
	console.log("New speed is " + video.playbackRate);
});

// Skip Ahead
document.querySelector("#skip").addEventListener("click", function() {
	if(video.currentTime + 10 > video.duration){
		video.currentTime = 0;
		console.log("Going back to the start");
	} else {
		video.currentTime += 10;
	}
	console.log("Current location is " + video.currentTime);
});

// Mute
document.querySelector("#mute").addEventListener("click", function() {
	if(video.muted){
		video.muted = false;
		this.innerHTML = "Mute";
	} else {
		video.muted = true;
		this.innerHTML = "Unmute";
	}
});

// Volume Slider
document.querySelector("#slider").addEventListener("change", function() {
	video.volume = this.value / 100;
	updateVolume();
});

// Update Volume
function updateVolume() {
	let volumeInfo = document.querySelector("#volume");
	volumeInfo.innerHTML = video.volume * 100 + "%";
}

// Styled Button
document.querySelector("#vintage").addEventListener("click", function() {
	video.classList.add("oldSchool");
});

// Original Button
document.querySelector("#orig").addEventListener("click", function() {
	video.classList.remove("oldSchool");
});


// document.querySelector("#play").addEventListener("click", function() {
// 	console.log("Play Video");
// });

