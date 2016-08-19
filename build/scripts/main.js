
//Get array of bubbles
var bubbles = document.getElementsByClassName("bubble__song--hover");
var song__cover;
var bubble__song;
var song;
//Iterate each bubbles
function bubbleEfect(){
	for (var i = 0; i < bubbles.length; i++) {
		
		bubbles[i].addEventListener("click", function(){

			song__cover = this.childNodes;
			song = this.nextElementSibling;

			if(event.target.className == "img-responsive song__cover song__cover--click"){

				bubble__song = this.classList.remove("bubble__song--click");
				song__cover[1].classList.remove("song__cover--click");
				song.classList.add("hidden__song");
				song.classList.remove("song");

			}else{

				bubble__song = this.classList.add("bubble__song--click");
				song__cover[1].classList.add("song__cover--click");
				
				setTimeout(function(){
					song.classList.add("song");
					song.classList.remove("hidden__song");
				},2000);
				
			}

		});

	}
}

bubbleEfect();