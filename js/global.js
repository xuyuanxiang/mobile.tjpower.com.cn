$(document).ready(function() {
	$('body').hide();
	$('.subnav').slick({
		slidesToShow : 4,
		slidesToScroll : 4,
		slide : 'span'
	});
	$('body').fadeIn(1000);
});
