//Get array of bubbles
var bubbles = document.getElementsByClassName("bubble__song--hover");

//Iterate each bubbles
for (var i = 0; i < bubbles.length; i++) {
	bubbles[i].addEventListener("click", function(){
		var song__cover;
		var bubble__song;

		bubble__song = this.classList.add("bubble__song--click");

		song__cover = this.childNodes;
		song__cover[1].classList.add("song__cover--click");


	});
}