$(document).ready(function() {

	setTimeout(function() {
		$('.preloader').addClass('done');
	},1000);

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
		e.preventDefault();
		if($('.subMenu').hasClass('activeMenu')) {
			$('.subMenu').removeClass('activeMenu');
		} else {
			$('.subMenu').addClass('activeMenu');
		}
	});

	$('.scrollTop').click(function(e) {
		$('html, body').animate({
			scrollTop: 0
		}, 1000);
	});

	$('#dropdown').click(function(e) {
		if ($('.dropdown').hasClass('is-active')) {
			$('.dropdown').removeClass('is-active')
		} else {
		$('.dropdown').addClass('is-active');
		}
	});
/*
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
*/

	$('.shopWrapper-item').click(function(e) {
		$('.modal').addClass('is-active');
	});
	$('.modal-close').click(function(e) {
		$('.modal').removeClass('is-active');
	});

	$('#form').submit(function(e) {
		e.preventDefault();
		let data = $(this);
		$.ajax({
			type: "POST",
			url: "./php/mail.php",
			data: data.serialize()
		}).done(function() {
			alert('thanks');
		});
		return false
	});

	$('#sub').submit(function(e) {
		e.preventDefault();
		let data = $(this);
		$.ajax({
			type: "POST",
			url: "./php/subMail.php",
			data: data.serialize()
		}).done(function() {
			alert("Спасибо!");
		});
	});
});

$(window).on('load',function() {
	$('#countdown').timeTo({
    timeTo: new Date(new Date('Fri Aug 24 2017 17:33:24 GMT+0300 (Финляндия (лето))')),
    displayDays: 2,
    theme: "black",
    displayCaptions: true,
    fontSize: 48,
    captionSize: 14,
    lang: "ru"
}); 
});