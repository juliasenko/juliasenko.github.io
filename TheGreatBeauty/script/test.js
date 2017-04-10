/*Что умеет тест?

Можно выбрать вариант ответа (1 из 4);
После выбора ответа, пользователь будет знать – правильно ли он ответил на данный вопрос;
После прохождения теста, будет выведено количество и процент правильных ответов;
Будет засекаться время, потраченное на прохождение теста;
После теста, будет выводиться оценка (плохо, хорошо, отлично).

Для определения общего кол-ва вопросов, просто определяем размер массива с данными, это означает, что при добавлении или удалении вопросов из массива,
больше ничего изменять не нужно.

Также, после прохождения теста, пользователю выставляется оценка – в зависимости от процентного показателя правильных ответов (percent):

по умолчанию оценка: плохо!
если percent больше 80%: хорошо!
если percent равен 100%: отлично!*/

	//Массив вопросов и ответов
	/*Будем использовать двумерный массив, индекс этого массива будет определять номер вопроса, 
	  а каждый элемент массива – это еще один массив, содержащий в себе вопрос, варианты ответов и номер правильного ответа (всего 6 элементов).*/
	//Массив вопросов и ответа
	var data_array = [
	  ['Режиссёр фильма "Великая красота"?',"Джузеппе Д’Авандзо","Паоло Соррентино","Федерико Феллини","Мартин Скорсезе",2],
	  ["В каком городе происходят события?","Париж","Венеция","Флоренция","Рим",4],
	  ["Как зовут главного героя?","Джеп Гамбарделла","Паоло Соррентино","Тони Сервилло","Карло Вердоне",1],
	  ["Сколько лет Джепу Гамбарделла?","65","63","70","48",1],
	  ["Какой актер сыграл главного героя?","Джонни Депп","Леонардо ди Каприо","Тони Сервилло","Бред Питт",3],
	  ["Как назывался роман Джепа?",'«Великая красота»','«Аппарат человека»','«Триумфальная арка»','«Джульетта и духи»',2],
	];

	/*В переменной “plus” мы храним количество правильных ответов, по умолчанию в этой переменной хранится 0,
	  а при каждом правильном ответе эта переменная увеличивается соответственно на единицу.*/
	  var plus = 0;
	

	var time = 0;
	var cur_answer = 0;
	var count_answer = data_array.length;
	
	//Для учета времени (в секундах) будет использоваться функция – “sec”, эта функция увеличивает переменную time на 1 и выводит новое значение на экран.
	function sec() {
		time++;	
		document.getElementById('time').innerHTML='Затрачено времени: ' + time + ' сек';
	}
	
	function check(num){

		if(num == 0){ 
		
			document.getElementById('option1').style.display='block';
			document.getElementById('option2').style.display='block';
			document.getElementById('option3').style.display='block';
			document.getElementById('option4').style.display='block';
			document.getElementById('question').style.display='block';
			document.getElementById('fonTest').style.display='block';	
			

			document.getElementById('option1').innerHTML=data_array[cur_answer][1];
			document.getElementById('option2').innerHTML=data_array[cur_answer][2];
			document.getElementById('option3').innerHTML=data_array[cur_answer][3];
			document.getElementById('option4').innerHTML=data_array[cur_answer][4];
			document.getElementById('question').innerHTML=data_array[cur_answer][0];
			
			document.getElementById('start').style.display='none';
			document.getElementById('time').style.display='block';
			document.getElementById('end').style.display='inline';
			
			//Для того, чтобы время “шло”, используется интервал, установленный на одну секунду – этот интервал и запускает функцию sec (сразу после начала теста).
			var intervalID = setInterval(sec, 1000);
			
		}else{

			if( num ==  data_array[cur_answer][5]){
				plus++;
				document.getElementById('result').innerHTML='Верно!'+"<br>";
			}else{
				document.getElementById('result').innerHTML="Неверно!"+"<br>"+"Правильный ответ: " + data_array[cur_answer][data_array[cur_answer][5]]+"<br>";
			}
				
			cur_answer++;
			if(cur_answer < count_answer){
			
				document.getElementById('option1').innerHTML=data_array[cur_answer][1];
				document.getElementById('option2').innerHTML=data_array[cur_answer][2];
				document.getElementById('option3').innerHTML=data_array[cur_answer][3];
				document.getElementById('option4').innerHTML=data_array[cur_answer][4];
				document.getElementById('question').innerHTML=data_array[cur_answer][0];
				
			}else{
				
				document.getElementById('time').id = 'stop';
				document.getElementById('option1').style.display='none';
				document.getElementById('option2').style.display='none';
				document.getElementById('option3').style.display='none';
				document.getElementById('option4').style.display='none';
				document.getElementById('question').style.display='none';
				document.getElementById('end').style.display='inline';
				
				/*Для вычисления процентного показателя (переменная percent) правильных ответов, 
				просто делим кол-во правильных ответ на общее кол-во вопросов и умножаем это значение на 100.*/
				var percent =  Math.round(plus/count_answer*100);				
				var res = 'Похоже, кто-то заснул еще на трейлере!';
				if(percent>60) res = 'Соррентино ликует и танцует "ча-ча-ча"!';
				if(percent==100) res = 'Окей, гугл: Как перестать смотреть этот фильм 24/7?';
				
				document.getElementById('resultEnd').innerHTML='Правильных ответов: ' + plus + ' из ' + count_answer + ' (' + percent + '%)<br>';
				document.getElementById('resultEndSmile').innerHTML=res;
			}
		}
	}