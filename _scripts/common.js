$(document).ready(function() {

	function checkPos(){
		let pos = $(window).scrollTop();
		if(pos > "500") {
			$('.scrollTop').addClass("showButton");
		}
		else {
			$('.scrollTop').removeClass("showButton");
		}
	}

	$(document).scroll(function(e) {
		checkPos();
	});

	$('.hasMenu').click(function(e) {
		$('.subMenu').toggle('active');
	});

	$('.scrollTop').click(function(e) {
		$('html, body').animate({
			scrollTop: 0
		}, 1000);
	});
	$('.button').click(function(e) {
		if ($('.dropdown').hasClass('is-active')) {
			$('.dropdown').removeClass('is-active')
		} else {
		$('.dropdown').addClass('is-active');
		}
	});

	$('body').on('click','.buttonLoad', function() {
		//кнопку на которую нажали
		let button = $(this);
		// контейнер для товара
		let container = $('.shopWrapper-item');
		// ссылка для ajax запроса
		if(!button.hasClass('working')) {
			button.addClass('working');
			let data = {};
			data.action = 'more';
			// ajax request
			$.ajax({
				url: "postLink",
				type: "POST",
				dataType: "json",
				data: data,
				error: function(data) {
					button.removeClass('working');
				}
			}).done(function(data) {
				container.append(data.html);
				if(data.last) {
					button.removeClass('working');
				} else {
					button.remove();
				}
			});
		}
	});


	$('.shopWrapper-item').click(function(e) {
		// let hName = $(this, 'h3');
		// console.log(hName);
		// let data = $(this);
		// console.log(this);
		// let out = '';

		// for (let key in data) {
		// 	out += `<div class="modal-content">`
		// 	out += `<div class='content'>`,
		// 	out += `<h2>+data[key].h2+</h2>`,
		// 	out += `</div>`
		// 	out += `</div>`
		// }
		// $('.modal').html(out);
		$('.modal').addClass('is-active');

	});
	$('.modal-close').click(function(e) {
		$('.modal').removeClass('is-active');
	});
});