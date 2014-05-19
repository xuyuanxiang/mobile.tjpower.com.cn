$(document).ready(function() {
	$('body').hide().fadeIn(2000);
	$('.subnav').slick({
		slidesToShow : 4,
		slidesToScroll : 4,
		slide : 'span'
	});
});
