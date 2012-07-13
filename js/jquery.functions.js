	$(document).ready(function() {
		$('a[href^="#"]').click(function(event) {
			var id = $(this).attr("href");
			var offset = 60;
			var target = $(id).offset().top - offset;

			$('html, body').animate({scrollTop:target}, 500);
			event.preventDefault();
		});
		$('#my-slideshow').bjqs({
		'width' : 778,
		'height' : 370,
		'nextText': 'Anterior',
		'prevText': 'Siguiente',
		'showMarkers' : false,
		'showControls' : true,
		'centerMarkers' : true,
		'automatic': true
		});
});