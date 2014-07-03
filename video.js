var vid, playbtn;
function intializePlayer(){
	// Set object references
	vid = document.getElementById("my_video");
	playbtn = document.getElementById("playpausebtn");
	
	// OBJECT.addEventListener("EVENT",FUNCTION,false);
	playbtn.addEventListener("click",playPause,false);
	
}
window.onload = intializePlayer;
function playPause(){
	//if the video is paused, when you click on play button, vid.play()=video starts playing
	//if the video is playing, when you click on the pause button, vid.pause()=video stops playing
	if(vid.paused){
		vid.play();
		playbtn.style.background = "url('http://i163.photobucket.com/albums/t301/erosario809/playbtn.png')";
	} else {
		vid.pause();
		playbtn.style.background = "url('http://i163.photobucket.com/albums/t301/erosario809/pausebtn.png')";
	}
}
