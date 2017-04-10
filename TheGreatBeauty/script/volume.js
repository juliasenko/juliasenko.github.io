
var flag=false; 
function imgchange(){ 
     if (flag)  
         document.all.volume.src = "img/equalizer.gif"; 
    else  
         document.all.volume.src = "img/audio_wave.png"; 
    flag=!flag; 
} 
