
	window.onload = function() { // запуск слайдера после загрузки документа
		slider.init();
		setInterval(function() { // ставим пятисекундный интервал для перелистывания картинок
			slider.right();
		},5000);
	};
	var slider = {
		slides:['images/slaider.jpg','images/slaider1.jpg','images/slaider2.jpg','images/slaider3.jpg','images/slaider4.jpg','images/slaider5.jpg'],
		frame:0, // текущий кадр для отбражения - индекс картинки из массива
		set: function(image) { // установка нужного фона слайдеру
			document.getElementById("karusel").style.backgroundImage = "url("+image+")";
		},
		init: function() { // запуск слайдера с картинкой с нулевым индексом
			this.set(this.slides[this.frame]);
		},
		left: function() { // крутим на один кадр влево
			this.frame--;
			if(this.frame < 0) this.frame = this.slides.length-1;
			this.set(this.slides[this.frame]);
		},
		right: function() { // крутим на один кадр вправо
			this.frame++;
			if(this.frame == this.slides.length) this.frame = 0;
			this.set(this.slides[this.frame]);		
		}
	};
	