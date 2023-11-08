var video;


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
	video.play();
	let vol =document.querySelector("#volume").innerHTML = (video.volume * 100) + "%";
    //updateVolume();
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
    if(video.muted == true){
        video.muted = false;
        document.querySelector('#mute').innerHTML = "Mute";
    } else {
        video.muted = true;
        document.querySelector('#mute').innerHTML = "Unmute";
    }
});

// Volume Slider
document.querySelector("#slider").addEventListener("input", function() {


	slide = document.getElementById("slider");
	video.volume = slide.value / 100;
	let vol = document.querySelector("#volume").innerHTML = (video.volume * 100) + "%";
	console.log(video.volume);

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


