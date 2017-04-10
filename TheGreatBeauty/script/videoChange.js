
var flag=false; 
function videochange(){ 
	
	var list = document.getElementById("videoName");
	console.log(item);
	var item = document.createElement("a");
	
     if (flag) {  

        document.all.videoChange.src = "video/La Grande Bellezza _Trailer Ufficiale.mp4"; 
	 		 
		var txt = document.createTextNode("Trailer Ufficiale");
		item.appendChild(txt); 
		list.replaceChild(item, list.firstChild);}
    else  {
         document.all.videoChange.src = "video/La Grande Bellezza di Roma dietro le quinte.mp4"; 
	 
		var txt = document.createTextNode("Backstage");
		item.appendChild(txt); 
		list.replaceChild(item, list.firstChild);
	}	
    flag=!flag; 
} 
