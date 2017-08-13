$(document).ready(function() {
	let docHeight = $(document).height();
	let step = 2;
	let scrollSpeed = docHeight / step;


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
		}, scrollSpeed);
	});
	$('.button').click(function(e) {
		if ($('.dropdown').hasClass('is-active')) {
			$('.dropdown').removeClass('is-active')
		} else {
		$('.dropdown').addClass('is-active');
		}
	});

	$('.buttonLoad').click(function(e) {
		alert('Loading Content...');
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