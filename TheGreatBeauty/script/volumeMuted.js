document.getElementById("volume").addEventListener("click", function (evt) {
 var audio = document.getElementsByTagName("audio")[0];
 console.log(audio);
    if (audio.muted) {
        audio.muted = false;
          } 
	else {
        audio.muted = true;
         }
}, false);