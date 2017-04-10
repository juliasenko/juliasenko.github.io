
      
	function main() {
	
	function okno(e)
		{
			var vidimost = document.getElementById('forma');
			vidimost.style.display = 'block'; 
			vidimost.style.zIndex = 103;
			
			document.getElementById('krestik').addEventListener("click",exit);
			e.stopPropagation();
			function exit(){
			
				vidimost.style.display = 'none'; 				
			}
			
			$("body").click(function(e) {

				if($(e.target).closest("#forma").length==0) $("#forma").css("display","none");

			});
            
			/* 	Написать программу полной проверки формы регистрации:
			•	* - поля, обязательные к заполнению;
			•	возраст должен быть более 18 и менее 90 лет;
			•	поле e-mail должно быть реальным.
			*/
			
	document.getElementsByName('myForm')[0].addEventListener("click", validateFirst); 
			
	function validateFirst(){
		return validate(this);
		}		

	function validate(forma)
	{	//очистка сообщений об ошибке
		var mySpan = forma.getElementsByTagName("span");
		for (var i=mySpan.length-1; i>=0; i--)	
		{
			mySpan[i].remove();
		}
		//проверяем поля имени и фамилии на "не пустое", возраст и e-mail
		var ima = isFullText(forma.ima);
		var family = isFullText(forma.family);
		var age = isCorrectAge(forma.age);
		var mail = isCorrectMail(forma.mail);
		
		console.log (ima, family, age, mail);
		
		document.getElementById('submit').addEventListener("click", validateAccepted); 
		function validateAccepted(){
		if (ima && family && age && mail){ 
			alert("Спасибо за регистрацию");
		  }
		}

		return ima && family && age && mail;
		//return false;
	}
	
	function isFullText(text){
		if (text.value.trim().length == 0)
		{	text.style.border = "solid 1px red";
			var item = document.createElement("span");
			item.innerHTML = " * </br> Заполните поле";
			text.parentNode.insertBefore(item,text.nextSibling);
			return false;
		}
		
			text.style.border = "solid 1px #1483f7";
			return true;
	}
	
	function isCorrectAge(text){ 
		
		var age = parseInt(text.value);
		//console.log();
		if (text.value.trim().length == 0)
		{	text.style.border = "solid 1px red";
			var item = document.createElement("span");
			item.innerHTML = " * </br> Заполните поле";
			text.parentNode.insertBefore(item,text.nextSibling);
			return false;
		}
		if (isNaN(age))
		{	text.style.border = "solid 1px red";
			var item = document.createElement("span");
			item.innerHTML = "</br> Введите корректный возраст";
			text.parentNode.insertBefore(item,text.nextSibling);
			return false;
		}
		if (age<18 || age>90)
		{	text.style.border = "solid 1px red";
			var item = document.createElement("span");
			item.innerHTML = "</br> Ограничение 18+";
			text.parentNode.insertBefore(item,text.nextSibling);
			return false;
		}
			text.style.border = "solid 1px #1483f7";
			text.value = age;
			return true;
			
	}

	function isCorrectMail(text){ 
    
		var email = document.myForm.mail.value;
		if (/\w+@\w+\.[a-z]{2,3}/i.test(email))
		    {	text.style.border = "solid 1px #1483f7";
				return true;
		    }
		
			text.style.border = "solid 1px red";
			var item = document.createElement("span");
			item.innerHTML = "*</br> Введите реальный e-mail";
			text.parentNode.insertBefore(item,text.nextSibling);
			return false;
	} 
	
	}	
	document.getElementById('knopka1').addEventListener("click",okno); 
	}
	window.addEventListener("load", main);