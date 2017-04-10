 //Смена языка при нажатии на стрелку выбора
 
 	  
	function main() {
   
		var vybor = document.getElementById("language").getElementsByTagName("img")[0]; //получаем нашу стрелку
		
		function changeLanguage() {
			var language = document.getElementById("language").getElementsByTagName("a")[0].innerHTML; //получаем текстовое значение на данный момент
					
			var list = document.getElementById("language");//наш элемент списка внутри с ссылкой
			var item = document.createElement("a");
			
			if (language == "РУС")
					{
						var txt = document.createTextNode("ENG");
						item.appendChild(txt); 
						list.replaceChild(item, list.firstChild);
						
					}
				else
					{
						var txt = document.createTextNode("РУС");
						item.appendChild(txt); 
						list.replaceChild(item, list.firstChild);
					}
		}
		    
	    vybor.addEventListener("click",changeLanguage); 
    }
    
	window.addEventListener("load", main);
    