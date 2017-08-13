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

});