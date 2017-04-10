 //Всплывающий блок при шелчке на кноку "Узнать больше"
 
 	  
	function main() {
   		
		document.onclick = function(event) {
		var target = event.target;

		var id = target.getAttribute('data-toggle-id');
		if (!id) return;

		var elem = document.getElementById(id);

		elem.hidden = !elem.hidden;
		}
    }
    
	window.addEventListener("load", main);
    