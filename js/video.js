var video = document.querySelector("#player1");


// Assume global variable 'video' is defined
window.addEventListener("load", function() {
    console.log("Good job opening the window");
    video = document.querySelector("#player1");
    video.autoplay = false;
    video.loop = false;
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
	video.play();
});

// Mute
document.querySelector("#mute").addEventListener("click", function() {
	if (video.muted){
		video.muted = false;
		console.log("Video unmuted")
		document.getElementById("mute").textContent = "Mute";
		document.getElementById("volume").textContent = document.getElementById("slider").value + "%";
	} else {
		video.muted = true;
		console.log("Video muted");
		document.getElementById("mute").textContent = "Unmute";
		document.getElementById("volume").textContent = 0 * 100 + "%";
	}
});

// Volume Slider
document.querySelector("#slider").addEventListener("change", function() {

	video.volume = document.getElementById("slider").value / 100;
	document.getElementById("volume").textContent = video.volume * 100 + "%";
	console.log("Volume slided!");
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


